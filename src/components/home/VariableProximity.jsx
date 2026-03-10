import { forwardRef, useMemo, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

function useMousePositionRef(containerRef) {
    const mousePositionRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePositionRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return mousePositionRef;
}

const VariableProximity = forwardRef((props, ref) => {
    const {
        label,
        fromFontVariationSettings,
        toFontVariationSettings,
        containerRef,
        radius = 100,
        falloff = "linear",
        className = "",
        onClick,
        ...rest
    } = props;

    const letterRefs = useRef([]);
    const mousePositionRef = useMousePositionRef(containerRef);
    const isReducedMotion = useReducedMotion();
    const requestRef = useRef();

    // Tasks requirements: 
    // 1. Mobile width < 768px check
    // 2. document.visibilityState optimization
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

    const parsedSettings = useMemo(() => {
        const parse = (s) => {
            const parts = s.split(",").map((p) => p.trim());
            const settings = {};
            parts.forEach((p) => {
                const [key, value] = p.split(" ");
                settings[key.replace(/'/g, "")] = parseFloat(value);
            });
            return settings;
        };
        return {
            from: parse(fromFontVariationSettings),
            to: parse(toFontVariationSettings),
        };
    }, [fromFontVariationSettings, toFontVariationSettings]);

    const calculateDistance = (x1, y1, x2, y2) => {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    const calculateFalloff = (distance, radius, type) => {
        const normalizedDistance = Math.min(Math.max(distance / radius, 0), 1);
        switch (type) {
            case "gaussian":
                return Math.exp(-Math.pow(normalizedDistance, 2) * 4);
            case "exponential":
                return Math.pow(1 - normalizedDistance, 2);
            case "linear":
            default:
                return 1 - normalizedDistance;
        }
    };

    useEffect(() => {
        if (isReducedMotion || isMobile) return;

        const updateStyles = () => {
            if (document.visibilityState !== "visible") {
                requestRef.current = requestAnimationFrame(updateStyles);
                return;
            }

            letterRefs.current.forEach((letter, index) => {
                if (!letter) return;
                const rect = letter.getBoundingClientRect();
                const letterX = rect.left + rect.width / 2;
                const letterY = rect.top + rect.height / 2;

                const distance = calculateDistance(
                    mousePositionRef.current.x,
                    mousePositionRef.current.y,
                    letterX,
                    letterY
                );

                const strength = calculateFalloff(distance, radius, falloff);

                const newSettings = Object.keys(parsedSettings.from)
                    .map((key) => {
                        const fromValue = parsedSettings.from[key];
                        const toValue = parsedSettings.to[key];
                        const currentValue = fromValue + (toValue - fromValue) * strength;
                        return `'${key}' ${currentValue}`;
                    })
                    .join(", ");

                letter.style.fontVariationSettings = newSettings;
            });

            requestRef.current = requestAnimationFrame(updateStyles);
        };

        requestRef.current = requestAnimationFrame(updateStyles);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [mousePositionRef, radius, falloff, parsedSettings, isReducedMotion, isMobile]);

    const words = label.split(" ");

    return (
        <span
            ref={ref}
            className={`inline ${className} ${onClick ? 'cursor-pointer' : ''}`}
            onClick={onClick}
            style={{ fontFamily: "'Roboto Flex', sans-serif" }}
            {...rest}
        >
            <span className="sr-only">{label}</span>
            <span aria-hidden="true" className="inline flex-wrap">
                {words.map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block sm:whitespace-nowrap">
                        {word.split("").map((letter, letterIndex) => {
                            const index = words
                                .slice(0, wordIndex)
                                .join("")
                                .split("").length + letterIndex;

                            return (
                                <span
                                    key={index}
                                    ref={(el) => (letterRefs.current[index] = el)}
                                    className="inline-block"
                                    style={{
                                        fontVariationSettings: isReducedMotion || isMobile ? fromFontVariationSettings : undefined,
                                        transition: isReducedMotion || isMobile ? "none" : "font-variation-settings 0.1s ease-out",
                                        willChange: "font-variation-settings"
                                    }}
                                >
                                    {letter}
                                </span>
                            );
                        })}
                        {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
                    </span>
                ))}
            </span>
        </span>
    );
});

VariableProximity.displayName = "VariableProximity";

export default VariableProximity;
