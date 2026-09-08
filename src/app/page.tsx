import Image from "next/image";
import { BadgeCheck, Mail, ArrowRight } from "lucide-react"
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { ChevronRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { FaNodeJs } from "react-icons/fa6";
import { Roboto_Mono } from "next/font/google";




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
      <div className="ml-4 mt flex-wrap text-2xl sm:text-3xl sm:ml-7 flex-col">
        <span className="font-geist">Full-Stack Web Developer</span>
        <span className="text-2xl sm:text-3xl text-icons/75 font-thin font-geist"> — </span>
        <span className="text-2xl sm:text-3xl text-icons font-light">
          Next.js &<br className="sm:hidden" /> Node.js
        </span>
      </div>
      {/* Description */}
      <div className="mt-4 mr-2 sm:mt-3 sm:ml-7 ml-4 text-icons font-light leading-relaxed sm:leading-loose">
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
        <span> com experiência de pagamento (Stripe/Pix) em produção. Construí o analisacv.com.br, uma plataforma de análise de currículo com IA em produção com pagamento real, e atualmente estou evoluindo o devtracker, um sistema de gestão de tarefas full-stack com autenticação e persistência em PostgreSQL.</span>
      </div>
      {/* View Resume */}
      <div className="mt-4 sm:mt-9 p-1 ml-3 sm:ml-6 w-fit">
        <a href="/André-Pieri-Currículo.pdf" target="_blank" rel="noopener noreferrer" className="px-7 flex items-center p-3 bg-foreground rounded-lg text text-background font-semibold transition transform duration-200 hover:scale-105 group">Ver Currículo <ChevronRightIcon strokeWidth={2.5} className="h-4 ml-2 w-4 transition transform duration-200 group-hover:translate-x-1" /></a>
      </div>
      {/* Projects div */}
      <div className="ml-6 mr-4 mt-20">

        {/* Featured build */}
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
              <div className="flex gap-2 tracking-[3px] font-semibold text-muted scale-y-95">
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
                  <ArrowUpRightIcon className="h-5 w-5 group-hover:translate-x-1 transition transform duration-200"  />
                </a>
                <a href="https://www.analisacv.com.br/" target="_blank" rel="noopener noreferrer" className="group px-[10px] py-[8px] bg-foreground text-background font-semibold rounded-lg flex gap-3 transition transform duration-200 hover:scale-110">Produto
                  <ArrowUpRightIcon className="h-5 w-5 transition transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

