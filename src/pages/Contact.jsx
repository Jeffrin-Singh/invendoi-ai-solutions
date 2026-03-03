import { useState } from "react";
import SEO from "../app/seo/SEO.jsx";
import Container from "../components/layout/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Card from "../components/ui/Card.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Button from "../components/ui/Button.jsx";
import { company } from "../data/company.js";
import { cn } from "../lib/cn.js";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });

    const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    return (
        <>
            <SEO
                title="Contact | Invendoi AI Solutions"
                description="Request a demo or proposal for edge AI video analytics, geospatial evidence mapping, drone intelligence, and secure portal integrations."
                path="/contact"
                image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80"
            />

            <section className="py-16 sm:py-20">
                <Container>
                    <Reveal>
                        <SectionHeading
                            kicker="Contact"
                            title="Let’s scope your deployment"
                            description="Share your camera/UAV setup, locations, bandwidth constraints, and SOP requirements. We’ll respond with a practical pilot + scale plan."
                        />
                    </Reveal>

                    <div className="mt-10 grid gap-6 lg:grid-cols-12 items-stretch">
                        <Reveal className="lg:col-span-7 h-full" boxClassName="h-full">
                            <Card className="p-8 h-full flex flex-col">
                                <div className="font-display text-2xl text-white">Send a message</div>
                                <p className="mt-3 text-sm text-slate-300/70 leading-relaxed">
                                    Have a specific environment or scale in mind? Tell us about your cameras, drones, or locations, and we'll prepare a tailored deployment architecture.
                                </p>

                                <div className="mt-8 grid gap-5 sm:grid-cols-2 flex-grow">
                                    <Field label="Your name">
                                        <input
                                            name="name"
                                            value={form.name}
                                            onChange={onChange}
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                                            placeholder="Full name"
                                        />
                                    </Field>
                                    <Field label="Work email">
                                        <input
                                            name="email"
                                            value={form.email}
                                            onChange={onChange}
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                                            placeholder="name@company.com"
                                        />
                                    </Field>
                                    <Field label="Organization" className="sm:col-span-2">
                                        <input
                                            name="org"
                                            value={form.org}
                                            onChange={onChange}
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                                            placeholder="Department / Company"
                                        />
                                    </Field>
                                    <div className="sm:col-span-2">
                                        <Field label="What do you want to build?">
                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={onChange}
                                                rows={5}
                                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
                                                placeholder="Example: 200+ cameras across 10 zones, need geo-tagged violations + evidence workflow..."
                                            />
                                        </Field>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                    <Button className="flex-grow sm:flex-grow-0 min-w-[160px]"
                                        onClick={() => alert("Form submitted successfully! (Demo mode)")}
                                    >
                                        Send inquiry
                                    </Button>
                                    <Button variant="secondary" className="flex-grow sm:flex-grow-0" onClick={() => setForm({ name: "", email: "", org: "", message: "" })}>
                                        Reset
                                    </Button>
                                </div>
                            </Card>
                        </Reveal>

                        <Reveal delay={0.1} className="lg:col-span-5 h-full" boxClassName="h-full">
                            <Card className="p-8 h-full flex flex-col">
                                <div className="font-display text-2xl text-white">Direct contact</div>

                                <div className="mt-6 space-y-6 flex-grow">
                                    <div className="group">
                                        <div className="text-xs font-bold tracking-wider text-indigo-400 uppercase">Email</div>
                                        <div className="mt-2 text-sm">
                                            <a className="text-slate-300 hover:text-white transition-colors block" href={`mailto:${company.emailPrimary}`}>
                                                {company.emailPrimary}
                                            </a>
                                            <div className="mt-1 text-xs text-slate-400">
                                                Proposals: {company.emailAlt}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-bold tracking-wider text-indigo-400 uppercase">Phone</div>
                                        <div className="mt-2 text-sm">
                                            <a className="text-slate-300 hover:text-white transition-colors" href={`tel:${company.phone.replace(/\s/g, "")}`}>
                                                {company.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs font-bold tracking-wider text-indigo-400 uppercase">Location</div>
                                        <div className="mt-2 text-sm text-slate-300 leading-relaxed">
                                            <div>{company.addressLines[0]}</div>
                                            <div>{company.addressLines[1]}</div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/10">
                                        <div className="text-xs font-bold tracking-wider text-indigo-400 uppercase">What to include</div>
                                        <ul className="mt-4 space-y-3">
                                            {[
                                                "Number of cameras/UAVs and locations",
                                                "Alert types (violations, safety, wildlife, etc.)",
                                                "Bandwidth and power availability",
                                                "Workflow needs (evidence, audit, integrations)"
                                            ].map((item) => (
                                                <li key={item} className="flex gap-3 text-sm text-slate-300/80">
                                                    <span className="text-indigo-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </Reveal>
                    </div>
                </Container>
            </section>
        </>
    );
}

function Field({ label, children, className = "" }) {
    return (
        <label className={cn("block", className)}>
            <div className="mb-2 text-xs font-semibold text-slate-200/75">{label}</div>
            {children}
        </label>
    );
}