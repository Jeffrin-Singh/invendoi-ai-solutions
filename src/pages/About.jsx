import { useRef } from "react";
import SEO from "../app/seo/SEO.jsx";
import Container from "../components/layout/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { theme } from "../styles/theme.js";
import Reveal from "../components/ui/Reveal.jsx";
import { company } from "../data/company.js";
import { MagicBento } from "../components/ui/MagicBento.jsx";

export default function About() {
    const { stats } = company;
    const gridRef = useRef(null);

    return (
        <>
            <SEO
                title="About | Invendoi AI Solutions Pvt. Ltd."
<<<<<<< HEAD
                description="Invendoi AI Solutions builds AI systems for computer vision, edge AI, real-time video analytics, intelligent automation, and secure surveillance—designed for government, enterprise, and high-security environments."
=======
                description="Invendoi AI Solutions delivers computer vision, edge AI, real-time video analytics and geospatial intelligence for government and enterprise—built for real-world deployments."
>>>>>>> 35cfd41a92f773fee5bf4d3791ed528312f963d0
                path="/about"
                image="https://images.unsplash.com/photo-1581091215367-59ab6b84fbc4?auto=format&fit=crop&w=1600&q=80"
            />

            <section className="py-16 sm:py-20 overflow-hidden relative" ref={gridRef}>
<<<<<<< HEAD
=======
                {/* Background decorative grid */}
>>>>>>> 35cfd41a92f773fee5bf4d3791ed528312f963d0
                <div className="absolute inset-0 grid-overlay opacity-[0.03] pointer-events-none" />

                <Container>
                    <Reveal>
                        <SectionHeading
                            kicker="About"
<<<<<<< HEAD
                            title="AI systems built for real-world operations"
=======
                            title="AI systems built for real environments"
>>>>>>> 35cfd41a92f773fee5bf4d3791ed528312f963d0
                        />
                    </Reveal>

                    <Reveal delay={0.1}>
                        <SectionHeading
                            kicker="The Company"
<<<<<<< HEAD
                            title="Applied AI for security, surveillance, and operational intelligence."
                            description="We build practical AI systems that work in the field—across CCTV networks, edge devices, secure servers, and real operational environments."
                        />
                    </Reveal>

=======
                            title="Specialized Intelligence."
                            description="Driving the next generation of real-time operational awareness at the tactical edge."
                        />
                    </Reveal>

                    {/* MAGIC BENTO GRID: Overview, Mission, Vision */}
>>>>>>> 35cfd41a92f773fee5bf4d3791ed528312f963d0
                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <MagicBento
                            enableTilt={true}
                            className="rounded-[40px]"
                        >
                            <div className="h-full p-10 rounded-[inherit] bg-indigo-500/5 transition-colors group">
                                <div className="text-indigo-400 font-bold tracking-widest text-[10px] uppercase">Background</div>
                                <div className="mt-4 font-display text-2xl text-white group-hover:text-indigo-300 transition-colors">Company Overview</div>
                                <p className={`mt-4 ${theme.mutedText} leading-relaxed`}>
<<<<<<< HEAD
                                    Invendoi AI Solutions is an applied AI company focused on computer vision, edge AI, real-time video analytics, face recognition, geospatial intelligence, and AI agents. We build systems for government, enterprise, and high-security environments, with project experience that includes MESON VSSC and Kerala Defence.
=======
                                    Invendoi AI Solutions is a technology firm centered on building high-stakes computer vision and geospatial products. We bridge the gap between complex AI models and the rugged constraints of field operations.
>>>>>>> 35cfd41a92f773fee5bf4d3791ed528312f963d0
                                </p>
                            </div>
                        </MagicBento>

                        <MagicBento
                            enableTilt={true}
                            className="rounded-[40px]"
                        >
                            <div className="h-full p-10 rounded-[inherit] bg-indigo-500/5 transition-colors group">
                                <div className="text-cyan-400 font-bold tracking-widest text-[10px] uppercase">Mission</div>
                                <div className="mt-4 font-display text-2xl text-white group-hover:text-cyan-300 transition-colors">Our Mission</div>
                                <p className={`mt-4 ${theme.mutedText} leading-relaxed`}>
<<<<<<< HEAD
                                    To deliver reliable AI systems that improve security, operational awareness, automation, and response speed—especially in environments where latency, bandwidth, privacy, and accountability matter most.
=======
                                    To provide elite operational intelligence that ensures safety, efficiency, and real-time response capabilities for defense, enterprise, and large-scale public safety sectors.
>>>>>>> 35cfd41a92f773fee5bf4d3791ed528312f963d0
                                </p>
                            </div>
                        </MagicBento>

                        <MagicBento
                            enableTilt={true}
                            className="rounded-[40px]"
                        >
                            <div className="h-full p-10 rounded-[inherit] bg-indigo-500/5 transition-colors group">
                                <div className="text-fuchsia-400 font-bold tracking-widest text-[10px] uppercase">Vision</div>
                                <div className="mt-4 font-display text-2xl text-white group-hover:text-fuchsia-300 transition-colors">Our Vision</div>
                                <p className={`mt-4 ${theme.mutedText} leading-relaxed`}>
<<<<<<< HEAD
                                    To become a trusted AI partner for mission-critical surveillance, intelligent automation, and edge-driven decision systems across India and global enterprise markets.
=======
                                    A world where intelligence is available everywhere—even offline and in the most remote environments—powered by efficient, sovereign edge AI.
>>>>>>> 35cfd41a92f773fee5bf4d3791ed528312f963d0
                                </p>
                            </div>
                        </MagicBento>
                    </div>

                    <div className="mt-24 grid gap-16 lg:grid-cols-2 items-center">
                        <div>
                            <SectionHeading
                                kicker="Excellence"
<<<<<<< HEAD
                                title="Built for the field. Designed for AI at scale."
                                description="Our platforms are designed for CCTV networks, secure facilities, rugged environments, and operational teams that need dependable AI—not demos."
=======
                                title="Building for the field."
                                description="Our systems are designed to operate where normal cloud infrastructure fails."
>>>>>>> 35cfd41a92f773fee5bf4d3791ed528312f963d0
                                align="left"
                            />

                            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                                {stats.map((s, i) => (
                                    <div key={i} className="border-l border-white/10 pl-6 py-2 transition-all duration-300 hover:border-indigo-500 group cursor-default">
                                        <div className="text-3xl font-display text-white group-hover:translate-x-1 transition-transform">{s.v}</div>
                                        <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1 group-hover:text-slate-400 transition-colors">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

<<<<<<< HEAD
=======
                        {/* BIG MAGIC CARD: Core Competencies */}
>>>>>>> 35cfd41a92f773fee5bf4d3791ed528312f963d0
                        <MagicBento
                            enableTilt={true}
                            spotlightRadius={600}
                            className="rounded-[40px]"
                        >
                            <div className="p-10 rounded-[inherit] bg-indigo-500/5 relative z-10">
                                <div className="font-display text-2xl text-white mb-6">Core competencies</div>
                                <ul className={`space-y-4 ${theme.mutedText} text-sm`}>
                                    {[
<<<<<<< HEAD
                                        "Computer vision and real-time video analytics",
                                        "Edge AI deployment and model optimization",
                                        "Face recognition and high-security surveillance workflows",
                                        "AI agents and workflow automation systems",
                                        "Geospatial intelligence and drone sensor fusion",
                                        "Control-room dashboards, alerts, and audit-ready evidence workflows",
=======
                                        "Edge AI model optimization & quantization",
                                        "Real-time video stream processing & metadata extraction",
                                        "Sovereign data governance and zero-trust security",
                                        "Geospatial intelligence and drone sensor fusion",
                                        "Intuitive control-room and mobile dashboards",
                                        "Offline-first operational capability",
>>>>>>> 35cfd41a92f773fee5bf4d3791ed528312f963d0
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 group/item">
                                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0 group-hover/item:scale-150 group-hover/item:bg-indigo-400 transition-all duration-300" />
                                            <span className="group-hover/item:text-slate-200 transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </MagicBento>
                    </div>
                </Container>
            </section>
        </>
    );
<<<<<<< HEAD
}
=======
}
>>>>>>> 35cfd41a92f773fee5bf4d3791ed528312f963d0
