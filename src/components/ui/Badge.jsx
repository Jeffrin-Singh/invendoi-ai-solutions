import { cn } from "../../lib/cn";

export default function Badge({ children, className = "", variant = "filled" }) {
    const variants = {
        filled: "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20",
        outline: "bg-white/5 text-slate-300 border border-white/10 backdrop-blur-md",
    };

    return (
        <span className={cn(
            "inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-all",
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
}