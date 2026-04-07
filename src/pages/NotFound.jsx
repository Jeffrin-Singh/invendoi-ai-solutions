import { Link } from "react-router-dom";
import SEO from "../app/seo/SEO.jsx";
import Container from "../components/layout/Container.jsx";
import Button from "../components/ui/Button.jsx";
import { theme } from "../styles/theme";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <>
            <SEO title="404 | Tactical Error" description="This capability is not available." path="/404" />
            <section className="relative py-32 flex items-center justify-center min-h-[70vh] overflow-hidden">
                <div className="absolute inset-0 grid-overlay opacity-10" />
                <Container>
                    <div className="glass p-16 md:p-24 rounded-[48px] text-center border-white/5 bg-white/[0.02] max-w-2xl mx-auto">
                        <div className="font-display text-6xl md:text-8xl text-indigo-500 opacity-20 mb-8">
                            404
                        </div>

                        <h1 className="font-display text-3xl md:text-4xl text-white">
                            Resource not found.
                        </h1>

                        <p className={`mt-6 text-lg ${theme.mutedText} leading-relaxed`}>
                            The requested tactical capability or page could not be located in the current operational environment.
                        </p>

                        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                            <Button as={Link} to="/">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Return to Command
                            </Button>
                            <Button as={Link} to="/contact" variant="secondary">
                                Operational Support
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}