import SEO from "../app/seo/SEO.jsx";
import Container from "../components/layout/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import { Link } from "react-router-dom";
import { services } from "../data/services.js";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
    return (
        <>
            <SEO
                title="Services | Invendoi AI Solutions"
                description="Real-time video analytics, edge AI deployment (Jetson/GPU), drone intelligence, geospatial evidence mapping, secure portals and integrations."
                path="/services"
                image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80"
            />

            <section className="py-16 sm:py-20">
                <Container>
                    <Reveal>
                        <SectionHeading
                            kicker="Services"
                            title="Capabilities that ship to production"
                            description="We design, deploy, and integrate AI analytics systems that fit control-room workflows and field constraints."
                        />
                    </Reveal>

                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {services.map((s, idx) => (
                            <Reveal key={s.slug} delay={idx * 0.03}>
                                <Card className="overflow-hidden">
                                    <div className="relative h-44">
                                        <img src={s.image} alt={s.title} className="h-full w-full object-cover" loading="lazy" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent" />
                                        <div className="absolute bottom-3 left-4 right-4">
                                            <div className="font-display text-lg text-slate-900">{s.title}</div>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <p className="text-sm text-slate-600 leading-relaxed">{s.short}</p>
                                        <div className="mt-5">
                                            <Button as={Link} to={`/services/${s.slug}`} variant="ghost">
                                                View details <ArrowUpRight className="ml-1 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-14">
                        <Card className="p-8">
                            <div className="font-display text-2xl text-slate-900">Need a deployment plan?</div>
                            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                                Share your camera/UAV inventory, locations, bandwidth constraints, and SOP requirements.
                                We’ll propose an architecture, pilot scope, and scaling roadmap.
                            </p>
                            <div className="mt-5">
                                <Button as={Link} to="/contact">Request a proposal</Button>
                            </div>
                        </Card>
                    </div>
                </Container>
            </section>
        </>
    );
}
