import { useLayoutEffect } from "react";
import SEO from "../app/seo/SEO.jsx";
import Container from "../components/layout/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Button from "../components/ui/Button.jsx";
import { Link, useLocation } from "react-router-dom";
import { caseStudies } from "../data/caseStudies.js";
import { ArrowUpRight } from "lucide-react";
import { theme } from "../styles/theme";

export default function CaseStudies() {
    const location = useLocation();

    // ✅ Runs AFTER this page mounts (fixes “blank until click again”)
    useLayoutEffect(() => {
        const top = () => {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };
        top();
        requestAnimationFrame(top);
        setTimeout(top, 0);
        setTimeout(top, 80);
    }, [location.key]);

    return (
        <>
            <SEO
                title="Portfolio / Case Studies | Invendoi AI Solutions"
                description="Case studies across municipal enforcement, wildlife monitoring, enterprise safety, privacy-safe face recognition, and drone intelligence."
                path="/case-studies"
            />

            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
                <Container>
                    <SectionHeading
                        kicker="Portfolio"
                        title="Proven in the Field."
                        description="Deployment history spanning municipal monitoring, edge AI, and telemetry-fused UAV tracking."
                    />

                    <div className="mt-16 grid gap-8 lg:grid-cols-2">
                        {caseStudies.map((c) => (
                            <div
                                key={c.slug}
                                className="group glass rounded-[32px] overflow-hidden border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all grid md:grid-cols-5 h-full"
                            >
                                <div className="relative md:col-span-2 h-56 md:h-auto overflow-hidden">
                                    <img
                                        src={c.heroImage}
                                        alt={c.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent opacity-60 md:hidden" />
                                    <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0b1220]/40" />
                                </div>

                                <div className="md:col-span-3 p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase mb-2">
                                            {c.industry}
                                        </div>

                                        <h3 className="font-display text-xl text-white group-hover:text-indigo-300 transition-colors">
                                            {c.title}
                                        </h3>

                                        <p className={`mt-4 text-sm ${theme.mutedText} leading-relaxed line-clamp-3`}>
                                            {c.summary}
                                        </p>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {c.tech.slice(0, 3).map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400 font-bold uppercase tracking-wider"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
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
                </Container>
            </section>
        </>
    );
}