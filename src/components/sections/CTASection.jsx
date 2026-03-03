import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../layout/Container.jsx";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function CTASection() {
    return (
        <section className="py-16 sm:py-20">
            <Container>
                <Reveal>
                    <div className="relative overflow-hidden rounded-3xl glass p-10 shadow-xl border-white/40">
                        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-15 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-fuchsia-500" />
                        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
                            <div className="lg:col-span-8">
                                <div className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">
                                    Ready to deploy
                                </div>
                                <div className="mt-2 font-display text-3xl text-slate-900">
                                    Build an AI monitoring system that operators actually trust.
                                </div>
                                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                                    Tell us your environment (cameras, drones, locations, workflows). We’ll propose a deployment plan
                                    that fits scale, bandwidth, and governance needs—edge to cloud.
                                </p>
                            </div>

                            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:justify-end">
                                <Button as={Link} to="/contact">
                                    Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                <Button as={Link} to="/services" variant="secondary">
                                    Explore Services
                                </Button>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}