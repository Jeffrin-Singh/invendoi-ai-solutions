import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export const MagicWrapper = ({ children, glowColor = "99, 102, 241", enableTilt = true }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const handleMouseMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Set CSS Variables for the border glow CSS
            el.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
            el.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
            el.style.setProperty('--glow-intensity', '1');

            if (enableTilt) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;

                gsap.to(el, {
                    rotateX,
                    rotateY,
                    duration: 0.3,
                    ease: "power2.out",
                    transformPerspective: 1000
                });
            }
        };

        const handleMouseLeave = () => {
            el.style.setProperty('--glow-intensity', '0');
            gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.5 });
        };

        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [enableTilt]);

    return (
        <div
            ref={cardRef}
            className="card--border-glow relative group h-full"
            style={{ '--glow-color': glowColor }}
        >
            {children}
        </div>
    );
};