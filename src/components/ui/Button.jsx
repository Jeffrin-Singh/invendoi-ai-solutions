import { cn } from "../../lib/cn.js";

export default function Button({
    as: Comp = "button",
    variant = "primary",
    className = "",
    children,
    ...props
}) {
    const base =
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/40 disabled:opacity-60 disabled:cursor-not-allowed";
    const styles = {
        primary:
            "bg-slate-900 text-white shadow-sm hover:bg-slate-800 hover:-translate-y-[1px]",
        secondary:
            "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
        ghost: "bg-transparent text-slate-900 hover:bg-slate-100 border border-transparent",
    };

    return (
        <Comp className={cn(base, styles[variant], className)} {...props}>
            {children}
        </Comp>
    );
}