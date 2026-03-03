import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useCallback } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function PageShell() {
    const location = useLocation();
    const reduce = useReducedMotion();

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);

    const forceTop = useCallback(() => {
        const top = () => {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };
        top();
        requestAnimationFrame(top);
        setTimeout(top, 0);
        setTimeout(top, 80);
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar />

            <AnimatePresence mode="wait" onExitComplete={forceTop}>
                <motion.main
                    key={location.key}   // ✅ IMPORTANT
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={reduce ? {} : { opacity: 1, y: 0 }}
                    exit={reduce ? {} : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="min-h-[70vh]"
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>

            <Footer />
        </div>
    );
}