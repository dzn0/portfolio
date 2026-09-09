"use client"

import { useEffect, useRef, useState } from "react";

export function RevealOnScreen({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setVisible(true);
            }
        });
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return <div
        ref={ref}
        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
        {children}
    </div>

}