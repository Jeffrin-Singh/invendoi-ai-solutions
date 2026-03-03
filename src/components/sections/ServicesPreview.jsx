import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../layout/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Button from "../ui/Button.jsx";
import Card from "../ui/Card.jsx";
import Reveal from "../ui/Reveal.jsx";
import { services } from "../../data/services.js";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPreview() {
    const top = services.slice(0, 6);

    return (
        <section className="py-16 sm:py-20">
            <Container>
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <Reveal>
                        <SectionHeading
                            kicker="Services"
                            title="From edge inference to control-room outcomes"
                            description="We combine real-time analytics, secure portals, and integration-ready workflows for government and enterprise operations."
                        />
                    </Reveal>
                    <Reveal>
                        <Button as={Link} to="/services" variant="secondary">
                            Explore all services <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Button>
                    </Reveal>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {top.map((s, idx) => (
                        <Reveal key={s.slug} delay={idx * 0.04}>
                            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                                <Card className="overflow-hidden">
                                    <div className="relative h-44">
                                        <img
                                            src={s.image}
                                            alt={s.title}
                                            className="h-full w-full object-cover opacity-90"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                                        <div className="absolute bottom-3 left-4 right-4">
                                            <div className="font-display text-lg text-white">{s.title}</div>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <p className="text-sm text-slate-300/80 leading-relaxed">
                                            {s.short}
                                        </p>

                                        <ul className="mt-4 space-y-2">
                                            {s.highlights.map((h) => (
                                                <li key={h} className="text-xs text-slate-200/75">
                                                    • {h}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-5">
                                            <Button as={Link} to={`/services/${s.slug}`} variant="ghost">
                                                View details <ArrowUpRight className="ml-1 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}