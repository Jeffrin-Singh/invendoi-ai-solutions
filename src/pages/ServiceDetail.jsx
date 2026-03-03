import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../app/seo/SEO.jsx";
import Container from "../components/layout/Container.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Badge from "../components/ui/Badge.jsx";
import { services } from "../data/services.js";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = useMemo(() => services.find((s) => s.slug === slug), [slug]);

    if (!service) {
        return (
            <section className="py-16 sm:py-20">
                <Container>
                    <Card className="p-8">
                        <div className="font-display text-2xl text-slate-900">Service not found</div>
                        <p className="mt-2 text-sm text-slate-600">
                            Please go back to Services and choose a valid service.
                        </p>
                        <div className="mt-5">
                            <Button as={Link} to="/services" variant="secondary">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
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
                title={`${service.title} | Invendoi AI Solutions`}
                description={service.short}
                path={`/services/${service.slug}`}
                image={service.image}
            />

            <section className="py-16 sm:py-20">
                <Container>
                    <Reveal>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Link className="hover:text-slate-900" to="/services">Services</Link>
                            <span>/</span>
                            <span className="text-slate-800 font-medium">{service.title}</span>
                        </div>

                        <div className="mt-4 grid gap-10 lg:grid-cols-12 lg:items-start">
                            <div className="lg:col-span-7">
                                <div className="flex flex-wrap gap-2">
                                    {service.details.tech.map((t) => (
                                        <Badge key={t}>{t}</Badge>
                                    ))}
                                </div>

                                <h1 className="mt-4 font-display text-3xl sm:text-4xl text-slate-900">
                                    {service.title}
                                </h1>
                                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                                    {service.short}
                                </p>

                                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                                    <Button as={Link} to="/contact">
                                        Request a Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button as={Link} to="/case-studies" variant="secondary">
                                        See deployments
                                    </Button>
                                </div>

                                <div className="mt-10 grid gap-4">
                                    <Card className="p-6">
                                        <div className="font-display text-xl text-slate-900">The problem</div>
                                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                            {service.details.problem}
                                        </p>
                                    </Card>

                                    <Card className="p-6">
                                        <div className="font-display text-xl text-slate-900">Our approach</div>
                                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                            {service.details.solution}
                                        </p>
                                    </Card>
                                </div>
                            </div>

                            <div className="lg:col-span-5">
                                <Card className="overflow-hidden border-white/40 shadow-xl">
                                    <div className="relative h-56 sm:h-72">
                                        <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent" />
                                    </div>
                                    <div className="p-6">
                                        <div className="font-display text-lg text-slate-900">Deliverables</div>
                                        <ul className="mt-4 space-y-3">
                                            {service.details.deliverables.map((d) => (
                                                <li key={d} className="flex gap-3 text-sm text-slate-600">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-600" />
                                                    <span>{d}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-6 border-t border-slate-100 pt-5">
                                            <div className="font-display text-lg text-slate-900">Expected outcomes</div>
                                            <ul className="mt-3 space-y-2 text-sm text-slate-600">
                                                {service.details.outcomes.map((o) => (
                                                    <li key={o}>• {o}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Reveal>

                    <div className="mt-12">
                        <Button as={Link} to="/services" variant="secondary">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                        </Button>
                    </div>
                </Container>
            </section>
        </>
    );
}