import { theme } from "../../styles/theme";

export default function SectionHeading({ kicker, title, description, align = "center" }) {
    const alignment = {
        center: "text-center mx-auto items-center",
        left: "text-left items-start",
    };

    return (
        <div className={`flex flex-col max-w-3xl ${alignment[align]}`}>
            {kicker && (
                <div className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase mb-4">
                    {kicker}
                </div>
            )}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                {title}
            </h2>
            {description && (
                <p className={`mt-5 text-base sm:text-lg ${theme.mutedText} leading-relaxed`}>
                    {description}
                </p>
            )}
        </div>
    );
}