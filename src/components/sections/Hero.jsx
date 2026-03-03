import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Radar, MapPinned } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../layout/Container.jsx";
import Button from "../ui/Button.jsx";
import Badge from "../ui/Badge.jsx";
import { company } from "../../data/company.js";

export default function Hero() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 60]);
    const y2 = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -40]);

    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 grid-overlay opacity-40" />
            <motion.div
                style={{ y: y1 }}
                className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-35
                   bg-gradient-to-tr from-indigo-500 via-cyan-400 to-fuchsia-500"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-25
                   bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-indigo-500"
            />

            <Container className="relative py-16 sm:py-20">
                <div className="grid items-center gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <div className="flex flex-wrap gap-2">
                            <Badge>Edge AI • Real-time Video Analytics</Badge>
                            <Badge>Geospatial Intelligence</Badge>
                            <Badge>Government & Enterprise</Badge>
                        </div>

                        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white">
                            Turn video streams into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-fuchsia-400">real-time decisions</span>.
                        </h1>

                        <p className="mt-5 text-base sm:text-lg text-slate-300/85 leading-relaxed max-w-2xl">
                            {company.overview}
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Button as={Link} to="/contact">
                                Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button as={Link} to="/case-studies" variant="secondary">
                                View Case Studies
                            </Button>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            <div className="glass rounded-2xl p-4">
                                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                    <ShieldCheck className="h-4 w-4 text-cyan-300" /> Safer Operations
                                </div>
                                <div className="mt-2 text-xs text-slate-300/75">
                                    Real-time alerts for threats, safety events, and zone breaches.
                                </div>
                            </div>
                            <div className="glass rounded-2xl p-4">
                                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                    <Radar className="h-4 w-4 text-indigo-300" /> Field-ready Edge AI
                                </div>
                                <div className="mt-2 text-xs text-slate-300/75">
                                    Low-latency inference designed for low bandwidth conditions.
                                </div>
                            </div>
                            <div className="glass rounded-2xl p-4">
                                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                    <MapPinned className="h-4 w-4 text-fuchsia-300" /> Geo-tagged Evidence
                                </div>
                                <div className="mt-2 text-xs text-slate-300/75">
                                    Mapping overlays and audit-ready evidence workflows.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="glass rounded-3xl overflow-hidden">
                            <div className="relative aspect-[4/5]">
                                <img
                                    className="absolute inset-0 h-full w-full object-cover opacity-90"
                                    alt="AI surveillance and analytics"
                                    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                                <motion.div
                                    initial={reduce ? false : { opacity: 0, y: 12 }}
                                    animate={reduce ? {} : { opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/7 backdrop-blur-md border border-white/10 p-4"
                                >
                                    <div className="text-xs text-slate-200/80">Built for scale</div>
                                    <div className="mt-1 font-display text-lg text-white">
                                        Large deployments + real-world constraints
                                    </div>
                                    <div className="mt-2 text-xs text-slate-300/75">
                                        Multi-stream analytics, edge acceleration, and secure portals that fit control-room workflows.
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}