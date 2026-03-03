import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronRight, ArrowLeft, ArrowUpRight, CheckCircle2, Shield, MapPin, Layers, Cpu, TrendingUp } from "lucide-react";
import { getProjectBySlug } from "../data/projects.js";
import Container from "../components/layout/Container.jsx";
import SEO from "../app/seo/SEO.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = getProjectBySlug(slug);

    if (!project) {
        return <Navigate to="/services" replace />;
    }

    const {
        title,
        industry,
        locations,
        status,
        summary,
        problem,
        solution,
        modules,
        stack,
        metrics,
        coverImage,
        ctaLabel,
        ctaTo,
    } = project;

    return (
        <>
            <SEO
                title={`${title} | Projects | Invendoi`}
                description={summary}
                image={coverImage}
            />

            <div className="pt-24 pb-16 sm:pt-32 sm:pb-24">
                <Container>
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8 sm:mb-12">
                        <Link to="/services" className="hover:text-indigo-400 transition-colors">Services</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-slate-400">Projects</span>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-white truncate max-w-[150px] sm:max-w-none">{title}</span>
                    </nav>

                    <Reveal>
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div className="space-y-6 sm:space-y-8">
                                <div>
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/10">
                                            {industry}
                                        </span>
                                        <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-300 backdrop-blur-md border border-indigo-500/20">
                                            {status}
                                        </span>
                                    </div>
                                    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                                        {title}
                                    </h1>
                                    <div className="mt-4 flex items-center gap-2 text-slate-400">
                                        <MapPin className="h-4 w-4" />
                                        <span className="text-sm">{locations.join(", ")}</span>
                                    </div>
                                </div>

                                <p className="text-lg text-slate-300/80 leading-relaxed font-light">
                                    {summary}
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Button as={Link} to={ctaTo} className="px-8">
                                        {ctaLabel} <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button as={Link} to="/services" variant="secondary">
                                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                                    </Button>
                                </div>
                            </div>

                            <Card className="aspect-[4/3] overflow-hidden group">
                                <img
                                    src={coverImage}
                                    alt={title}
                                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                                />
                            </Card>
                        </div>
                    </Reveal>

                    <div className="mt-20 sm:mt-32 grid gap-16 lg:grid-cols-3">
                        {/* Left Column: Context & Solution */}
                        <div className="lg:col-span-2 space-y-16 sm:space-y-20">
                            <Reveal>
                                <div className="space-y-6">
                                    <h2 className="font-display text-2xl text-white flex items-center gap-3">
                                        <Shield className="h-6 w-6 text-indigo-400" /> The Challenge
                                    </h2>
                                    <div className="prose prose-invert prose-slate max-w-none">
                                        <p className="text-slate-300/80 leading-relaxed text-base sm:text-lg italic border-l-2 border-indigo-500/30 pl-6 py-1">
                                            "{problem}"
                                        </p>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <div className="space-y-6">
                                    <h2 className="font-display text-2xl text-white flex items-center gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-cyan-400" /> What we delivered
                                    </h2>
                                    <p className="text-slate-300/80 leading-relaxed text-base sm:text-lg">
                                        {solution}
                                    </p>

                                    <div className="grid gap-4 sm:grid-cols-2 mt-8">
                                        {modules.map((module) => (
                                            <div key={module} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                                                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                                                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{module}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Right Column: Tech & Impact */}
                        <div className="space-y-12">
                            <Reveal delay={0.2}>
                                <Card className="p-6 sm:p-8 space-y-6">
                                    <h2 className="font-display text-xl text-white flex items-center gap-3">
                                        <Cpu className="h-5 w-5 text-indigo-400" /> Technology Stack
                                    </h2>
                                    <ul className="space-y-4">
                                        {stack.map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                                                <div className="h-1 w-1 rounded-full bg-slate-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </Reveal>

                            {metrics && metrics.length > 0 && (
                                <Reveal delay={0.3}>
                                    <div className="space-y-6">
                                        <h2 className="font-display text-xl text-white flex items-center gap-3">
                                            <TrendingUp className="h-5 w-5 text-fuchsia-400" /> Impact & Results
                                        </h2>
                                        <div className="grid gap-4">
                                            {metrics.map((metric, i) => (
                                                <Card key={i} className="p-5 border-l-4 border-l-fuchsia-500">
                                                    <div className="text-2xl font-display text-white">{metric.v}</div>
                                                    <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500">{metric.k}</div>
                                                </Card>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            )}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-20 sm:mt-32">
                        <Reveal>
                            <Card className="relative overflow-hidden p-8 sm:p-12 text-center">
                                <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
                                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl home-glow" />

                                <div className="relative z-10 max-w-2xl mx-auto">
                                    <h2 className="font-display text-2xl sm:text-3xl text-white">Scale your operations with AI</h2>
                                    <p className="mt-4 text-slate-300/80 leading-relaxed">
                                        Interested in a similar deployment for your facility or organization? Talk to our engineers about your constraints and requirements.
                                    </p>
                                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                                        <Button as={Link} to="/contact" variant="primary" className="px-10">Get started</Button>
                                        <Button as={Link} to="/services" variant="secondary">Browse all services</Button>
                                    </div>
                                </div>
                            </Card>
                        </Reveal>
                    </div>
                </Container>
            </div>
        </>
    );
}
