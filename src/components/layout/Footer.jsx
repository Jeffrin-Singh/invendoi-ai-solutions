import { Link } from "react-router-dom";
import Container from "./Container";
import { company } from "../../data/company";
import { theme } from "../../styles/theme";

export default function Footer() {
    return (
        <footer className={theme.footerBg}>
            <Container className="py-12 md:py-16">
                <div className="grid gap-10 lg:grid-cols-12 items-start">
                    <div className="lg:col-span-4">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="h-9 w-9 overflow-hidden rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-indigo-500/20 transition-all">
                                <img src="/logo.png" alt="Logo" className="h-6 w-6 object-contain" />
                            </div>
                            <span className="font-display text-lg tracking-wide text-white">Invendoi</span>
                        </Link>
                        <p className={`mt-4 ${theme.mutedText} max-w-xs leading-relaxed`}>
                            Building edge AI and computer vision systems for high-stakes operational environments.
                        </p>
                    </div>

                    <div className="lg:col-span-8 grid gap-8 grid-cols-2 sm:grid-cols-3">
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-white/40">Quick Links</div>
                            <ul className="mt-4 space-y-2">
                                {["Home", "About", "Services", "Portfolio", "Contact"].map((l) => {
                                    let to = "/";
                                    if (l === "Portfolio") to = "/case-studies";
                                    else if (l !== "Home") to = `/${l.toLowerCase().replace(" ", "-")}`;

                                    return (
                                        <li key={l}>
                                            <Link
                                                to={to}
                                                className="text-sm text-slate-400 hover:text-white transition-colors"
                                            >
                                                {l}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-white/40">Core Services</div>
                            <ul className="mt-4 space-y-2">
                                {["Video Analytics", "Edge AI", "Drone Intel", "Portals"].map((s) => (
                                    <li key={s}>
                                        <span className="text-sm text-slate-400 hover:text-white cursor-pointer transition-colors">
                                            {s}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <div className="text-xs font-bold uppercase tracking-widest text-white/40">Headquarters</div>
                            <div className="mt-4 text-sm text-slate-400 leading-relaxed uppercase tracking-wide">
                                {company.addressLines.map((line) => (
                                    <div key={line}>{line}</div>
                                ))}
                                <div className="mt-4">
                                    <a href={`mailto:${company.emailPrimary}`} className="hover:text-white transition-colors block lowercase tracking-normal font-sans">
                                        {company.emailPrimary}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
                    <div className="text-xs text-slate-500 font-medium tracking-wide">
                        © {new Date().getFullYear()} Invendoi AI Solutions Pvt. Ltd. All rights reserved.
                    </div>
                    <div className="flex gap-6 text-xs text-slate-500 font-medium uppercase tracking-widest">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
