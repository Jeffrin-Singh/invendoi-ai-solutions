import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../app/seo/SEO.jsx";
import Container from "../components/layout/Container.jsx";
import Button from "../components/ui/Button.jsx";
import Badge from "../components/ui/Badge.jsx";
import { services } from "../data/services.js";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { theme } from "../styles/theme";

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = useMemo(() => services.find((s) => s.slug === slug), [slug]);

    if (!service) {
        return (
            <section className="relative py-20">
                <Container>
                    <div className="glass p-10 rounded-[32px] text-center max-w-xl mx-auto border-white/10">
                        <h2 className="font-display text-2xl text-white">Service not found</h2>
                        <p className={`mt-4 ${theme.mutedText}`}>
                            The requested tactical capability could not be located.
                        </p>
                        <div className="mt-8">
                            <Button as={Link} to="/services" variant="secondary">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        );
    }

    return (
        <>
            <SEO
                title={`${service.title} | Capabilities`}
                description={service.short}
                path={`/services/${service.slug}`}
            />

            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
                <Container>
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-8">
                        <Link className="hover:text-indigo-400 transition-colors" to="/services">Services</Link>
                        <span className="text-white/20">/</span>
                        <span className="text-indigo-400">{service.title}</span>
                    </div>

                    <div className="mt-4 grid gap-12 lg:grid-cols-12 items-start">
                        <div className="lg:col-span-7">
                            <div className="flex flex-wrap gap-2">
                                {service.details.tech.map((t) => (
                                    <Badge key={t} variant="filled">{t}</Badge>
                                ))}
                            </div>

                            <h1 className="mt-6 font-display text-4xl sm:text-5xl text-white leading-tight">
                                {service.title}
                            </h1>
                            <p className={`mt-6 text-lg ${theme.mutedText} leading-relaxed`}>
                                {service.short}
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Button as={Link} to="/contact" className="px-8">
                                    Request a Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Button>
                                <Button as={Link} to="/case-studies" variant="secondary">
                                    See Deployments
                                </Button>
                            </div>

                            <div className="mt-16 space-y-8">
                                <div className="glass p-8 rounded-[32px] border-white/5 bg-white/[0.02]">
                                    <h3 className="font-display text-xl text-white mb-4">The Challenge</h3>
                                    <p className={`text-base ${theme.mutedText} leading-relaxed`}>
                                        {service.details.problem}
                                    </p>
                                </div>

                                <div className="glass p-8 rounded-[32px] border-white/5 bg-white/[0.02]">
                                    <h3 className="font-display text-xl text-white mb-4">Our Approach</h3>
                                    <p className={`text-base ${theme.mutedText} leading-relaxed`}>
                                        {service.details.solution}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 sticky top-24">
                            <div className="glass-strong overflow-hidden rounded-[40px] border-white/10 bg-white/[0.03]">
                                <div className="relative h-64 sm:h-80 overflow-hidden">
                                    <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent opacity-80" />
                                </div>
                                <div className="p-8 md:p-10">
                                    <h3 className="font-display text-lg text-white mb-6">Tactical Deliverables</h3>
                                    <ul className="space-y-4">
                                        {service.details.deliverables.map((d) => (
                                            <li key={d} className="flex gap-4 text-sm text-slate-400">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-400 shrink-0" />
                                                <span>{d}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-10 pt-8 border-t border-white/5">
                                        <h3 className="font-display text-lg text-white mb-4">Target Outcomes</h3>
                                        <ul className="space-y-3">
                                            {service.details.outcomes.map((o) => (
                                                <li key={o} className="flex gap-3 text-sm text-slate-500">
                                                    <div className="mt-2 h-1 w-1 rounded-full bg-indigo-500 shrink-0" />
                                                    <span>{o}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <Button as={Link} to="/services" variant="ghost" className="-ml-3 opacity-60 hover:opacity-100">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                        </Button>
                    </div>
                </Container>
            </section>
        </>
    );
}
