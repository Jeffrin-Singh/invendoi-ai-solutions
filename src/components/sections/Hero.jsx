import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Radar, MapPinned, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { company } from "../../data/company";
import { theme } from "../../styles/theme";
import DetectionDemo from "../home/DetectionDemo.jsx";
import VariableProximity from "../home/VariableProximity";

const BADGES = ["Edge AI", "Real-time Video Analytics", "Audit-ready Evidence"];

function BadgeMarquee({ reduce }) {
    // Reduced motion → static badges (no loop)
    if (reduce) {
        return (
            <div className="flex flex-wrap gap-2">
                {BADGES.map((b) => (
                    <Badge key={b} variant="outline">
                        {b}
                    </Badge>
                ))}
            </div>
        );
    }

    const track = [...BADGES, ...BADGES]; // duplicate for seamless loop

    return (
        <div className="relative overflow-hidden">
            {/* Fade edges (premium look) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-[#0b1220] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-[#0b1220] to-transparent z-10" />

            <motion.div
                className="flex gap-2 w-max whitespace-nowrap will-change-transform"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            >
                {track.map((b, i) => (
                    <Badge key={`${b}-${i}`} variant="outline">
                        {b}
                    </Badge>
                ))}
            </motion.div>
        </div>
    );
}

export default function Hero() {
    const reduce = useReducedMotion();
    const containerRef = useRef(null);

    return (
        <section className="relative overflow-x-hidden pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
            {/* Background Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={reduce ? {} : { scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] -left-[10%] w-[100%] h-[50%] sm:w-[50%] rounded-full bg-indigo-500/20 blur-[60px] sm:blur-[120px]"
                />
                <motion.div
                    animate={reduce ? {} : { scale: [1, 1.3, 1], opacity: [0.08, 0.18, 0.08] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[20%] -right-[15%] w-[80%] h-[40%] sm:w-[40%] rounded-full bg-cyan-400/15 blur-[50px] sm:blur-[100px]"
                />
            </div>

            <div className="absolute inset-0 grid-overlay opacity-[0.05]" />

            <Container className="relative">
                <div ref={containerRef} className="grid lg:grid-cols-12 gap-10 lg:gap-16" style={{ alignItems: "start" }}>
                    <div className="lg:col-span-6 min-w-0">
                        {/* ✅ Marquee badge loop */}
                        <motion.div
                            initial={reduce ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-full overflow-hidden"
                        >
                            <BadgeMarquee reduce={reduce} />
                        </motion.div>

                        <motion.h1
                            initial={reduce ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mt-6 font-display text-[1.75rem] xs:text-[2.2rem] sm:text-5xl lg:text-7xl leading-[1.2] xs:leading-[1.1] sm:leading-[1.05] text-white tracking-tight text-pretty"
                            style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
                        >
                            Edge AI video analytics{" "}
                            <span className="block sm:inline">
                                <VariableProximity
                                    label="for real-world enforcement & operations."
                                    containerRef={containerRef}
                                    radius={90}
                                    falloff="gaussian"
                                    fromFontVariationSettings="'wght' 600, 'wdth' 100"
                                    toFontVariationSettings="'wght' 1000, 'wdth' 150"
                                    className={theme.gradientText}
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={reduce ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`mt-6 text-base sm:text-lg lg:text-xl ${theme.mutedText} leading-relaxed max-w-2xl text-pretty`}
                        >
                            Deploy on CCTV, Jetson-class edge devices, or secure servers. Detect incidents in real time, generate
                            evidence automatically, and route geo-tagged alerts to teams—built for scale, low bandwidth, and
                            accountable workflows.
                        </motion.p>

                        {/* DetectionDemo — mobile/tablet only, aligned to left content edge */}
                        <motion.div
                            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="relative mt-8 block lg:hidden"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 rounded-[44px] blur-xl opacity-60" />
                            <DetectionDemo className="relative w-full h-auto" />
                        </motion.div>

                        <motion.div
                            initial={reduce ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-10 flex flex-col mobile:flex-row flex-wrap gap-4"
                        >
                            <Button as={Link} to="/contact" className="px-8 py-4 w-full mobile:w-auto inline-flex items-center justify-center">
                                Request a Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button as={Link} to="/case-studies" variant="secondary" className="px-8 py-4 w-full mobile:w-auto inline-flex items-center justify-center">
                                View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right visual — desktop only */}
                    <div className="hidden lg:block lg:col-span-6" style={{ alignSelf: "start", position: "sticky", top: "6rem" }}>
                        <motion.div
                            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 rounded-[44px] blur-xl opacity-60" />
                            <DetectionDemo className="relative w-full h-auto" />
                        </motion.div>
                    </div>
                </div>

                {/* Full-width row: proof chips, feature cards, company overview */}
                {/* Proof chips */}
                <motion.div
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.38 }}
                    className="mt-8 sm:mt-10 flex flex-wrap gap-2"
                >
                    {[
                        "2,000+ camera-scale referenced",
                        "200+ wildlife detections referenced",
                        "Field-tested UAV tracking",
                        "Evidence workflows + RBAC",
                    ].map((t) => (
                        <div
                            key={t}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] sm:text-[11px] text-slate-200/75 shrink-0"
                        >
                            {t}
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="mt-12 grid gap-4 grid-cols-1 sm:grid-cols-3"
                >
                    {[
                        {
                            icon: ShieldCheck,
                            title: "Mission Critical",
                            color: "text-indigo-300",
                            desc: "Built for high-stakes operational safety and accountability.",
                        },
                        {
                            icon: Radar,
                            title: "Low Latency",
                            color: "text-cyan-300",
                            desc: "Real-time inference patterns designed for field constraints.",
                        },
                        {
                            icon: MapPinned,
                            title: "Geo-Aware",
                            color: "text-fuchsia-300",
                            desc: "Spatial context, evidence trails, and review-ready outputs.",
                        },
                    ].map((item, i) => (
                        <div key={i} className="glass p-5 rounded-3xl border-white/5 bg-white/[0.03]">
                            <item.icon className={`h-5 w-5 ${item.color}`} />
                            <div className="mt-3 font-display text-sm text-white">{item.title}</div>
                            <div className="mt-1 text-xs text-slate-300/70 leading-relaxed">{item.desc}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Company overview */}
                <div className="mt-10 sm:mt-12 text-sm text-slate-300/60 text-pretty border-t border-white/5 pt-8">
                    {company?.overview ? company.overview : ""}
                </div>
            </Container>
        </section>
    );
}
