import { Link } from "react-router-dom";
import Container from "../layout/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Button from "../ui/Button.jsx";
import { services } from "../../data/services.js";
import { ArrowUpRight } from "lucide-react";
import { theme } from "../../styles/theme";

export default function ServicesPreview() {
    const top = services.slice(0, 3);

    return (
        <section className="relative py-20 overflow-hidden">
            <Container>
                <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                    <SectionHeading
                        kicker="Intelligence"
                        title="From edge inference to outcomes."
                        description="Real-time analytics and secure workflows built for the tactical edge."
                        align="left"
                    />
                    <Button as={Link} to="/services" variant="secondary" className="hidden md:flex">
                        Explore All Services <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {top.map((s) => (
                        <div key={s.slug} className="group glass rounded-[32px] overflow-hidden border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col">
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-5 left-6 right-6">
                                    <h3 className="font-display text-xl text-white group-hover:text-indigo-300 transition-colors">
                                        {s.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <p className={`text-sm ${theme.mutedText} leading-relaxed`}>
                                    {s.short}
                                </p>

                                <div className="mt-8 pt-6 border-t border-white/5 flex-grow flex items-end">
                                    <Button as={Link} to={`/services/${s.slug}`} variant="ghost" className="w-full justify-between -ml-2 group/btn">
                                        <span>View details</span>
                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:hidden">
                    <Button as={Link} to="/services" variant="secondary" className="w-full">
                        Explore All Services <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                </div>
            </Container>
        </section>
    );
}
