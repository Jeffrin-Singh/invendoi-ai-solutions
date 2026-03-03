import { cn } from "../../lib/cn.js";

export default function Button({
    as: Comp = "button",
    variant = "primary",
    className = "",
    children,
    ...props
}) {
    const base =
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400/60 disabled:opacity-60 disabled:cursor-not-allowed";
    const styles = {
        primary:
            "bg-gradient-to-r from-indigo-500 via-cyan-400 to-fuchsia-500 text-slate-950 shadow-glow hover:shadow-glowStrong hover:-translate-y-[1px]",
        secondary:
            "bg-white/6 text-white border border-white/12 hover:bg-white/10",
        ghost: "bg-transparent text-white hover:bg-white/5 border border-transparent",
    };

    return (
        <Comp className={cn(base, styles[variant], className)} {...props}>
            {children}
        </Comp>
    );
}