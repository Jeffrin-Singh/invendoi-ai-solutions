export default function Badge({ children }) {
    return (
        <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-white/50 px-3 py-1 text-xs text-slate-600 font-medium">
            {children}
        </span>
    );
}