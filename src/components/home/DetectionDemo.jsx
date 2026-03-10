import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Activity, Cpu, MapPin, Radar } from "lucide-react";

const u = (id) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

const SCENES = [
    {
        key: "municipal",
        title: "Municipal Enforcement (CCTV)",
        subtitle: "Waste dumping / violations • Evidence capture",
        image: u("photo-1503596476-1c12a8ba09a9"),
        meta: { feed: "RTSP • Ward Cluster", latency: "< 350ms", mode: "Edge + On-prem" },
        boxes: [
            { x: 18, y: 46, w: 28, h: 34, label: "Violation", conf: 0.94, color: "from-indigo-500 to-cyan-400" },
            { x: 56, y: 52, w: 18, h: 20, label: "Object", conf: 0.89, color: "from-fuchsia-500 to-indigo-500" },
        ],
    },
    {
        key: "wildlife",
        title: "Wildlife Early Warning (Edge AI)",
        subtitle: "Forest corridor • Low bandwidth alerts",
        image: u("photo-1549366021-9f761d450615"),
        meta: { feed: "Field Camera", latency: "< 500ms", mode: "Edge (Jetson-class)" },
        boxes: [
            { x: 22, y: 45, w: 42, h: 28, label: "Elephant", conf: 0.92, color: "from-emerald-400 to-cyan-400" },
        ],
    },
    {
        key: "uav",
        title: "UAV Tracking (Telemetry-Fused)",
        subtitle: "Object tracking • Mission timeline",
        image: u("photo-1473968512647-3e447244af8f"),
        meta: { feed: "Drone Stream", latency: "< 450ms", mode: "Hybrid (Edge + Server)" },
        boxes: [
            { x: 54, y: 48, w: 22, h: 26, label: "Target", conf: 0.90, color: "from-cyan-400 to-indigo-500" },
        ],
        telemetry: { gps: "24.7131, 46.6753", alt: "118m", speed: "22 km/h" },
    },
];

function clamp01(n) {
    return Math.max(0, Math.min(1, n));
}

export default function DetectionDemo({ className }) {
    const reduce = useReducedMotion();
    const [idx, setIdx] = useState(0);
    const hovered = useRef(false);

    const scene = useMemo(() => SCENES[idx % SCENES.length], [idx]);

    useEffect(() => {
        if (reduce) return;
        const t = setInterval(() => {
            if (!hovered.current) setIdx((v) => v + 1);
        }, 5200);
        return () => clearInterval(t);
    }, [reduce]);

    return (
        <div
            className={`relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] ${className ?? ""}`}
            onMouseEnter={() => (hovered.current = true)}
            onMouseLeave={() => (hovered.current = false)}
        >
            {/* top status bar */}
            <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur px-4 py-3">
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-200/80">
                        Live analytics
                    </div>
                </div>

                <div className="hidden sm:flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-200/60">
                    <span className="inline-flex items-center gap-1">
                        <Radar className="h-3.5 w-3.5" /> {scene.meta.feed}
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <Cpu className="h-3.5 w-3.5" /> {scene.meta.mode}
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <Activity className="h-3.5 w-3.5" /> {scene.meta.latency}
                    </span>
                </div>
            </div>

            <div className="relative aspect-[16/11] sm:aspect-[16/10]">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={scene.key}
                        src={scene.image}
                        alt={scene.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        initial={{ opacity: 0.2, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0.2, scale: 1.02 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        loading="lazy"
                    />
                </AnimatePresence>

                {/* dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/90 via-[#0b1220]/15 to-transparent" />

                {/* subtle scanning line */}
                {!reduce && (
                    <motion.div
                        className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan-400/10 to-transparent"
                        animate={{ y: ["-15%", "110%"] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                        style={{ mixBlendMode: "screen" }}
                    />
                )}

                {/* Boxes */}
                <AnimatePresence mode="sync">
                    {scene.boxes.map((b, i) => (
                        <motion.div
                            key={`${scene.key}-${i}`}
                            className="absolute rounded-xl border border-white/60"
                            style={{
                                left: `${b.x}%`,
                                top: `${b.y}%`,
                                width: `${b.w}%`,
                                height: `${b.h}%`,
                                borderColor: "rgba(255,255,255,0.65)",
                            }}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <div className="absolute -top-4 left-0 flex items-center gap-2">
                                <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${b.color}`} />
                                <div className="rounded-full border border-white/10 bg-slate-950/70 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-200">
                                    {b.label} <span className="text-slate-200/60">{Math.round(clamp01(b.conf) * 100)}%</span>
                                </div>
                            </div>

                            {!reduce && (
                                <motion.div
                                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${b.color}`}
                                    style={{ opacity: 0.12 }}
                                    animate={{ opacity: [0.08, 0.16, 0.08] }}
                                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                                />
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Telemetry pill for UAV scene */}
                {scene.telemetry && (
                    <div className="absolute left-4 bottom-4 right-4 sm:right-auto sm:max-w-[420px] z-20 rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur px-4 py-3">
                        <div className="flex items-center justify-between gap-4">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-200/70">
                                Telemetry
                            </div>
                            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-200/60">
                                <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{scene.telemetry.gps}</span>
                                <span>ALT {scene.telemetry.alt}</span>
                                <span>SPD {scene.telemetry.speed}</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Scene label */}
                <div className="absolute left-4 bottom-4 z-20 sm:left-4 sm:bottom-16">
                    <div className="text-xs font-bold uppercase tracking-widest text-indigo-300/80">
                        {scene.title}
                    </div>
                    <div className="mt-1 text-sm text-slate-200/80">{scene.subtitle}</div>
                </div>
            </div>
        </div>
    );
}