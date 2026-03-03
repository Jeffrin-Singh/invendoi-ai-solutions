import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../app/seo/SEO.jsx";
import Container from "../components/layout/Container.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Badge from "../components/ui/Badge.jsx";
import { caseStudies } from "../data/caseStudies.js";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function CaseStudyDetail() {
    const { slug } = useParams();
    const cs = useMemo(() => caseStudies.find((c) => c.slug === slug), [slug]);

    if (!cs) {
        return (
            <section className="py-16 sm:py-20">
                <Container>
                    <Card className="p-8">
                        <div className="font-display text-2xl text-slate-900">Case study not found</div>
                        <p className="mt-2 text-sm text-slate-300/80">
                            Please go back to Portfolio and choose a valid case study.
                        </p>
                        <div className="mt-5">
                            <Button as={Link} to="/case-studies" variant="secondary">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
                            </Button>
                        </div>
                    </Card>
                </Container>
            </section>
        );
    }

    return (
        <>
            <SEO
                title={`${cs.title} | Invendoi AI Solutions`}
                description={cs.summary}
                path={`/case-studies/${cs.slug}`}
                image={cs.heroImage}
            />

            <section className="py-16 sm:py-20">
                <Container>
                    <Reveal>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Link className="hover:text-slate-900" to="/case-studies">Portfolio</Link>
                            <span>/</span>
                            <span className="text-slate-800 font-medium">{cs.title}</span>
                        </div>

                        <div className="mt-5 grid gap-10 lg:grid-cols-12">
                            <div className="lg:col-span-7">
                                <div className="flex flex-wrap gap-2">
                                    <Badge>{cs.industry}</Badge>
                                    {cs.tech.map((t) => (
                                        <Badge key={t}>{t}</Badge>
                                    ))}
                                </div>

                                <h1 className="mt-4 font-display text-3xl sm:text-4xl text-slate-900">
                                    {cs.title}
                                </h1>
                                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                                    {cs.summary}
                                </p>

                                <div className="mt-8 grid gap-4">
                                    <Card className="p-6">
                                        <div className="font-display text-xl text-slate-900">Challenge</div>
                                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                            {cs.challenge}
                                        </p>
                                    </Card>

                                    <Card className="p-6">
                                        <div className="font-display text-xl text-slate-900">Solution</div>
                                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                            {cs.solution}
                                        </p>
                                    </Card>

                                    <Card className="p-6">
                                        <div className="font-display text-xl text-slate-900">Outcomes</div>
                                        <ul className="mt-3 space-y-2 text-sm text-slate-600 leading-relaxed">
                                            {cs.outcomes.map((o) => (
                                                <li key={o}>• {o}</li>
                                            ))}
                                        </ul>
                                    </Card>
                                </div>
                            </div>

                            <div className="lg:col-span-5">
                                <Card className="overflow-hidden border-white/40 shadow-xl">
                                    <div className="relative h-56 sm:h-72">
                                        <img src={cs.heroImage} alt={cs.title} className="h-full w-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent" />
                                    </div>
                                    <div className="p-6">
                                        <div className="font-display text-lg text-slate-900">Key metrics</div>
                                        <div className="mt-4 space-y-3">
                                            {cs.metrics.map((m) => (
                                                <div key={m.k} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                                                    <div className="text-sm text-slate-600">{m.k}</div>
                                                    <div className="text-sm font-semibold text-slate-900">{m.v}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6">
                                            <Button as={Link} to="/contact">
                                                Discuss a similar deployment <ArrowUpRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Reveal>

                    <div className="mt-12">
                        <Button as={Link} to="/case-studies" variant="secondary">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
                        </Button>
                    </div>
                </Container>
            </section>
        </>
    );
}