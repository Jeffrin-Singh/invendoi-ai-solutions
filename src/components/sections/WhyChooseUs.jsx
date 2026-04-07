import Container from "../layout/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { company } from "../../data/company.js";
import { ShieldCheck } from "lucide-react";
import { theme } from "../../styles/theme";

export default function WhyChooseUs() {
    return (
        <section className="relative py-20 overflow-hidden">
            <Container>
                <SectionHeading
                    kicker="Advantage"
                    title="Designed for Operators."
                    description="Our premium AI systems integrate cleanly with existing infrastructure and field workflows."
                />

                <div className="mt-16 grid gap-6 lg:grid-cols-2">
                    {company.whyChooseUs.map((item) => (
                        <div key={item} className="glass p-8 rounded-[32px] border-white/5 bg-white/[0.02] flex gap-5 items-start">
                            <div className="mt-1 h-10 w-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                                <ShieldCheck className="h-5 w-5 text-indigo-400" />
                            </div>
                            <div className={`text-sm ${theme.mutedText} leading-relaxed pt-2`}>{item}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}