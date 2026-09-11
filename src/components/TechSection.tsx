"use client";

import { useState } from "react";
import Link from "next/link";
import { Grid2x2, Layers } from "lucide-react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { RevealOnScreen } from "./revealOnScreen";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaHtml5, FaCcStripe, FaGitAlt, FaGithub, FaFigma, FaNpm } from "react-icons/fa";
import { FaCss, FaNodeJs } from "react-icons/fa6";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { BsClaude } from "react-icons/bs";
import { SiMercadopago, SiPrisma, SiCoreldraw } from "react-icons/si";
import { TbBrandVercelFilled } from "react-icons/tb";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const frontend = [
  { icon: <RiNextjsFill className="text-foreground" size={14} />, label: "Next.js", border: "border-foreground/30", bg: "bg-foreground/10" },
  { icon: <FaReact className="text-[#61dafb]" size={14} />, label: "React", border: "border-[#61dafb]/30", bg: "bg-[#61dafb]/10" },
  { icon: <BiLogoTypescript className="text-[#3178c6]" size={14} />, label: "TypeScript", border: "border-[#3178c6]/30", bg: "bg-[#3178c6]/10" },
  { icon: <IoLogoJavascript className="text-[#f7df1e]" size={14} />, label: "JavaScript", border: "border-[#f7df1e]/30", bg: "bg-[#f7df1e]/10" },
  { icon: <RiTailwindCssFill className="text-[#38bdf8]" size={14} />, label: "Tailwind CSS", border: "border-[#38bdf8]/30", bg: "bg-[#38bdf8]/10" },
  { icon: <FaHtml5 className="text-[#e44d24]" size={14} />, label: "HTML5", border: "border-[#e44d24]/30", bg: "bg-[#e44d24]/10" },
  { icon: <FaCss className="text-[#663399]" size={14} />, label: "CSS", border: "border-[#663399]/30", bg: "bg-[#663399]/10" },
];

const backend = [
  { icon: <FaNodeJs className="text-[#339933]" size={14} />, label: "Node.js", border: "border-[#339933]/30", bg: "bg-[#339933]/10" },
  { icon: <BiLogoPostgresql className="text-[#336791]" size={14} />, label: "PostgreSQL", border: "border-[#336791]/30", bg: "bg-[#336791]/10" },
  { icon: <SiPrisma className="text-foreground" size={14} />, label: "Prisma", border: "border-foreground/30", bg: "bg-foreground/10" },
  { icon: <BsClaude className="text-[#d47255]" size={14} />, label: "Claude API", border: "border-[#d47255]/30", bg: "bg-[#d47255]/10" },
  { icon: <SiMercadopago className="text-[#00bbfe]" size={14} />, label: "Mercado Pago", border: "border-[#00bbfe]/30", bg: "bg-[#00bbfe]/10" },
  { icon: <FaCcStripe className="text-[#6058f7]" size={14} />, label: "Stripe", border: "border-[#6058f7]/30", bg: "bg-[#6058f7]/10" },
  { icon: <TbBrandVercelFilled className="text-foreground" size={14} />, label: "Vercel", border: "border-foreground/30", bg: "bg-foreground/10" },
];

const tools = [
  { icon: <FaGitAlt className="text-[#f05032]" size={14} />, label: "Git", border: "border-[#f05032]/30", bg: "bg-[#f05032]/10" },
  { icon: <FaGithub className="text-foreground" size={14} />, label: "GitHub", border: "border-foreground/30", bg: "bg-foreground/10" },
  { icon: <VscVscode className="text-[#007acc]" size={14} />, label: "VS Code", border: "border-[#007acc]/30", bg: "bg-[#007acc]/10" },
  { icon: <FaFigma className="text-[#a259ff]" size={14} />, label: "Figma", border: "border-[#a259ff]/30", bg: "bg-[#a259ff]/10" },
  { icon: <DiPhotoshop className="text-[#31a8ff]" size={14} />, label: "Photoshop", border: "border-[#31a8ff]/30", bg: "bg-[#31a8ff]/10" },
  { icon: <DiIllustrator className="text-[#ff9a00]" size={14} />, label: "Illustrator", border: "border-[#ff9a00]/30", bg: "bg-[#ff9a00]/10" },
  { icon: <SiCoreldraw className="text-[#4a9c2d]" size={14} />, label: "CorelDRAW", border: "border-[#4a9c2d]/30", bg: "bg-[#4a9c2d]/10" },
  { icon: <FaNpm className="text-[#cb3837]" size={14} />, label: "npm", border: "border-[#cb3837]/30", bg: "bg-[#cb3837]/10" },
];

function Badge({ item }: { item: (typeof frontend)[number] }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${item.border} ${item.bg} text-sm whitespace-nowrap cursor-default transition transform duration-200 hover:scale-110`}>
      {item.icon}
      {item.label}
    </span>
  );
}

function MarqueeRow({ items, reverse }: { items: typeof frontend; reverse?: boolean }) {
  return (
    <div className="mt-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex gap-3 w-max animate-marquee"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[...items, ...items].map((item, i) => (
          <Badge key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

function GridRow({ label, items }: { label: string; items: typeof frontend }) {
  return (
    <div className="mt-4">
      <span className="text-xs font-semibold tracking-[2px] text-icons/80">{label.toUpperCase()}</span>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item, i) => (
          <Badge key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export function TechSection() {
  const [view, setView] = useState<"marquee" | "grid">("marquee");

  function toggleView() {
    setView(view === "marquee" ? "grid" : "marquee");
  }

  return (
    <>
      <RevealOnScreen>
        <div className="ml-4 mr-4 font-thin mt-15 text-3xl flex items-center">
          <span>Tecnologias</span>
          <button
            onClick={toggleView}
            className="ml-auto mr-3 text-[#99a0af] hover:text-hover-muted transition-colors duration-200 cursor-pointer"
          >
            {view === "marquee" ? <Grid2x2 size={16} /> : <Layers size={16} />}
          </button>
          <Link href="/technologies" className="flex text-sm font-normal items-center text-[#99a0af] group hover:text-hover-muted">
            Ver tudo
            <ChevronRightIcon strokeWidth={1.5} className="h-4 ml-1 w-4 transition transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </RevealOnScreen>

      {view === "marquee" ? (
        <>
          <RevealOnScreen>
            <MarqueeRow items={frontend} />
          </RevealOnScreen>
          <RevealOnScreen>
            <MarqueeRow items={backend} reverse />
          </RevealOnScreen>
          <RevealOnScreen>
            <MarqueeRow items={tools} />
          </RevealOnScreen>
        </>
      ) : (
        <RevealOnScreen>
          <div className="ml-4 mr-4">
            <GridRow label="Frontend" items={frontend} />
            <GridRow label="Backend" items={backend} />
            <GridRow label="Produtividade & Dev Tools" items={tools} />
          </div>
        </RevealOnScreen>
      )}
    </>
  );
}
