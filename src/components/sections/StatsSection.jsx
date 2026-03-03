import Container from "../layout/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Card from "../ui/Card.jsx";
import AnimatedCounter from "../ui/AnimatedCounter.jsx";
import Reveal from "../ui/Reveal.jsx";
import { company } from "../../data/company.js";

export default function StatsSection() {
    return (
        <section className="py-16 sm:py-20">
            <Container>
                <Reveal>
                    <SectionHeading
                        kicker="Impact"
                        title="Measured outcomes, not vanity metrics"
                        description="Proof points referenced across deployments, pilots and operational modules."
                    />
                </Reveal>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {company.stats.map((s, idx) => (
                        <Reveal key={s.label} delay={idx * 0.05}>
                            <Card className="p-5">
                                <div className="font-display text-3xl text-white">
                                    <AnimatedCounter
                                        value={s.value}
                                        suffix={s.suffix}
                                        decimals={s.decimals || 0}
                                    />
                                </div>
                                <div className="mt-2 text-sm text-slate-300/75">{s.label}</div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}