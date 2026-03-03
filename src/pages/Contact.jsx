import { useState } from "react";
import SEO from "../app/seo/SEO.jsx";
import Container from "../components/layout/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Button from "../components/ui/Button.jsx";
import { company } from "../data/company.js";
import { cn } from "../lib/cn.js";
import { theme } from "../styles/theme";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });

    const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    return (
        <>
            <SEO
                title="Contact | Invendoi AI Solutions"
                description="Request a demo or proposal for edge AI video analytics, geospatial evidence mapping, drone intelligence, and secure portal integrations."
                path="/contact"
            />

            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
                <Container>
                    <SectionHeading
                        kicker="Contact"
                        title="Engineer the Future."
                        description="Share your mission requirements. We'll respond with a technical architecture and deployment roadmap."
                    />

                    <div className="mt-16 grid gap-10 lg:grid-cols-12 items-start">
                        <div className="lg:col-span-7 glass-strong p-10 rounded-[40px] border-white/10 bg-white/[0.03]">
                            <h3 className="font-display text-2xl text-white mb-2">Send an Inquiry</h3>
                            <p className={`text-sm ${theme.mutedText} leading-relaxed mb-10`}>
                                Tell us about your operational environment (cameras, UAVs, etc.) and your tactical goals.
                            </p>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <Field label="Full Name">
                                    <input
                                        name="name"
                                        value={form.name}
                                        onChange={onChange}
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-sans"
                                        placeholder="John Carter"
                                    />
                                </Field>
                                <Field label="Work Email">
                                    <input
                                        name="email"
                                        value={form.email}
                                        onChange={onChange}
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-sans"
                                        placeholder="carter@agency.gov"
                                    />
                                </Field>
                                <Field label="Organization" className="sm:col-span-2">
                                    <input
                                        name="org"
                                        value={form.org}
                                        onChange={onChange}
                                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-sans"
                                        placeholder="Department or Firm"
                                    />
                                </Field>
                                <div className="sm:col-span-2">
                                    <Field label="Brief Scope">
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={onChange}
                                            rows={5}
                                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none font-sans"
                                            placeholder="Example: Need real-time analytics for 500 fixed cameras across municipal zones..."
                                        />
                                    </Field>
                                </div>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Button className="px-10" onClick={() => alert("Form submitted successfully! (Demo mode)")}>
                                    Submit Request
                                </Button>
                                <Button
                                    variant="secondary"
                                    onClick={() => setForm({ name: "", email: "", org: "", message: "" })}
                                >
                                    Clear Form
                                </Button>
                            </div>
                        </div>

                        <div className="lg:col-span-5 space-y-8">
                            <div className="glass p-10 rounded-[40px]">
                                <h3 className="font-display text-xl text-white mb-8">Operational Support</h3>

                                <div className="space-y-8">
                                    <div>
                                        <div className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase mb-3">Electronic Mail</div>
                                        <a href={`mailto:${company.emailPrimary}`} className="text-white hover:text-indigo-300 transition-colors block text-lg font-sans">
                                            {company.emailPrimary}
                                        </a>
                                        <span className="text-xs text-slate-500 mt-1 block tracking-wide">Inquiries: {company.emailAlt}</span>
                                    </div>

                                    <div>
                                        <div className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase mb-3">Tactical Comms</div>
                                        <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-white hover:text-indigo-300 transition-colors block text-lg font-sans">
                                            {company.phone}
                                        </a>
                                    </div>

                                    <div>
                                        <div className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase mb-3">Headquarters</div>
                                        <div className="text-white text-lg leading-relaxed font-sans uppercase tracking-tight">
                                            {company.addressLines.map(l => <div key={l}>{l}</div>)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-strong p-8 rounded-[40px] bg-indigo-500/5 border-white/10">
                                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Engagement Focus</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Municipal & Defense Video Analytics",
                                        "Edge AI Deployment (Jetson/GPU)",
                                        "UAV/Drone Sensor Fusion",
                                        "Sovereign Intelligence Networks"
                                    ].map(item => (
                                        <li key={item} className="flex gap-4 items-start text-sm text-slate-400">
                                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

function Field({ label, children, className = "" }) {
    return (
        <label className={cn("block", className)}>
            <div className="mb-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</div>
            {children}
        </label>
    );
}
