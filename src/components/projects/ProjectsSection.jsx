import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Container from "../layout/Container.jsx";
import { cn } from "../../lib/cn.js";

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
        <section className="py-20 border-t border-white/5 bg-slate-950/50">
            <Container>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                    <div className="max-w-2xl">
                        <SectionHeading
                            kicker="Portfolio"
                            title="Projects We’ve Delivered"
                            description="Proven AI deployments across municipal, wildlife, enterprise and aerial domains."
                        />
                    </div>

                    {/* Enhanced Filter UI */}
                    <div className="flex flex-wrap lg:justify-end gap-2 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                        {filterChips.map((chip) => {
                            const isActive = activeFilter === chip;
                            return (
                                <button
                                    key={chip}
                                    onClick={() => setActiveFilter(chip)}
                                    className={cn(
                                        "relative whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-medium transition-colors duration-300 outline-none",
                                        isActive
                                            ? "text-white"
                                            : "text-slate-400 hover:text-slate-200"
                                    )}
                                >
                                    {/* Active Background - Slides between buttons */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeFilter"
                                            className="absolute inset-0 bg-indigo-500/15 border border-indigo-400/40 rounded-full"
                                            style={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.15)' }}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}

                                    {/* Glass Base for Inactive */}
                                    {!isActive && (
                                        <div className="absolute inset-0 border border-white/5 rounded-full bg-white/[0.03]" />
                                    )}

                                    <span className="relative z-10">{chip}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-16">
                    {/* PopLayout prevents layout jumping when items are removed */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {filteredProjects.map((project, idx) => (
                                <motion.div
                                    key={project.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProjectCard
                                        project={project}
                                        delay={idx * 0.02}
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
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                                    <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <p className="text-slate-500 font-display text-lg">No projects match this category.</p>
                                <button
                                    onClick={() => setActiveFilter("All")}
                                    className="mt-4 text-indigo-400 text-sm hover:underline"
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