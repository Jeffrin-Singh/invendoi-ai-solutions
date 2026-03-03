import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", decimals = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <span ref={ref} className="tabular-nums">
            {inView ? (
                <CountUp end={value} duration={1.6} decimals={decimals} suffix={suffix} />
            ) : (
                `0${suffix}`
            )}
        </span>
    );
}
