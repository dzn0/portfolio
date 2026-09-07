"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";

        const applyTheme = () => {
            document.documentElement.setAttribute("data-theme", next);
            setTheme(next);
        };

        if (!document.startViewTransition) {
            applyTheme();
            return;
        }

        document.startViewTransition(applyTheme);
    };
    return theme === "light" ? (
        <SunIcon onClick={toggleTheme} className="ml-3 mr-3 h-4 w-4 text-foreground text-muted hover:text-semi-muted transition duration-200 active:scale-70 cursor-pointer" />
        
    ) : (
        <MoonIcon onClick={toggleTheme} className="ml-3 mr-3 h-4 w-4 text-foreground text-muted hover:text-semi-muted transition duration-200 active:scale-70 cursor-pointer" />
    )
}