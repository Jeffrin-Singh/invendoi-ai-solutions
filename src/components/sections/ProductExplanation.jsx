import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Camera, Cpu, FileText, Bell, ArrowUpRight } from "lucide-react";
import Container from "../layout/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Button from "../ui/Button.jsx";

const steps = [
    {
        icon: Camera,
        title: "Ingest & Detect",
        desc:
            "Connect CCTV/RTSP or UAV feeds. Configure zones and policies. Run inference on edge devices or servers—built for low bandwidth realities.",
    },
    {
        icon: FileText,
        title: "Evidence & Timeline",
        desc:
            "Auto-create snapshots and short clips with timestamps and context. Operators get an incident timeline designed for review and audit.",
    },
    {
        icon: Bell,
        title: "Alert & Act",
        desc:
            "Route geo-tagged alerts to teams (Telegram/WhatsApp/email), escalate by severity, and track outcomes in dashboards with RBAC.",
    },
];

const modes = [
    { title: "Edge", desc: "Jetson-class inference for field constraints" },
    { title: "On-prem", desc: "Secure deployments inside your network" },
    { title: "Hybrid", desc: "Edge detection + centralized dashboards" },
    { title: "Multi-camera", desc: "Command center-ready scaling patterns" },
];

export default function ProductExplanation() {
    const reduce = useReducedMotion();

    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 grid-overlay opacity-[0.04]" />
            <Container>
                <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                    <SectionHeading
                        kicker="How it works"
                        title="From camera feed to actionable evidence — fast."
                        description="Operational workflows built for enforcement, safety, and response teams—not just dashboards."
                        align="left"
                    />
                    <Button as={Link} to="/contact" className="hidden md:flex">
                        Request a Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={reduce ? false : { opacity: 0, y: 10 }}
                            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.05 }}
                            className="glass rounded-[32px] border-white/5 bg-white/[0.02] p-8"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
                                    <s.icon className="h-5 w-5 text-indigo-300" />
                                </div>
                                <div className="font-display text-lg text-white">{s.title}</div>
                            </div>
                            <p className="mt-4 text-sm text-slate-300/80 leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 glass rounded-[32px] border-white/5 bg-white/[0.02] p-8">
                    <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
                            <Cpu className="h-5 w-5 text-cyan-300" />
                        </div>
                        <div>
                            <div className="font-display text-lg text-white">Deployment Modes</div>
                            <div className="text-sm text-slate-300/70">
                                Pick the right fit for bandwidth, governance, and scale.
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {modes.map((m) => (
                            <div
                                key={m.title}
                                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition"
                            >
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-200/70">
                                    {m.title}
                                </div>
                                <div className="mt-2 text-sm text-slate-300/80 leading-relaxed">{m.desc}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <Button as={Link} to="/case-studies" variant="secondary">
                            View Case Studies <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Button>
                        <Button as={Link} to="/contact">
                            Discuss Your Use-case <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="mt-10 md:hidden">
                    <Button as={Link} to="/contact" className="w-full">
                        Request a Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                </div>
            </Container>
        </section>
    );
}