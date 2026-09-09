import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Mail, ArrowRight } from "lucide-react"
import { FaGithub, FaLinkedin, FaHtml5, FaCcStripe } from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { ChevronRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { FaNodeJs } from "react-icons/fa6";
import { Roboto_Mono } from "next/font/google";
import { IoLogoJavascript } from "react-icons/io5";
import { BsClaude } from "react-icons/bs";
import { SiMercadopago } from "react-icons/si";
import { TbBrandVercelFilled } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RevealOnScreen } from "../components/revealOnScreen"


export default function Home() {
  return (
    // Master Div
    <div className="flex flex-col sm:max-w-3xl mx-auto">
      {/* Photo Div */}
      <div className="flex p-4 mt-2 items-center gap-5 sm:ml-2">
        <Image className="rounded-full border-2 border-pfp-border sm:mt-7 w-[130px] h-[130px] sm:w-[170px] sm:h-[170px]"
          src="/cropped_circle_image.png"
          alt="Profile Picture"
          width={170}
          height={170}
        />
        {/* Text Div (Name + Icons) */}
        <div className="flex-col">
          <div className="flex items-center gap-2">
            {/* Name */}
            <h1 className="font-semibold text-2xl sm:text-3xl">André Pieri</h1>
            <BadgeCheck fill="#1D9BF0" size={30} className="stroke-[var(--background)]" />
          </div>
          {/* Icons */}
          <div className="flex text-xl mt-2 gap-2 items-center text-icons">
            <a href="https://github.com/dzn0" target="_blank" rel="noopener noreferrer">
              <FaGithub size={22} className="transition transform duration-200 hover:scale-110 hover:text-foreground" />
            </a>
            <a href="https://www.linkedin.com/in/andr%C3%A9-pieri-914563358/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={22} className="transition transform duration-200 hover:scale-110 hover:text-[#1D9BF0]" />
            </a>
            <a href="mailto:andrepereirapieri@gmail.com">
              <MdEmail size={25} className="transition transform duration-200 hover:scale-110 hover:text-[#bd4a42]" />
            </a>
          </div>
        </div>
      </div>
      {/* Personal description */}
      {/* Title */}
      <div className="ml-4 mr-5 mt flex-wrap text-2xl sm:text-3xl sm:ml-7 flex-col">
        <span className="font-geist text-2xl sm:text-3xl">Full-Stack Web Developer</span>
        <span className="text-2xl sm:text-3xl text-icons/75 font-thin font-geist"> — </span>
        <span className="text-2xl sm:text-3xl text-icons font-light">
          Next.js &<br className="hidden sm:hidden" /> Node.js
        </span>
      </div>
      {/* Description */}
      <div className="mt-4 mr-4 sm:mt-3 sm:ml-7 ml-4 text-icons font-light leading-relaxed sm:leading-loose">
        Sou um desenvolvedor web full-stack, construindo sites e sistemas backend com{" "}
        <span className="text-foreground inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-foreground/30 bg-foreground/10 text-sm align-middle">
          <RiNextjsFill className="text-foreground" size={14} />
          Next.js
        </span>{" "}
        <span className="text-foreground inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#339933]/30 bg-[#339933]/10 text-sm align-middle">
          <FaNodeJs className="text-[#339933]" size={14} />
          Node.js
        </span>{" "}
        e{" "}
        <span className="text-foreground inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#336791]/30 bg-[#336791]/10 text-sm align-middle">
          <BiLogoPostgresql className="text-[#336791]" size={14} />
          PostgreSQL
        </span>
        <span> com experiência em pagamento (Stripe/Pix). Construí o analisacv.com.br, uma plataforma de análise de currículo com IA em produção com pagamento real, e atualmente estou evoluindo o devtracker, um sistema de gestão de tarefas full-stack com autenticação e persistência em PostgreSQL.</span>
      </div>
      {/* View Resume */}
      <div className="mt-4 sm:mt-9 p-1 ml-3 sm:ml-6 w-fit">
        <a href="/André-Pieri-Currículo.pdf" target="_blank" rel="noopener noreferrer" className="px-7 flex items-center p-3 bg-foreground rounded-lg text text-background font-semibold transition transform duration-200 hover:scale-105 group">Ver Currículo <ChevronRightIcon strokeWidth={2.5} className="h-4 ml-2 w-4 transition transform duration-200 group-hover:translate-x-1" /></a>
      </div>
      {/* Cards div */}
      <div className="ml-4 mr-4 mt-20">

        {/* Featured build */}
        <RevealOnScreen>
          <div className="rounded-xl border border-project flex-col sm:flex flex-row gap-3">
            <div className="sm:w-2/5">
              <video
                src="/analisa-cv-16-9.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-48 sm:h-full object-cover rounded-t-xl sm:rounded-r-none sm:rounded-l-xl sm:border-r sm:border-project"
              />
            </div>
            <div className="sm:w-3/5">
              <div className="p-5">
                <div className="flex gap-2 tracking-[3px] font-semibold text-icons scale-y-95">
                  <h2 className="font-[family-name:var(--font-roboto-mono)] text-xs">EM</h2>
                  <h2 className="font-[family-name:var(--font-roboto-mono)] text-xs">DESTAQUE</h2>
                </div>
                <div className="font-thin mt-3 flex-col">
                  <span className="text-xl">AnalisaCV: um SaaS de análise de currículo.</span>
                </div>
                <div className="text-muted mt-3 text-sm">
                  <span>Extrai currículos em PDF e gera feedback com IA, com checkout Pix integrado.</span>
                </div>
                <div className="mt-4 flex flex-wrap text-[11px] text-icons font-pfp-border gap-2">
                  <div className="border border-project rounded-full p-2">JavaScript</div><div className="border border-project rounded-full p-2">Claude API (Anthropic)</div><div className="border border-project rounded-full p-2">Stripe</div><div className="border border-project rounded-full p-2">Vercel Edge Functions</div>
                </div>
                {/* Buttons */}
                <div className="mt-5 flex max-w-full gap-3 text-xs">
                  <a href="https://github.com/dzn0/analisa-cv" target="_blank" rel="noopener noreferrer" className="group transition transform duration-200 hover:scale-110 px-[10px] py-[8px] bg-foreground text-background font-semibold rounded-lg flex gap-3">Código
                    <ArrowUpRightIcon className="h-4 w-4 group-hover:translate-x-1 transition transform duration-200" />
                  </a>
                  <a href="https://www.analisacv.com.br/" target="_blank" rel="noopener noreferrer" className="group px-[10px] py-[8px] bg-foreground text-background font-semibold rounded-lg flex gap-3 transition transform duration-200 hover:scale-110">Produto
                    <ArrowUpRightIcon className="h-4 w-4 transition transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScreen>

        {/* Expecience */}
        <RevealOnScreen>
          <div>
            <div className="font-thin mt-15 text-3xl flex">
              <span>Experiência</span>
              <div className="ml-auto flex text-sm font-normal items-center text-[#99a0af] group hover:text-hover-muted">
                <Link href="/">Ver Detalhes</Link>
                <ChevronRightIcon strokeWidth={1.5} className="h-4 ml-1 w-4 transition transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
            {/* Titles and Descriptions */}
            <div className="mt-6">
              <div className="flex flex-col sm:flex-row">
                <div><span className="text-[#6a7282] font-medium text-xs">Abr 2024 – Jul 2025</span></div>
                <div className="sm:ml-15 flex flex-col">
                  <span className="text-lg font-medium">Estagiário de Projetos</span>
                  <span className="text-icons font-medium text-sm">Oshiro Arquitetura</span>
                  <span className="text-sm text-icons/90">Mato Grosso do Sul, Brasil</span>
                </div>
              </div>

            </div>
          </div>
        </RevealOnScreen>
        {/* Projects First Grid*/}
        <RevealOnScreen>
          <div className="font-thin mt-15 text-3xl flex items-center">
            <span>Projetos</span>
          </div>
        </RevealOnScreen>
        <div className="sm:flex gap-6">
          <RevealOnScreen>
            {/* AnalisaCV */}
            <div className="border border-project p-3 flex flex-col rounded-xl mt-5 sm:flex-1">
              <div className="flex justify-center border border-project rounded-xl bg-[#e0e0e0]">
                <div>
                  <Image className="p-1 rounded-xl"
                    src="/analisa-cv-screenshot.png"
                    alt="Profile Picture"
                    width={270}
                    height={270}
                  />
                </div>
              </div>
              <span className="text-lg font-medium mt-4">AnalisaCV</span>
              <span className="text-icons font-medium text-sm">Criador & Desenvolvedor Único</span>
              <span className="text-sm text-icons/90">Extrai currículos em PDF e gera feedback com IA, com checkout Pix integrado.</span>
              <div className="mt-4 flex gap-2 items-center">
                <span><FaHtml5 className="text-[#e44d24] hover:text-[#ff7a52] transition transform duration-200 hover:-translate-y-1" size={22} /></span>
                <span><FaCss className="text-[#663399] hover:text-[#8f5ac9] transition transform duration-200 hover:-translate-y-1" size={22} /></span>
                <span><IoLogoJavascript className="text-[#f7df1e] hover:text-[#fbe969] transition transform duration-200 hover:-translate-y-1" size={22} /></span>
                <span><BsClaude className="text-[#d47255] hover:text-[#e39a83] transition transform duration-200 hover:-translate-y-1" size={22} /></span>
                <span><SiMercadopago className="text-[#00bbfe] hover:text-[#5cd6ff] transition transform duration-200 hover:-translate-y-1" size={22} /></span>
                <span><FaCcStripe className="text-[#6058f7] hover:text-[#9089fb] transition transform duration-200 hover:-translate-y-1" size={22} /></span>
              </div>
              <hr className="mt-4 text-project border-dashed" />
              <div className="flex text-muted items-center gap-2 mt-3 mb-1 ml-auto font-[family-name:var(--font-roboto-mono)] text-[11px] tracking-[2px]">
                <a href="https://github.com/dzn0/analisa-cv" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:text-hover-muted">CÓDIGO<ArrowUpRightIcon className="h-3 w-3 group-hover:translate-x-1 transition transform duration-200" /></a>
                <a href="https://www.analisacv.com.br/" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:text-hover-muted">PRODUTO<ArrowUpRightIcon className="h-3 w-3 group-hover:translate-x-1 transition transform duration-200" /></a>
              </div>
            </div>
          </RevealOnScreen>
          {/* Devtracker */}
          <RevealOnScreen>
            <div className="border border-project p-3 flex flex-col rounded-xl mt-5 sm:flex-1">
              <div className="flex justify-center border border-project rounded-xl bg-[#e0e0e0]">
                <div>
                  <Image className="p-1 rounded-xl"
                    src="/devtracker.png"
                    alt="Profile Picture"
                    width={230}
                    height={230}
                  />
                </div>
              </div>
              <div className="flex mt-4 gap-1 items-center ">
                <span className="text-lg font-medium">Devtracker</span>
                <span className="italic text-icons/90">— Em desenvolvimento</span>
              </div>
              <span className="text-icons font-medium text-sm">Criador & Desenvolvedor Único</span>
              <span className="text-sm text-icons/90">Registra sessões de estudo, com estatísticas agregadas e heatmap estilo GitHub.</span>
              <div className="mt-4 flex gap-2 items-center">
                <BiLogoTypescript className="text-[#3178c6] hover:text-[#6ba6e8] transition transform duration-200 hover:-translate-y-1" size={24} />
                <RiNextjsFill className="text-foreground transition transform duration-200 hover:-translate-y-1" size={22} />
                <RiTailwindCssFill className="text-[#38bdf8] hover:text-[#7dd3fc] transition transform duration-200 hover:-translate-y-1" size={22} />
                <FaNodeJs className="text-[#339933] hover:text-[#4dcc4d] transition transform duration-200 hover:-translate-y-1" size={22} />
              </div>
              <hr className="mt-4 text-project border-dashed" />
              <div className="flex text-muted hover:text-hover-muted items-center gap-2 mt-3 mb-1 ml-auto font-[family-name:var(--font-roboto-mono)] text-[11px] tracking-[2px]">
                <a href="https://github.com/dzn0/devtracker" target="_blank" rel="noopener noreferrer" className="flex items-center group">CÓDIGO<ArrowUpRightIcon className="h-3 w-3 group-hover:translate-x-1 transition transform duration-200" /></a>
                {/* <a href="https://www.analisacv.com.br/" target="_blank" rel="noopener noreferrer" className="flex items-center group">PRODUTO<ArrowUpRightIcon className="h-3 w-3 group-hover:translate-x-1 transition transform duration-200" /></a> */}
              </div>
            </div>
          </RevealOnScreen>
        </div>
      </div>
    </div>
  );
}

