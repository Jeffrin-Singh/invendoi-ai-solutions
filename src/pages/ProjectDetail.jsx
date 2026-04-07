import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronRight, ArrowLeft, ArrowUpRight, CheckCircle2, Shield, MapPin, Cpu, TrendingUp } from "lucide-react";
import { getProjectBySlug } from "../data/projects.js";
import Container from "../components/layout/Container.jsx";
import SEO from "../app/seo/SEO.jsx";
import Button from "../components/ui/Button.jsx";
import { theme } from "../styles/theme";

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
                title={`${title} | Projects`}
                description={summary}
            />

            <div className="relative pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
                <Container>
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-8 sm:mb-12">
                        <Link to="/services" className="hover:text-indigo-400 transition-colors">Services</Link>
                        <ChevronRight className="h-3 w-3 text-white/20" />
                        <span className="text-white/20">Projects</span>
                        <ChevronRight className="h-3 w-3 text-white/20" />
                        <span className="text-indigo-400 truncate max-w-[150px] sm:max-w-none">{title}</span>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <div>
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                                        {industry}
                                    </span>
                                    <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-400 shadow-sm">
                                        {status}
                                    </span>
                                </div>
                                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                                    {title}
                                </h1>
                                <div className="mt-6 flex items-center gap-3 text-slate-500">
                                    <MapPin className="h-4 w-4 text-indigo-400" />
                                    <span className="text-sm font-medium">{locations.join(", ")}</span>
                                </div>
                            </div>

                            <p className={`text-xl ${theme.mutedText} leading-relaxed max-w-xl`}>
                                {summary}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button as={Link} to={ctaTo} className="px-10">
                                    {ctaLabel} <ArrowUpRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button as={Link} to="/services" variant="secondary">
                                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                                </Button>
                            </div>
                        </div>

                        <div className="glass-strong aspect-[4/3] overflow-hidden rounded-[48px] border-white/10 bg-white/[0.03] p-2">
                            <div className="w-full h-full rounded-[40px] overflow-hidden">
                                <img
                                    src={coverImage}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 sm:mt-32 grid gap-16 lg:grid-cols-3">
                        {/* Left Column: Context & Solution */}
                        <div className="lg:col-span-2 space-y-16 sm:space-y-24">
                            <div className="space-y-8">
                                <h2 className="font-display text-2xl text-white flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                                        <Shield className="h-5 w-5 text-indigo-400" />
                                    </div>
                                    The Tactical Challenge
                                </h2>
                                <div className="prose prose-slate dark:prose-invert max-w-none">
                                    <p className={`text-xl ${theme.mutedText} leading-relaxed italic border-l-2 border-indigo-500/30 pl-8`}>
                                        "{problem}"
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h2 className="font-display text-2xl text-white flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                                    </div>
                                    What We Delivered
                                </h2>
                                <p className={`text-lg ${theme.mutedText} leading-relaxed`}>
                                    {solution}
                                </p>

                                <div className="grid gap-4 sm:grid-cols-2 mt-12">
                                    {modules.map((module) => (
                                        <div key={module} className="flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
                                            <div className="h-2 w-2 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform shrink-0" />
                                            <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">{module}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Tech & Impact */}
                        <div className="space-y-12">
                            <div className="glass p-8 rounded-[40px] border-white/5 bg-white/[0.02] space-y-8">
                                <h2 className="font-display text-xl text-white flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                                        <Cpu className="h-5 w-5 text-amber-400" />
                                    </div>
                                    Tactical Stack
                                </h2>
                                <ul className="space-y-4">
                                    {stack.map((item) => (
                                        <li key={item} className="flex items-center gap-4 text-sm text-slate-400">
                                            <div className="h-1 w-1 rounded-full bg-slate-700 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {metrics && metrics.length > 0 && (
                                <div className="space-y-8">
                                    <h2 className="font-display text-xl text-white flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center">
                                            <TrendingUp className="h-5 w-5 text-fuchsia-400" />
                                        </div>
                                        Mission Impact
                                    </h2>
                                    <div className="grid gap-4">
                                        {metrics.map((metric, i) => (
                                            <div key={i} className="glass p-6 rounded-[32px] border-white/5 bg-white/[0.02] border-l-4 border-l-fuchsia-500/50 hover:border-l-fuchsia-500 transition-all">
                                                <div className="text-3xl font-display text-white">{metric.v}</div>
                                                <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{metric.k}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-24 sm:mt-32">
                        <div className="glass-strong rounded-[48px] p-10 md:p-16 text-center border-white/10 bg-white/[0.02] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-purple-500/[0.03]" />
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="font-display text-3xl text-white">Scale your operations with AI.</h2>
                                <p className={`mt-6 text-lg ${theme.mutedText} leading-relaxed`}>
                                    Interested in a similar deployment for your facility or organization? Talk to our engineers about your tactical requirements.
                                </p>
                                <div className="mt-10 flex flex-wrap justify-center gap-4">
                                    <Button as={Link} to="/contact" className="px-10">Get started</Button>
                                    <Button as={Link} to="/services" variant="secondary">Browse capabilities</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}
