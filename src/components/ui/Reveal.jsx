import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Reveal({
    children,
    width = "100%",
    className = "",
    boxClassName = "",
    delay = 0,
    ...props
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div
            ref={ref}
            className={className}
            style={{ position: "relative", width, overflow: "visible", minWidth: 0 }}
            {...props}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.98 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, ease: "easeOut", delay }}
                className={boxClassName}
            >
                {children}
            </motion.div>
        </div>
    );
}
