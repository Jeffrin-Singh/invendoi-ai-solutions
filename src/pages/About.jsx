import SEO from "../app/seo/SEO.jsx";
import Container from "../components/layout/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Card from "../components/ui/Card.jsx";
import { theme } from "../styles/theme.js";
import Reveal from "../components/ui/Reveal.jsx";
import { company } from "../data/company.js";

export default function About() {
    const { stats } = company;

    return (
        <>
            <SEO
                title="About | Invendoi AI Solutions Pvt. Ltd."
                description="Invendoi AI Solutions delivers computer vision, edge AI, real-time video analytics and geospatial intelligence for government and enterprise—built for real-world deployments."
                path="/about"
                image="https://images.unsplash.com/photo-1581091215367-59ab6b84fbc4?auto=format&fit=crop&w=1600&q=80"
            />

            <section className="py-16 sm:py-20">
                <Container>
                    <Reveal>
                        <SectionHeading
                            kicker="About"
                            title="AI systems built for real environments"
                        />
                    </Reveal>

                    <Reveal delay={0.1}>
                        <SectionHeading
                            kicker="The Company"
                            title="Specialized Intelligence."
                            description="Driving the next generation of real-time operational awareness at the tactical edge."
                        />
                    </Reveal>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="glass p-8 rounded-3xl">
                            <div className="text-indigo-400 font-bold tracking-widest text-[10px] uppercase">Background</div>
                            <div className="mt-4 font-display text-2xl text-white">Company Overview</div>
                            <p className={`mt-4 ${theme.mutedText} leading-relaxed`}>
                                Invendoi AI Solutions is a technology firm centered on building high-stakes computer vision and geospatial products. We bridge the gap between complex AI models and the rugged constraints of field operations.
                            </p>
                        </div>
                        <div className="glass p-8 rounded-3xl">
                            <div className="text-cyan-400 font-bold tracking-widest text-[10px] uppercase">Mission</div>
                            <div className="mt-4 font-display text-2xl text-white">Our Mission</div>
                            <p className={`mt-4 ${theme.mutedText} leading-relaxed`}>
                                To provide elite operational intelligence that ensures safety, efficiency, and real-time response capabilities for defense, enterprise, and large-scale public safety sectors.
                            </p>
                        </div>
                        <div className="glass p-8 rounded-3xl">
                            <div className="text-fuchsia-400 font-bold tracking-widest text-[10px] uppercase">Vision</div>
                            <div className="mt-4 font-display text-2xl text-white">Our Vision</div>
                            <p className={`mt-4 ${theme.mutedText} leading-relaxed`}>
                                A world where intelligence is available everywhere—even offline and in the most remote environments—powered by efficient, sovereign edge AI.
                            </p>
                        </div>
                    </div>

                    <div className="mt-24 grid gap-16 lg:grid-cols-2 items-center">
                        <div>
                            <SectionHeading
                                kicker="Excellence"
                                title="Building for the field."
                                description="Our systems are designed to operate where normal cloud infrastructure fails."
                                align="left"
                            />

                            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                                {stats.map((s, i) => (
                                    <div key={i} className="border-l border-white/10 pl-6 py-2">
                                        <div className="text-3xl font-display text-white">{s.v}</div>
                                        <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass p-8 rounded-[40px] bg-indigo-500/5 border-white/10">
                            <div className="font-display text-2xl text-white mb-6">Core competencies</div>
                            <ul className={`space-y-4 ${theme.mutedText} text-sm`}>
                                {[
                                    "Edge AI model optimization & quantization",
                                    "Real-time video stream processing & metadata extraction",
                                    "Sovereign data governance and zero-trust security",
                                    "Geospatial intelligence and drone sensor fusion",
                                    "Intuitive control-room and mobile dashboards",
                                    "Offline-first operational capability",
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}