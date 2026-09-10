"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export function GithubActivity({ username }: { username: string }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
    setMounted(true);

    const observer = new MutationObserver(() => {
      const next = root.getAttribute("data-theme");
      setTheme(next === "light" ? "light" : "dark");
    });
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return <div className="rounded-xl border border-dashed border-project p-4 h-[140px]" />;
  }

  return (
    <div className="rounded-xl border border-dashed border-project p-4 flex justify-center overflow-x-auto themed-scrollbar">
      <GitHubCalendar
        username={username}
        year={new Date().getFullYear()}
        colorScheme={theme}
        theme={{
          light: ["#f3f4f6", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          dark: ["#1e2939", "#1a5c3a", "#22a35a", "#39d97e", "#5fffab"],
        }}
        fontSize={12}
        blockSize={9}
        blockMargin={4}
        blockRadius={999}
        labels={{
          totalCount: "{{count}} contribuições no último ano",
        }}
      />
    </div>
  );
}
