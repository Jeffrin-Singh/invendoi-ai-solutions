import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import Button from "../ui/Button.jsx";
import { theme } from "../../styles/theme";

export default function ProjectCard({ project }) {
    const { slug, title, industry, status, summary, modules, metrics, coverImage } = project;

    return (
        <motion.div
            layout
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col h-full"
        >
            <div className="glass rounded-[32px] flex flex-col h-full overflow-hidden border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                <div className="relative h-52 overflow-hidden">
                    <img
                        src={coverImage}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                        <span className="rounded-full bg-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md border border-white/10 shadow-sm">
                            {industry}
                        </span>
                        <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-indigo-300 backdrop-blur-md border border-indigo-500/20 shadow-sm">
                            {status}
                        </span>
                    </div>
                </div>

                <div className="flex flex-1 flex-col p-8">
                    <h3 className="font-display text-xl text-white group-hover:text-indigo-300 transition-colors line-clamp-2 min-h-[3.5rem]">
                        {title}
                    </h3>

                    <p className={`mt-4 text-sm ${theme.mutedText} leading-relaxed line-clamp-3`}>
                        {summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {modules?.slice(0, 3).map((m) => (
                            <span
                                key={m}
                                className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-white/5 bg-white/[0.02] px-3 py-1 rounded-lg"
                            >
                                {m}
                            </span>
                        ))}
                    </div>

                    {metrics && metrics.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">
                                Tactical Outcome
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-xl font-display text-indigo-400">{metrics[0].v}</span>
                                <span className="text-xs text-slate-500 font-medium">{metrics[0].k}</span>
                            </div>
                        </div>
                    )}

                    <div className="mt-10 flex gap-4">
                        <Button as={Link} to={`/projects/${slug}`} variant="secondary" className="flex-1 py-3 text-xs">
                            Details <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                        </Button>
                        <Button as={Link} to="/contact" variant="ghost" className="px-4 py-3 border border-white/5 hover:bg-white/5">
                            <MessageSquare className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
