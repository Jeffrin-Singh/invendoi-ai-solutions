import Container from "../layout/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import AnimatedCounter from "../ui/AnimatedCounter.jsx";
import { company } from "../../data/company.js";
import { theme } from "../../styles/theme";

export default function StatsSection() {
    return (
        <section className="relative py-20 overflow-hidden">
            <Container>
                <SectionHeading
                    kicker="Impact"
                    title="Real-World Outcomes."
                    description="Performance metrics validated across deployment environments."
                />

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {company.stats.map((s) => (
                        <div key={s.label} className="glass p-8 rounded-[32px] border-white/5 bg-white/[0.02]">
                            <div className="font-display text-4xl text-white">
                                <AnimatedCounter
                                    value={s.value}
                                    suffix={s.suffix}
                                    decimals={s.decimals || 0}
                                />
                            </div>
                            <div className={`mt-3 text-xs font-bold uppercase tracking-widest ${theme.mutedText}`}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}