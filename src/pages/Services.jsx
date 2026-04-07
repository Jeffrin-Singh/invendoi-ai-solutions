import SEO from "../app/seo/SEO.jsx";
import Container from "../components/layout/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Button from "../components/ui/Button.jsx";
import { Link } from "react-router-dom";
import { services } from "../data/services.js";
import { ArrowUpRight } from "lucide-react";
import { theme } from "../styles/theme";
import { MagicBento } from "../components/ui/MagicBento.jsx";

export default function Services() {
    return (
        <>
            <SEO
                title="Services | Invendoi AI Solutions"
                description="Real-time video analytics, edge AI deployment (Jetson/GPU), drone intelligence, geospatial evidence mapping, secure portals and integrations."
                path="/services"
            />

            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
                <Container>
                    <SectionHeading
                        kicker="Capabilities"
                        title="Specialized AI Solutions"
                        description="We design and deploy intelligence systems built for the constraints of the real world."
                    />

                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((s) => (
                            <MagicBento
                                key={s.slug}
                                className="rounded-[32px]"
                            >
                                <div className="group h-full overflow-hidden transition-all flex flex-col">
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={s.image}
                                            alt={s.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-[#0b1220]/20 to-transparent" />
                                        <div className="absolute bottom-5 left-6 right-6">
                                            <h3 className="font-display text-xl text-white group-hover:text-indigo-300 transition-colors">
                                                {s.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <p className={`text-sm ${theme.mutedText} leading-relaxed flex-grow`}>
                                            {s.short}
                                        </p>
                                        <div className="mt-8 pt-6 border-t border-white/5">
                                            <Button as={Link} to={`/services/${s.slug}`} variant="ghost" className="w-full justify-between -ml-2 group/btn">
                                                <span>Learn more</span>
                                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </MagicBento>
                        ))}
                    </div>


                    <div className="mt-20">
                        <div className="glass-strong p-10 md:p-14 rounded-[40px] border-white/10 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] -mr-32 -mt-32" />
                            <div className="relative z-10 max-w-2xl">
                                <h2 className="font-display text-3xl text-white">Need a custom deployment plan?</h2>
                                <p className={`mt-4 ${theme.mutedText} text-base leading-relaxed`}>
                                    Share your operational requirements, bandwidth constraints, and mission goals.
                                    We’ll propose a custom architecture, hardware spec, and scaling roadmap.
                                </p>
                                <div className="mt-10">
                                    <Button as={Link} to="/contact" className="px-8">
                                        Request a Consultation
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
