"use client";

import { useLayoutEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useLayoutEffect(() => {
        const current = document.documentElement.getAttribute("data-theme");
        if (current === "light" || current === "dark") {
            setTheme(current);
        }
    }, []);

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
        <button onClick={toggleTheme} className="ml-3 mr-3 cursor-pointer">
            <SunIcon className="h-5 w-5 sm:h-4 w-4  text-muted hover:text-hover-muted transition duration-200 active:scale-70" />
        </button>
    ) : (
        <button onClick={toggleTheme} className="ml-3 mr-3 cursor-pointer">
            <MoonIcon className="h-5 w-5 sm:h-4 w-4 text-muted hover:text-hover-muted transition duration-200 active:scale-70" />
        </button>
    )
}