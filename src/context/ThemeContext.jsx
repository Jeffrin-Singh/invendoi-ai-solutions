import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Force dark theme as the only option
    const [theme] = useState("dark");

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.add("dark");
        root.style.colorScheme = "dark";
        localStorage.setItem("theme", "dark");
    }, []);

    const toggleTheme = () => {
        // No-op to prevent theme switching
        console.log("Theme is locked to premium dark mode.");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
