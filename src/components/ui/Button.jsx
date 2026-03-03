import { cn } from "../../lib/cn.js";

export default function Button({
    as: Comp = "button",
    children,
    className = "",
    variant = "primary",
    as: Component = "button",
    ...props
}) {
    const variants = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.45)]",
        secondary: "bg-white/10 text-white border border-white/10 hover:bg-white/15 backdrop-blur-sm",
        ghost: "text-slate-200 hover:bg-white/5",
    };

    return (
        <Component
            className={cn(
                "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.98] outline-none focus:ring-2 focus:ring-indigo-400/40",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}