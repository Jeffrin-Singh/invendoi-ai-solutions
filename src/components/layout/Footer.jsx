import { Link } from "react-router-dom";
import Container from "./Container.jsx";
import { company } from "../../data/company.js";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-slate-950">
            <Container className="py-12">
                <div className="grid gap-10 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="Invendoi Logo" className="h-9 w-9 object-contain" />
                            <div>
                                <div className="font-display text-white">{company.name}</div>
                                <div className="text-xs text-slate-300/70">{company.tagline}</div>
                            </div>
                        </div>

                        <p className="mt-4 text-sm text-slate-300/80 leading-relaxed">
                            Edge AI, real-time video analytics, and geospatial intelligence for government and enterprise
                            operations—built for scale and field constraints.
                        </p>

                        <div className="mt-5 text-sm text-slate-300/80 space-y-1">
                            <div>{company.location}</div>
                            <div>
                                <a className="hover:text-white" href={`mailto:${company.emailPrimary}`}>
                                    {company.emailPrimary}
                                </a>{" "}
                                •{" "}
                                <a className="hover:text-white" href={`tel:${company.phone.replace(/\s/g, "")}`}>
                                    {company.phone}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-7 grid gap-8 sm:grid-cols-3">
                        <div>
                            <div className="text-sm font-semibold text-white">Company</div>
                            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300/80">
                                <Link className="hover:text-white" to="/about">About</Link>
                                <Link className="hover:text-white" to="/services">Services</Link>
                                <Link className="hover:text-white" to="/case-studies">Portfolio</Link>
                            </div>
                        </div>

                        <div>
                            <div className="text-sm font-semibold text-white">Get in touch</div>
                            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300/80">
                                <Link className="hover:text-white" to="/contact">Contact</Link>
                                <a className="hover:text-white" href={`mailto:${company.emailAlt}`}>
                                    Proposals: {company.emailAlt}
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="text-sm font-semibold text-white">Legal</div>
                            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300/80">
                                <span className="text-slate-300/60">Privacy (add later)</span>
                                <span className="text-slate-300/60">Terms (add later)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-6">
                    <div className="text-xs text-slate-300/60">
                        © {new Date().getFullYear()} {company.name}. All rights reserved.
                    </div>
                    <div className="text-xs text-slate-300/60">
                        Built with React • Tailwind • Framer Motion
                    </div>
                </div>
            </Container>
        </footer>
    );
}
