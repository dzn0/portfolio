import { ChevronLeft, Database, Sheet, Palette, Sparkles, Code2 } from "lucide-react";
import Link from "next/link";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaHtml5, FaCcStripe, FaGitAlt, FaGithub, FaFigma, FaNpm } from "react-icons/fa";
import { FaCss, FaNodeJs } from "react-icons/fa6";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { BsClaude } from "react-icons/bs";
import { SiMercadopago, SiPrisma, SiCoreldraw, SiGooglegemini } from "react-icons/si";
import { TbBrandVercelFilled } from "react-icons/tb";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

type Tech = { icon: React.ReactNode; label: string; border: string; bg: string };

function Badge({ item }: { item: Tech }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${item.border} ${item.bg} text-sm whitespace-nowrap cursor-default transition transform duration-200 hover:scale-110`}>
      {item.icon}
      {item.label}
    </span>
  );
}

function Category({ title, items }: { title: string; items: Tech[] }) {
  return (
    <div className="mt-8">
      <h2 className="font-semibold text-[15px]">{title}</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item, i) => (
          <Badge key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

const frontend: Tech[] = [
  { icon: <RiNextjsFill className="text-foreground" size={14} />, label: "Next.js", border: "border-foreground/30", bg: "bg-foreground/10" },
  { icon: <FaReact className="text-[#61dafb]" size={14} />, label: "React", border: "border-[#61dafb]/30", bg: "bg-[#61dafb]/10" },
  { icon: <BiLogoTypescript className="text-[#3178c6]" size={14} />, label: "TypeScript", border: "border-[#3178c6]/30", bg: "bg-[#3178c6]/10" },
  { icon: <IoLogoJavascript className="text-[#f7df1e]" size={14} />, label: "JavaScript", border: "border-[#f7df1e]/30", bg: "bg-[#f7df1e]/10" },
  { icon: <RiTailwindCssFill className="text-[#38bdf8]" size={14} />, label: "Tailwind CSS", border: "border-[#38bdf8]/30", bg: "bg-[#38bdf8]/10" },
  { icon: <FaHtml5 className="text-[#e44d24]" size={14} />, label: "HTML5", border: "border-[#e44d24]/30", bg: "bg-[#e44d24]/10" },
  { icon: <FaCss className="text-[#663399]" size={14} />, label: "CSS", border: "border-[#663399]/30", bg: "bg-[#663399]/10" },
];

const design: Tech[] = [
  { icon: <FaFigma className="text-[#a259ff]" size={14} />, label: "Figma", border: "border-[#a259ff]/30", bg: "bg-[#a259ff]/10" },
  { icon: <DiPhotoshop className="text-[#31a8ff]" size={14} />, label: "Adobe Photoshop", border: "border-[#31a8ff]/30", bg: "bg-[#31a8ff]/10" },
  { icon: <DiIllustrator className="text-[#ff9a00]" size={14} />, label: "Adobe Illustrator", border: "border-[#ff9a00]/30", bg: "bg-[#ff9a00]/10" },
  { icon: <SiCoreldraw className="text-[#4a9c2d]" size={14} />, label: "CorelDRAW", border: "border-[#4a9c2d]/30", bg: "bg-[#4a9c2d]/10" },
  { icon: <Palette className="text-[#00c4cc]" size={14} />, label: "Canva", border: "border-[#00c4cc]/30", bg: "bg-[#00c4cc]/10" },
];

const backend: Tech[] = [
  { icon: <FaNodeJs className="text-[#339933]" size={14} />, label: "Node.js", border: "border-[#339933]/30", bg: "bg-[#339933]/10" },
  { icon: <BiLogoPostgresql className="text-[#336791]" size={14} />, label: "PostgreSQL", border: "border-[#336791]/30", bg: "bg-[#336791]/10" },
  { icon: <SiPrisma className="text-foreground" size={14} />, label: "Prisma", border: "border-foreground/30", bg: "bg-foreground/10" },
  { icon: <Database className="text-[#00758f]" size={14} />, label: "SQL", border: "border-[#00758f]/30", bg: "bg-[#00758f]/10" },
  { icon: <SiMercadopago className="text-[#00bbfe]" size={14} />, label: "Mercado Pago", border: "border-[#00bbfe]/30", bg: "bg-[#00bbfe]/10" },
  { icon: <FaCcStripe className="text-[#6058f7]" size={14} />, label: "Stripe", border: "border-[#6058f7]/30", bg: "bg-[#6058f7]/10" },
];

const dataAnalysis: Tech[] = [
  { icon: <Database className="text-[#00758f]" size={14} />, label: "SQL", border: "border-[#00758f]/30", bg: "bg-[#00758f]/10" },
  { icon: <Sheet className="text-[#1d6f42]" size={14} />, label: "Excel / Planilhas", border: "border-[#1d6f42]/30", bg: "bg-[#1d6f42]/10" },
];

const tools: Tech[] = [
  { icon: <FaGitAlt className="text-[#f05032]" size={14} />, label: "Git", border: "border-[#f05032]/30", bg: "bg-[#f05032]/10" },
  { icon: <FaGithub className="text-foreground" size={14} />, label: "GitHub", border: "border-foreground/30", bg: "bg-foreground/10" },
  { icon: <TbBrandVercelFilled className="text-foreground" size={14} />, label: "Vercel", border: "border-foreground/30", bg: "bg-foreground/10" },
  { icon: <VscVscode className="text-[#007acc]" size={14} />, label: "VS Code", border: "border-[#007acc]/30", bg: "bg-[#007acc]/10" },
  { icon: <Code2 className="text-[#5c2d91]" size={14} />, label: "Visual Studio", border: "border-[#5c2d91]/30", bg: "bg-[#5c2d91]/10" },
  { icon: <FaNpm className="text-[#cb3837]" size={14} />, label: "npm", border: "border-[#cb3837]/30", bg: "bg-[#cb3837]/10" },
];

const ai: Tech[] = [
  { icon: <BsClaude className="text-[#d47255]" size={14} />, label: "Claude API (Anthropic)", border: "border-[#d47255]/30", bg: "bg-[#d47255]/10" },
  { icon: <SiGooglegemini className="text-[#8ab4f8]" size={14} />, label: "Gemini API", border: "border-[#8ab4f8]/30", bg: "bg-[#8ab4f8]/10" },
  { icon: <Sparkles className="text-[#eab308]" size={14} />, label: "Prompt Engineering", border: "border-[#eab308]/30", bg: "bg-[#eab308]/10" },
];

export default function Technologies() {
  return (
    // Master Div
    <div className="flex flex-col sm:max-w-3xl mx-auto">
      <div className="mx-4">
        <Link href="/" className="group flex mt-10 text-muted text-sm items-center gap-1 hover:text-hover-muted">
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition transform duration-200" />
          <span>Voltar</span>
        </Link>

        <div className="font-thin mt-9 text-3xl flex flex-col">
          <span>Tecnologias</span>
          <span className="mt-1 text-muted text-[18px]">Lista completa de ferramentas e tecnologias que uso.</span>
        </div>

        <Category title="Frontend" items={frontend} />
        <hr className="mt-8 text-project border-dashed" />

        <Category title="Design & Prototipagem" items={design} />
        <hr className="mt-8 text-project border-dashed" />

        <Category title="Backend & Database" items={backend} />
        <hr className="mt-8 text-project border-dashed" />

        <Category title="Análise de Dados" items={dataAnalysis} />
        <hr className="mt-8 text-project border-dashed" />

        <Category title="Ferramentas & Controle de Versão" items={tools} />
        <hr className="mt-8 text-project border-dashed" />

        <Category title="IA & Sistemas" items={ai} />
      </div>
      <div className="" />
    </div>
  );
}
