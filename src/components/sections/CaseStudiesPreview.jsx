import { Link } from "react-router-dom";
import Container from "../layout/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Reveal from "../ui/Reveal.jsx";
import Card from "../ui/Card.jsx";
import Button from "../ui/Button.jsx";
import { caseStudies } from "../../data/caseStudies.js";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudiesPreview() {
    const top = caseStudies.slice(0, 3);

    return (
        <section className="py-16 sm:py-20">
            <Container>
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <Reveal>
                        <SectionHeading
                            kicker="Portfolio"
                            title="Deployed in real environments"
                            description="Case studies reflecting large-scale operations, low-bandwidth edge AI, and audit-ready workflows."
                        />
                    </Reveal>
                    <Reveal>
                        <Button as={Link} to="/case-studies" variant="secondary">
                            View all case studies <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Button>
                    </Reveal>
                </div>

                <div className="mt-10 grid gap-4 lg:grid-cols-3">
                    {top.map((c, idx) => (
                        <Reveal key={c.slug} delay={idx * 0.04}>
                            <Card className="overflow-hidden">
                                <div className="relative h-44">
                                    <img
                                        src={c.heroImage}
                                        alt={c.title}
                                        className="h-full w-full object-cover opacity-90"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                                </div>

                                <div className="p-5">
                                    <div className="text-xs text-slate-300/70">{c.industry}</div>
                                    <div className="mt-1 font-display text-lg text-white">{c.title}</div>
                                    <p className="mt-3 text-sm text-slate-300/80 leading-relaxed">
                                        {c.summary}
                                    </p>

                                    <div className="mt-5">
                                        <Button as={Link} to={`/case-studies/${c.slug}`} variant="ghost">
                                            Read case study <ArrowUpRight className="ml-1 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}