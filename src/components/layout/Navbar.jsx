import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import { theme } from "../../styles/theme";

const nav = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/case-studies", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const handleNavigate = () => {
        setOpen(false);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [open]);

    return (
        <header className="sticky top-0 z-50">
            <div className={theme.navBg}>
                <Container className="flex h-16 items-center justify-between">
                    <Link to="/" onClick={handleNavigate} className="flex items-center gap-3 group">
                        <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all shadow-lg">
                            <img src="/logo.png" alt="Invendoi Logo" className="h-7 w-7 object-contain" />
                        </div>
                        <div className="hidden sm:block">
                            <div className="font-display text-sm tracking-wide text-white uppercase">Invendoi</div>
                            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">AI Solutions</div>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {nav.map((n) => (
                            <Link
                                key={n.to}
                                to={n.to}
                                onClick={handleNavigate}
                                className={`${theme.navLink} ${location.pathname === n.to ? theme.navLinkActive : ""}`}
                            >
                                {n.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10 transition-all"
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </Container>

                {open && (
                    <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl h-screen overflow-y-auto pb-24">
                        <Container className="py-6">
                            <div className="flex flex-col gap-2">
                                {nav.map((n) => (
                                    <Link
                                        key={n.to}
                                        to={n.to}
                                        onClick={handleNavigate}
                                        className={`rounded-2xl px-5 py-4 text-base font-medium transition-all ${location.pathname === n.to
                                            ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                                            : "text-slate-300 hover:bg-white/5"
                                            }`}
                                    >
                                        {n.label}
                                    </Link>
                                ))}
                            </div>
                        </Container>
                    </div>
                )}
            </div>
        </header>
    );
}
