import SEO from "../app/seo/SEO.jsx";
import Container from "../components/layout/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Card from "../components/ui/Card.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { company } from "../data/company.js";

export default function About() {
    return (
        <>
            <SEO
                title="About | Invendoi AI Solutions Pvt. Ltd."
                description="Invendoi AI Solutions delivers computer vision, edge AI, real-time video analytics and geospatial intelligence for government and enterprise—built for real-world deployments."
                path="/about"
                image="https://images.unsplash.com/photo-1581091215367-59ab6b84fbc4?auto=format&fit=crop&w=1600&q=80"
            />

            <section className="py-16 sm:py-20">
                <Container>
                    <Reveal>
                        <SectionHeading
                            kicker="About"
                            title="AI systems built for real environments"
                            description="From large-scale municipal monitoring to edge AI wildlife detection—our focus is operational outcomes: faster response, stronger evidence, and lower monitoring overhead."
                        />
                    </Reveal>

                    <div className="mt-10 grid gap-6 lg:grid-cols-3 items-stretch">
                        <Reveal className="h-full" boxClassName="h-full">
                            <Card className="p-8 h-full flex flex-col">
                                <div className="text-xs font-bold tracking-wider text-indigo-600 uppercase">Overview</div>
                                <div className="mt-2 font-display text-2xl text-slate-900">Company Overview</div>
                                <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-grow">
                                    {company.overview}
                                </p>
                            </Card>
                        </Reveal>

                        <Reveal delay={0.1} className="h-full" boxClassName="h-full">
                            <Card className="p-8 h-full flex flex-col">
                                <div className="text-xs font-bold tracking-wider text-indigo-600 uppercase">Mission</div>
                                <div className="mt-2 font-display text-2xl text-slate-900">Our Mission</div>
                                <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-grow">
                                    {company.mission}
                                </p>
                            </Card>
                        </Reveal>

                        <Reveal delay={0.2} className="h-full" boxClassName="h-full">
                            <Card className="p-8 h-full flex flex-col">
                                <div className="text-xs font-bold tracking-wider text-indigo-600 uppercase">Vision</div>
                                <div className="mt-2 font-display text-2xl text-slate-900">Our Vision</div>
                                <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-grow">
                                    {company.vision}
                                </p>
                            </Card>
                        </Reveal>
                    </div>

                    <div className="mt-6">
                        <Reveal delay={0.3}>
                            <Card className="p-8">
                                <div className="font-display text-2xl text-slate-900">Recognition</div>
                                <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
                                    {company.recognitions.map((r) => (
                                        <li key={r} className="flex gap-3 text-sm text-slate-600 leading-relaxed p-4 rounded-xl border border-slate-200/60 bg-white/40 h-full">
                                            <span className="text-indigo-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600 shrink-0" />
                                            {r}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </Reveal>
                    </div>

                    <div className="mt-6 grid gap-6 lg:grid-cols-2 items-stretch">
                        <Reveal className="lg:col-span-2 h-full" boxClassName="h-full">
                            <Card className="p-8 h-full">
                                <div className="font-display text-2xl text-slate-900">Core competencies</div>
                                <ul className="mt-6 space-y-4 text-sm text-slate-600 leading-relaxed">
                                    <li className="flex gap-3">
                                        <span className="text-indigo-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                                        <span>Real-time video analytics across CCTV, drones/UAVs, body-cams, and mobile streams.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-indigo-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                                        <span>Edge AI on NVIDIA Jetson and GPU servers (TensorRT/DeepStream) with orchestration patterns.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-indigo-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                                        <span>Geofencing and telemetry fusion (MAVLink/DJI SDK) with GPS-tagged alerts and mapping overlays.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-indigo-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                                        <span>Secure multi-tenant portals with RBAC, 2FA, and tamper-proof audit trails.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-indigo-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                                        <span>API-first integrations aligned with C2, GIS, and law-enforcement platforms.</span>
                                    </li>
                                </ul>
                            </Card>
                        </Reveal>

                        <Reveal delay={0.06} className="h-full" boxClassName="h-full">
                            <Card className="p-8 h-full">
                                <div className="font-display text-2xl text-slate-900">How we engage</div>
                                <ol className="mt-6 space-y-4 text-sm text-slate-600 leading-relaxed list-decimal pl-5">
                                    <li className="pl-2"><b className="text-slate-900 italic">Discovery:</b> streams, zones, SOPs, data governance.</li>
                                    <li className="pl-2"><b className="text-slate-900 italic">Pilot:</b> model tuning, alert rules, evidence workflow, operator feedback.</li>
                                    <li className="pl-2"><b className="text-slate-900 italic">Scale:</b> multi-stream optimization, health analytics, role-based access, integrations.</li>
                                    <li className="pl-2"><b className="text-slate-900 italic">Operate:</b> monitoring dashboards, audits, continuous improvements.</li>
                                </ol>
                            </Card>
                        </Reveal>
                    </div>
                </Container>
            </section>
        </>
    );
}