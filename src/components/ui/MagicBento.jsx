import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/cn.js';

export const MagicBento = ({
    children,
    className = "",
    textAutoHide = false,
    enableStars = false, // Disabled by default for professional look
    enableSpotlight = true,
    enableBorderGlow = true,
    enableTilt = false,
    enableMagnetism = false,
    clickEffect = false, // Disabled by default
    spotlightRadius = 500,
    particleCount = 12,
    glowColor = "255, 255, 255", // Default to neutral white for professional look
    disableAnimations = false
}) => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [clickParticles, setClickParticles] = useState([]);

    // GSAP Effects: Tilt, Magnetism, Elevation & Glow Intensity
    useEffect(() => {
        if (disableAnimations) return;
        const el = containerRef.current;
        if (!el) return;

        const handleMouseMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // CSS Variables for Spotlight position
            el.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
            el.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);

            if (enableTilt && !disableAnimations) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;

                gsap.to(el, {
                    rotateX,
                    rotateY,
                    duration: 0.4,
                    ease: "power2.out",
                    transformPerspective: 1000
                });
            }

            if (enableMagnetism && !disableAnimations) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const deltaX = (x - centerX) * 0.1;
                const deltaY = (y - centerY) * 0.1;
                gsap.to(el, { x: deltaX, y: deltaY, duration: 0.4, ease: "power2.out" });
            }
        };

        const handleMouseEnter = () => {
            setIsHovered(true);
            // Professional Elevation & Subtler Shadow
            gsap.to(el, {
                y: -4,
                boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.4)",
                "--glow-intensity": 1,
                duration: 0.4,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
            // Reset Elevation
            gsap.to(el, {
                y: 0,
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                "--glow-intensity": 0,
                duration: 0.6,
                ease: "power2.out"
            });
            if (enableTilt) gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
            if (enableMagnetism) gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
        };

        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
            el.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [enableTilt, enableMagnetism, disableAnimations]);

    // Star Effect (Canvas)
    useEffect(() => {
        if (!enableStars || disableAnimations) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const stars = Array.from({ length: particleCount * 2 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random()
        }));

        const resizeCanvas = () => {
            const rect = containerRef.current.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                star.y -= star.speed;
                if (star.y < 0) star.y = canvas.height;
            });
            animationFrameId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [enableStars, particleCount, disableAnimations]);

    // Click Effect: Handle Burst
    const handleClick = (e) => {
        if (!clickEffect || disableAnimations) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newParticles = Array.from({ length: 8 }, (_, i) => ({
            id: Date.now() + i,
            x,
            y,
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 0.5) * 10
        }));

        setClickParticles(prev => [...prev, ...newParticles].slice(-24));
        setTimeout(() => {
            setClickParticles(prev => prev.filter(p => !newParticles.includes(p)));
        }, 1000);
    };

    return (
        <div
            ref={containerRef}
            onClick={handleClick}
            className={cn(
                "magic-bento-container relative overflow-hidden h-full rounded-[inherit] transition-colors duration-500",
                "bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04]",
                className
            )}
            style={{
                '--glow-color': glowColor,
                '--spotlight-radius': `${spotlightRadius}px`
            }}
        >
            {/* Background Layer: Stars/Canvas */}
            {enableStars && (
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 pointer-events-none opacity-40 z-0"
                />
            )}

            {/* Subtle Spotlight Layer */}
            {enableSpotlight && (
                <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                    style={{
                        background: `radial-gradient(var(--spotlight-radius) circle at var(--glow-x) var(--glow-y), rgba(${glowColor}, 0.08), transparent 80%)`
                    }}
                />
            )}

            {/* Content Wrapper */}
            <div className={cn(
                "relative z-20 h-full transition-all duration-500",
                textAutoHide && !isHovered && "opacity-80"
            )}>
                {children}
            </div>

            {/* Click Particles Wrapper */}
            {clickEffect && (
                <div className="absolute inset-0 pointer-events-none z-50">
                    <AnimatePresence>
                        {clickParticles.map(p => (
                            <motion.div
                                key={p.id}
                                initial={{ x: p.x, y: p.y, scale: 1, opacity: 1 }}
                                animate={{
                                    x: p.x + p.vx * 15,
                                    y: p.y + p.vy * 15,
                                    scale: 0,
                                    opacity: 0
                                }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="absolute w-1 h-1 rounded-full"
                                style={{ backgroundColor: `rgb(${glowColor})` }}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            )}

            {/* Subtle Border Glow (Refined) */}
            {enableBorderGlow && (
                <div
                    className="absolute inset-0 pointer-events-none z-30 rounded-[inherit]"
                    style={{
                        padding: '1px',
                        background: `radial-gradient(var(--spotlight-radius) circle at var(--glow-x) var(--glow-y), rgba(${glowColor}, calc(var(--glow-intensity, 0) * 0.3)), transparent 70%)`,
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude'
                    }}
                />
            )}
        </div>
    );
};

export default MagicBento;
