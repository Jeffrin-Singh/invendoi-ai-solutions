import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../layout/Container.jsx";
import Button from "../ui/Button.jsx";
import { theme } from "../../styles/theme";

export default function CTASection() {
    return (
        <section className="relative py-20 overflow-hidden">
            <Container>
                <div className="relative overflow-hidden rounded-[48px] glass-strong p-10 md:p-16 border-white/10 bg-white/[0.03]">
                    {/* Interior glow */}
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-[100px] opacity-20 bg-indigo-500" />
                    <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-[100px] opacity-10 bg-fuchsia-500" />

                    <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
                        <div className="lg:col-span-8">
                            <div className="text-[10px] font-bold tracking-[0.3em] text-indigo-400 uppercase mb-4">
                                Ready to deploy
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl text-white leading-tight">
                                Build intelligence systems that<br /> operators actually trust.
                            </h2>
                            <p className={`mt-6 text-base md:text-lg ${theme.mutedText} leading-relaxed max-w-2xl`}>
                                Share your operational constraints—hardware, bandwidth, and mission goals.
                                We'll architect a deployment plan that scales from edge to cloud.
                            </p>
                        </div>

                        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:justify-end">
                            <Button as={Link} to="/contact" className="px-8 py-4 text-base">
                                Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button as={Link} to="/services" variant="secondary" className="px-8 py-4 text-base">
                                Explore Capabilities
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
