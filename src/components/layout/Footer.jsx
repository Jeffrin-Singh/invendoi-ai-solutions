import { Link } from "react-router-dom";
import Container from "./Container.jsx";
import { company } from "../../data/company.js";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200/70 bg-white/70">
            <Container className="py-12">
                <div className="grid gap-10 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="Invendoi Logo" className="h-9 w-9 object-contain" />
                            <div>
                                <div className="font-display text-slate-900">{company.name}</div>
                                <div className="text-xs text-slate-600">{company.tagline}</div>
                            </div>
                        </div>

                        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                            Edge AI, real-time video analytics, and geospatial intelligence for government and enterprise
                            operations—built for scale and field constraints.
                        </p>

                        <div className="mt-5 text-sm text-slate-600 space-y-1">
                            <div>{company.location}</div>
                            <div>
                                <a className="hover:text-slate-900" href={`mailto:${company.emailPrimary}`}>
                                    {company.emailPrimary}
                                </a>{" "}
                                •{" "}
                                <a className="hover:text-slate-900" href={`tel:${company.phone.replace(/\s/g, "")}`}>
                                    {company.phone}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-7 grid gap-8 sm:grid-cols-3">
                        <div>
                            <div className="text-sm font-semibold text-slate-900">Company</div>
                            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
                                <Link className="hover:text-slate-900" to="/about">About</Link>
                                <Link className="hover:text-slate-900" to="/services">Services</Link>
                                <Link className="hover:text-slate-900" to="/case-studies">Portfolio</Link>
                            </div>
                        </div>

                        <div>
                            <div className="text-sm font-semibold text-slate-900">Get in touch</div>
                            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
                                <Link className="hover:text-slate-900" to="/contact">Contact</Link>
                                <a className="hover:text-slate-900" href={`mailto:${company.emailAlt}`}>
                                    Proposals: {company.emailAlt}
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="text-sm font-semibold text-slate-900">Legal</div>
                            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
                                <span className="text-slate-400">Privacy (add later)</span>
                                <span className="text-slate-400">Terms (add later)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-slate-200/70 pt-6">
                    <div className="text-xs text-slate-500">
                        © {new Date().getFullYear()} {company.name}. All rights reserved.
                    </div>
                    <div className="text-xs text-slate-500">
                        Built with React • Tailwind • Framer Motion
                    </div>
                </div>
            </Container>
        </footer>
    );
}
