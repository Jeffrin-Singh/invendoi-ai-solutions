import { Link } from "react-router-dom";
import SEO from "../app/seo/SEO.jsx";
import Container from "../components/layout/Container.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";

export default function NotFound() {
    return (
        <>
            <SEO title="404 | Invendoi AI Solutions" description="Page not found" path="/404" />
            <section className="py-16 sm:py-20">
                <Container>
                    <Card className="p-10 text-center">
                        <div className="font-display text-3xl text-slate-900">404</div>
                        <p className="mt-3 text-sm text-slate-600">
                            The page you’re looking for doesn’t exist.
                        </p>
                        <div className="mt-6 flex justify-center gap-3">
                            <Button as={Link} to="/">Go Home</Button>
                            <Button as={Link} to="/contact" variant="secondary">Contact</Button>
                        </div>
                    </Card>
                </Container>
            </section>
        </>
    );
}