import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../app/seo/SEO.jsx";
import Container from "../components/layout/Container.jsx";
import Button from "../components/ui/Button.jsx";
import Badge from "../components/ui/Badge.jsx";
import { caseStudies } from "../data/caseStudies.js";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { theme } from "../styles/theme";

export default function CaseStudyDetail() {
    const { slug } = useParams();
    const cs = useMemo(() => caseStudies.find((c) => c.slug === slug), [slug]);

    const goTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // ✅ Also reset scroll when opening a new case study
    useEffect(() => {
        goTop();
    }, [slug]);

    if (!cs) {
        return (
            <section className="relative py-20">
                <Container>
                    <div className="glass p-10 rounded-[32px] text-center max-w-xl mx-auto border-white/10">
                        <h2 className="font-display text-2xl text-white">Case study not found</h2>
                        <p className={`mt-4 ${theme.mutedText}`}>
                            The requested mission report could not be located.
                        </p>
                        <div className="mt-8">
                            <Button
                                as={Link}
                                to="/case-studies"
                                variant="secondary"
                                onClick={goTop}
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
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
                title={`${cs.title} | Portfolio`}
                description={cs.summary}
                path={`/case-studies/${cs.slug}`}
            />

            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
                <Container>
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-8">
                        <Link
                            className="hover:text-indigo-400 transition-colors"
                            to="/case-studies"
                            onClick={goTop}
                        >
                            Portfolio
                        </Link>
                        <span className="text-white/20">/</span>
                        <span className="text-indigo-400">{cs.title}</span>
                    </div>

                    <div className="mt-4 grid gap-12 lg:grid-cols-12 items-start">
                        <div className="lg:col-span-7">
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="filled">{cs.industry}</Badge>
                                {cs.tech.map((t) => (
                                    <Badge key={t}>{t}</Badge>
                                ))}
                            </div>

                            <h1 className="mt-6 font-display text-4xl sm:text-5xl text-white leading-tight">
                                {cs.title}
                            </h1>
                            <p className={`mt-6 text-lg ${theme.mutedText} leading-relaxed`}>
                                {cs.summary}
                            </p>

                            <div className="mt-12 space-y-8">
                                <div className="glass p-8 rounded-[32px] border-white/5 bg-white/[0.02]">
                                    <h3 className="font-display text-xl text-white mb-4">The Challenge</h3>
                                    <p className={`text-base ${theme.mutedText} leading-relaxed`}>
                                        {cs.challenge}
                                    </p>
                                </div>

                                <div className="glass p-8 rounded-[32px] border-white/5 bg-white/[0.02]">
                                    <h3 className="font-display text-xl text-white mb-4">The Solution</h3>
                                    <p className={`text-base ${theme.mutedText} leading-relaxed`}>
                                        {cs.solution}
                                    </p>
                                </div>

                                <div className="glass p-8 rounded-[32px] border-white/5 bg-white/[0.02]">
                                    <h3 className="font-display text-xl text-white mb-4">Results & Outcomes</h3>
                                    <ul className="space-y-4">
                                        {cs.outcomes.map((o) => (
                                            <li key={o} className="flex gap-4 text-sm text-slate-400">
                                                <div className="mt-2 h-1 w-1 rounded-full bg-indigo-500 shrink-0" />
                                                <span>{o}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 sticky top-24">
                            <div className="glass-strong overflow-hidden rounded-[40px] border-white/10 bg-white/[0.03]">
                                <div className="relative h-64 sm:h-80 overflow-hidden">
                                    <img
                                        src={cs.heroImage}
                                        alt={cs.title}
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent opacity-80" />
                                </div>

                                <div className="p-8 md:p-10">
                                    <h3 className="font-display text-lg text-white mb-6">
                                        Key Performance Metrics
                                    </h3>

                                    <div className="space-y-4">
                                        {cs.metrics.map((m) => (
                                            <div
                                                key={m.k}
                                                className="flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                                            >
                                                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                                    {m.k}
                                                </div>
                                                <div className="text-lg font-display text-white">{m.v}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-10 border-t border-white/5 pt-8">
                                        <Button as={Link} to="/contact" className="w-full justify-center" onClick={goTop}>
                                            Discuss Similar Deployment <ArrowUpRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <Button
                            as={Link}
                            to="/case-studies"
                            variant="ghost"
                            className="-ml-3 opacity-60 hover:opacity-100"
                            onClick={goTop}
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
                        </Button>
                    </div>
                </Container>
            </section>
        </>
    );
}