import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import Card from "../ui/Card.jsx";
import Button from "../ui/Button.jsx";

export default function ProjectCard({ project, delay = 0 }) {
    const { slug, title, industry, status, summary, modules, metrics, coverImage } = project;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35, delay, ease: "easeOut" }}
            whileHover={{ y: -4 }}
        >
            <Card className="flex h-full flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={coverImage}
                        alt={title}
                        className="h-full w-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/10">
                            {industry}
                        </span>
                        <span className="rounded-full bg-indigo-500/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-300 backdrop-blur-md border border-indigo-500/20">
                            {status}
                        </span>
                    </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-xl text-white line-clamp-2 min-h-[3.5rem]">
                        {title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-300/70 leading-relaxed line-clamp-3">
                        {summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {modules?.slice(0, 3).map((m) => (
                            <span
                                key={m}
                                className="inline-flex items-center text-[11px] text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                            >
                                {m}
                            </span>
                        ))}
                    </div>

                    {metrics && metrics.length > 0 && (
                        <div className="mt-5 border-t border-white/10 pt-4">
                            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                Key Highlight
                            </div>
                            <div className="mt-1 flex items-baseline gap-2">
                                <span className="text-lg font-display text-indigo-400">{metrics[0].v}</span>
                                <span className="text-xs text-slate-400">{metrics[0].k}</span>
                            </div>
                        </div>
                    )}

                    <div className="mt-auto pt-6 flex flex-wrap gap-3">
                        <Button as={Link} to={`/projects/${slug}`} variant="secondary" className="flex-1 py-2.5">
                            View project <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                        </Button>
                        <Button as={Link} to="/contact" variant="ghost" className="flex-1 py-2.5">
                            Talk to us <MessageSquare className="ml-1.5 h-3.5 w-3.5" />
                        </Button>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}