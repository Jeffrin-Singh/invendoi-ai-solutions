import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Container from "../layout/Container.jsx";
import { cn } from "../../lib/cn.js";
import { theme } from "../../styles/theme";

const industryMap = {
    All: null,
    Government: "Government",
    Municipal: "Municipal Enforcement",
    "Forest/Wildlife": "Forest / Wildlife Monitoring",
    "Enterprise Safety": "Enterprise Safety",
    "UAV Intelligence": "UAV Intelligence",
    "Secure Access": "Secure Access / Law Enforcement (Governed Use)",
};

const filterChips = ["All", "Government", "Municipal", "Forest/Wildlife", "Enterprise Safety", "UAV Intelligence", "Secure Access"];

export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = useMemo(() => {
        const target = industryMap[activeFilter];
        if (!target) return projects;
        return projects.filter((p) => (p.industry || "").includes(target));
    }, [activeFilter]);

    return (
        <section className="relative py-20 overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
                    <div className="max-w-2xl">
                        <SectionHeading
                            kicker="Portfolio"
                            title="Field Deployments."
                            description="AI-driven systems operating in municipal, forest, and tactical domains."
                            align="left"
                        />
                    </div>

                    {/* Filter UI */}
                    <div className="flex flex-wrap lg:justify-end gap-3 pb-2">
                        {filterChips.map((chip) => {
                            const isActive = activeFilter === chip;
                            return (
                                <button
                                    key={chip}
                                    onClick={() => setActiveFilter(chip)}
                                    className={cn(
                                        "relative whitespace-nowrap rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 outline-none",
                                        isActive
                                            ? "text-white"
                                            : "text-slate-500 hover:text-slate-300"
                                    )}
                                >
                                    {/* Active Background */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeFilter"
                                            className="absolute inset-0 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}

                                    {/* Base for Inactive */}
                                    {!isActive && (
                                        <div className="absolute inset-0 border border-white/5 rounded-full bg-white/[0.02]" />
                                    )}

                                    <span className="relative z-10">{chip}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-20">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {filteredProjects.map((project, idx) => (
                                <motion.div
                                    key={project.slug}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                >
                                    <ProjectCard
                                        project={project}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Empty State */}
                    <AnimatePresence>
                        {filteredProjects.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="py-32 text-center"
                            >
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-[32px] glass mb-6 border-white/10">
                                    <svg className="w-8 h-8 text-indigo-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <p className={`font-display text-xl text-white mb-4`}>No projects match this category.</p>
                                <button
                                    onClick={() => setActiveFilter("All")}
                                    className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] hover:text-indigo-300 transition-colors"
                                >
                                    Clear all filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Container>
        </section>
    );
}
