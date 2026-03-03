import SEO from "../app/seo/SEO.jsx";
import Container from "../components/layout/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies.js";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudies() {
    return (
        <>
            <SEO
                title="Portfolio / Case Studies | Invendoi AI Solutions"
                description="Case studies across municipal enforcement, wildlife monitoring, enterprise safety, privacy-safe face recognition, and drone intelligence."
                path="/case-studies"
                image="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=1600&q=80"
            />

            <section className="py-16 sm:py-20">
                <Container>
                    <Reveal>
                        <SectionHeading
                            kicker="Portfolio"
                            title="Built for scale. Proven in the field."
                            description="Deployments and pilots spanning large multi-camera operations, edge AI wildlife monitoring, enterprise safety analytics, and telemetry-fused UAV tracking."
                        />
                    </Reveal>

                    <div className="mt-10 grid gap-4 lg:grid-cols-2">
                        {caseStudies.map((c, idx) => (
                            <Reveal key={c.slug} delay={idx * 0.03}>
                                <Card className="overflow-hidden">
                                    <div className="grid md:grid-cols-5">
                                        <div className="relative md:col-span-2 h-48 md:h-full">
                                            <img src={c.heroImage} alt={c.title} className="h-full w-full object-cover opacity-90" loading="lazy" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                                        </div>
                                        <div className="md:col-span-3 p-6">
                                            <div className="text-xs text-slate-300/70">{c.industry}</div>
                                            <div className="mt-1 font-display text-xl text-white">{c.title}</div>
                                            <p className="mt-3 text-sm text-slate-300/80 leading-relaxed">
                                                {c.summary}
                                            </p>

                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {c.tech.slice(0, 3).map((t) => (
                                                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="mt-5">
                                                <Button as={Link} to={`/case-studies/${c.slug}`} variant="ghost">
                                                    Read case study <ArrowUpRight className="ml-1 h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}