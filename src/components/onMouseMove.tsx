"use client";

import { useRef } from "react";

export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current?.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current?.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group/spotlight relative overflow-hidden ${className ?? ""}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover/spotlight:opacity-20"
        style={{
          background:
            "radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), var(--foreground), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}
