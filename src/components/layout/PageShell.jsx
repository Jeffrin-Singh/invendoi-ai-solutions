import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function PageShell() {
    const location = useLocation();
    const reduce = useReducedMotion();

    return (
        <div className="min-h-screen">
            <Navbar />

            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
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
