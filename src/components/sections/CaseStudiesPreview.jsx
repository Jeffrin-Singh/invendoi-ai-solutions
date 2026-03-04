import { Link } from "react-router-dom";
import Container from "../layout/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Button from "../ui/Button.jsx";
import { caseStudies } from "../../data/caseStudies.js";
import { ArrowUpRight } from "lucide-react";
import { theme } from "../../styles/theme";

export default function CaseStudiesPreview() {
    const featured = caseStudies.filter((c) => c.featured);
    const top = (featured.length ? featured : caseStudies).slice(0, 3);

    return (
        <section className="relative py-20 overflow-hidden">
            <Container>
                <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                    <SectionHeading
                        kicker="Portfolio"
                        title="Deployed in the field."
                        description="Real deployments, field trials, and operational workflows built for scale and accountability."
                        align="left"
                    />
                    <Button as={Link} to="/case-studies" variant="secondary" className="hidden md:flex">
                        View full Portfolio <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                </div>

                <div className="mt-16 grid gap-6 lg:grid-cols-3">
                    {top.map((c) => (
                        <div
                            key={c.slug}
                            className="group glass rounded-[32px] overflow-hidden border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={c.heroImage}
                                    alt={c.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent opacity-80" />

                                {/* metric pill */}
                                <div className="absolute left-4 bottom-4 rounded-full border border-white/10 bg-slate-950/60 backdrop-blur px-3 py-1.5 text-[11px] text-slate-200/80">
                                    {c.featuredMetric || c.metrics?.[0]?.v}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase mb-3">
                                    {c.industry}
                                </div>
                                <h3 className="font-display text-xl text-white group-hover:text-indigo-300 transition-colors">
                                    {c.title}
                                </h3>
                                <p className={`mt-4 text-sm ${theme.mutedText} leading-relaxed flex-grow`}>
                                    {c.summary}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {c.tech.slice(0, 3).map((t) => (
                                        <span
                                            key={t}
                                            className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-300/70 font-bold uppercase tracking-wider"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <Button
                                        as={Link}
                                        to={`/case-studies/${c.slug}`}
                                        variant="ghost"
                                        className="w-full justify-between -ml-2 group/btn"
                                    >
                                        <span>Read case study</span>
                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:hidden">
                    <Button as={Link} to="/case-studies" variant="secondary" className="w-full">
                        View full Portfolio <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                </div>
            </Container>
        </section>
    );
}