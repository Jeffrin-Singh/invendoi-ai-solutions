import { useEffect, useState, useCallback } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Container from "./Container.jsx";
import Button from "../ui/Button.jsx";

const nav = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/case-studies", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
];

const linkBase = "text-sm text-slate-200/80 hover:text-white transition-colors";
const active = "text-white";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => setOpen(false), [pathname]);

    const handleNavigate = useCallback(() => {
        setOpen(false);
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    return (
        <header className="sticky top-0 z-50">
            <div className="bg-slate-950/70 backdrop-blur-md border-b border-white/10">
                <Container className="flex h-16 items-center justify-between">
                    <Link to="/" onClick={handleNavigate} className="flex items-center gap-2">
                        <img src="/logo.png" alt="Invendoi Logo" className="h-9 w-9 object-contain" />
                        <div className="leading-tight">
                            <div className="font-display text-sm text-white">Invendoi</div>
                            <div className="text-[11px] text-slate-300/70">AI Solutions</div>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-7">
                        {nav.map((n) => (
                            <NavLink
                                key={n.to}
                                to={n.to}
                                onClick={handleNavigate}
                                className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}
                            >
                                {n.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-3">
                        <Button as={Link} to="/contact" onClick={handleNavigate} variant="secondary">
                            Talk to an Expert
                        </Button>
                        <Button as={Link} to="/contact" onClick={handleNavigate}>
                            Request a Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Button>
                    </div>

                    <button
                        className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </Container>

                {open && (
                    <div className="md:hidden border-t border-white/10 bg-slate-950/95">
                        <Container className="py-4">
                            <div className="flex flex-col gap-3">
                                {nav.map((n) => (
                                    <NavLink
                                        key={n.to}
                                        to={n.to}
                                        onClick={handleNavigate}
                                        className={({ isActive }) =>
                                            `rounded-xl px-3 py-2 text-sm ${isActive ? "bg-white/10 text-white" : "text-slate-200/80 hover:bg-white/5"
                                            }`
                                        }
                                    >
                                        {n.label}
                                    </NavLink>
                                ))}
                                <div className="pt-2 flex flex-col gap-2">
                                    <Button as={Link} to="/contact" onClick={handleNavigate} variant="secondary">
                                        Talk to an Expert
                                    </Button>
                                    <Button as={Link} to="/contact" onClick={handleNavigate}>
                                        Request a Demo
                                    </Button>
                                </div>
                            </div>
                        </Container>
                    </div>
                )}
            </div>
        </header>
    );
}