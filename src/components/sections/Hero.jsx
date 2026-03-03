import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Radar, MapPinned } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { company } from "../../data/company";
import { theme } from "../../styles/theme";

export default function Hero() {
    const reduce = useReducedMotion();

    return (
        <section className="relative overflow-hidden pt-10 pb-16 sm:pb-20">
            {/* Premium Background Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={reduce ? {} : {
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[120px]"
                />
                <motion.div
                    animate={reduce ? {} : {
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[20%] -right-[5%] w-[40%] h-[40%] rounded-full bg-cyan-400/15 blur-[100px]"
                />
            </div>

            <div className="absolute inset-0 grid-overlay opacity-[0.05]" />

            <Container className="relative">
                <div className="grid items-center gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={reduce ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-wrap gap-2"
                        >
                            <Badge variant="outline">AI • Video Analytics</Badge>
                            <Badge variant="outline">Edge Computing</Badge>
                        </motion.div>

                        <motion.h1
                            initial={reduce ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.1] text-white tracking-tight"
                        >
                            Intelligent Video <br />
                            <span className={theme.gradientText}>At the Edge.</span>
                        </motion.h1>

                        <motion.p
                            initial={reduce ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`mt-6 text-lg sm:text-xl ${theme.mutedText} leading-relaxed max-w-2xl`}
                        >
                            {company.overview}
                        </motion.p>

                        <motion.div
                            initial={reduce ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <Button as={Link} to="/contact" className="px-8 py-4">
                                Start Building <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button as={Link} to="/case-studies" variant="secondary" className="px-8 py-4">
                                View Solutions
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={reduce ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-16 grid gap-4 sm:grid-cols-3"
                        >
                            {[
                                { icon: ShieldCheck, title: "Mission Critical", color: "text-indigo-400", desc: "Designed for high-stakes operational safety." },
                                { icon: Radar, title: "Low Latency", color: "text-cyan-400", desc: "Real-time inference with minimal delay." },
                                { icon: MapPinned, title: "Geo-Aware", color: "text-fuchsia-400", desc: "Spatially tagged evidence and intelligence." }
                            ].map((item, i) => (
                                <div key={i} className="glass p-5 rounded-3xl border-white/5 bg-white/[0.03]">
                                    <item.icon className={`h-5 w-5 ${item.color}`} />
                                    <div className="mt-3 font-display text-sm text-white">{item.title}</div>
                                    <div className="mt-1 text-xs text-slate-400 leading-relaxed">{item.desc}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="lg:col-span-5 hidden lg:block">
                        <motion.div
                            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 rounded-[40px] blur-xl opacity-50" />
                            <div className="relative glass-strong rounded-[40px] p-2 border-white/10 bg-white/5 overflow-hidden">
                                <img
                                    className="rounded-[32px] w-full h-auto object-cover opacity-90 shadow-2xl"
                                    alt="Invendoi AI Platform"
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                animate={reduce ? {} : { y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 p-6 glass-strong rounded-3xl border-white/20 shadow-2xl max-w-[240px]"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <div className="text-[10px] font-bold text-white uppercase tracking-widest">Live System Status</div>
                                </div>
                                <div className="text-xl font-display text-white">99.9% Uptime</div>
                                <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-bold">at the tactical edge</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
