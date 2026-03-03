export default function SectionHeading({ kicker, title, description }) {
    return (
        <div className="max-w-2xl">
            {kicker && (
                <div className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">
                    {kicker}
                </div>
            )}
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-slate-900">
                {title}
            </h2>
            {description && (
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}