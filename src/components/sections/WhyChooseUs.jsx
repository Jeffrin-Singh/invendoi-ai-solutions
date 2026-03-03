import Container from "../layout/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Reveal from "../ui/Reveal.jsx";
import Card from "../ui/Card.jsx";
import { company } from "../../data/company.js";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
    return (
        <section className="py-16 sm:py-20">
            <Container>
                <Reveal>
                    <SectionHeading
                        kicker="Why Invendoi"
                        title="Designed for operators, built for reality"
                        description="A premium AI system is only valuable if it integrates cleanly with your existing infrastructure and workflows."
                    />
                </Reveal>

                <div className="mt-10 grid gap-4 lg:grid-cols-2">
                    {company.whyChooseUs.map((item, idx) => (
                        <Reveal key={item} delay={idx * 0.04}>
                            <Card className="p-5">
                                <div className="flex gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-indigo-600" />
                                    <div className="text-sm text-slate-700 leading-relaxed">{item}</div>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}