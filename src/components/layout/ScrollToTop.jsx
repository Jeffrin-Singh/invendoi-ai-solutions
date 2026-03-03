import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const location = useLocation();

    // set once
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);

    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        // Run multiple times to win against transition + restore timing
        scrollToTop();
        queueMicrotask(scrollToTop);
        requestAnimationFrame(scrollToTop);
        setTimeout(scrollToTop, 0);
        setTimeout(scrollToTop, 80);
    }, [location.key]); // ✅ use key, not pathname

    return null;
}