import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Mail, ArrowRight, X } from "lucide-react"
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
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RevealOnScreen } from "../components/revealOnScreen"
import { SpotlightCard } from "../components/onMouseMove"
import { TechSection } from "../components/TechSection"
import { Lightbox } from "../components/Lightbox"
import { GithubActivity } from "../components/GithubActivity"
import { FaWhatsapp } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";


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
      <div className="mt-4 mr-4 sm:mt-3 sm:ml-7 ml-4 text-icons font-light leading-relaxed sm:leading-loose text-[18px]">
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
          <div id="experiencia" className="scroll-mt-24">
            <div className="font-thin mt-15 text-3xl flex">
              <span>Experiência</span>
              <div className="ml-auto flex text-sm font-normal items-center text-[#99a0af] group hover:text-hover-muted">
                {/* <Link href="/">Ver Detalhes</Link>
                <ChevronRightIcon strokeWidth={1.5} className="h-4 ml-1 w-4 transition transform duration-200 group-hover:translate-x-1" /> */}
              </div>
            </div>
            {/* Titles and Descriptions */}
            <div className="mt-6">
              <div className="flex flex-col sm:flex-row">
                <div><span className="text-[#6a7282] font-medium text-xs">Abr 2024 – Jul 2025</span></div>
                <div className="sm:ml-15 flex flex-col">
                  <span className="text-lg font-medium">Estagiário Técnico em CAD</span>
                  <span className="text-icons font-medium text-sm">Oshiro Arquitetura</span>
                  <span className="text-sm text-icons/90">Mato Grosso do Sul, Brasil</span>
                </div>
              </div>

            </div>
          </div>
        </RevealOnScreen>
        {/* Projects First Grid*/}
        <RevealOnScreen>
          <div id="projetos" className="font-thin mt-15 text-3xl flex items-center scroll-mt-24">
            <span>Projetos</span>
          </div>
        </RevealOnScreen>
        <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-6">
          <RevealOnScreen className="md:flex-none md:basis-[calc(50%-12px)]">
            {/* AnalisaCV */}
            <SpotlightCard className="border border-project p-3 flex flex-col rounded-xl mt-5 h-full">
              <div className="flex justify-center border border-project rounded-xl bg-[#e0e0e0] relative z-10 overflow-hidden">
                <div className="">
                  <Lightbox className="p-1 rounded-xl w-auto h-40 hover:scale-110 transition transform duration-200"
                    src="/analisa-cv-screenshot.png"
                    alt="Profile Picture"
                    width={1920}
                    height={1080}
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
              <div className="flex text-muted items-center gap-2 mt-3 mb-1 ml-auto font-[family-name:var(--font-roboto-mono)] text-[11px] tracking-[2px] scale-y-95">
                <a href="https://github.com/dzn0/analisa-cv" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:text-hover-muted">CÓDIGO<ArrowUpRightIcon className="h-3 w-3 group-hover:translate-x-1 transition transform duration-200" /></a>
                <a href="https://www.analisacv.com.br/" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:text-hover-muted">PRODUTO<ArrowUpRightIcon className="h-3 w-3 group-hover:translate-x-1 transition transform duration-200" /></a>
              </div>
            </SpotlightCard>
          </RevealOnScreen>
          {/* Portfólio Pessoal */}
          <RevealOnScreen className="md:flex-none md:basis-[calc(50%-12px)]">
            <SpotlightCard className="border border-project p-3 flex flex-col rounded-xl mt-5 h-full">
              <div className="flex justify-center border border-project rounded-xl bg-[#e0e0e0] relative z-10 overflow-hidden">
                <div>
                  <Lightbox className="p-1 rounded-xl w-auto h-40 hover:scale-110 transition transform duration-200"
                    src="/portfolio.png"
                    alt="Profile Picture"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
              <div className="flex mt-4 gap-1 items-center ">
                <span className="text-lg font-medium">Portfólio Pessoal</span>
              </div>
              <span className="text-icons font-medium text-sm">Criador & Desenvolvedor Único</span>
              <span className="text-sm text-icons/90">Site full-stack com backend próprio em Node.js e Prisma, com contador de visitantes em tempo real.</span>
              <div className="mt-4 flex gap-2 items-center">
                <BiLogoTypescript className="text-[#3178c6] hover:text-[#6ba6e8] transition transform duration-200 hover:-translate-y-1" size={24} />
                <RiNextjsFill className="text-foreground transition transform duration-200 hover:-translate-y-1" size={22} />
                <RiTailwindCssFill className="text-[#38bdf8] hover:text-[#7dd3fc] transition transform duration-200 hover:-translate-y-1" size={22} />
                <FaNodeJs className="text-[#339933] hover:text-[#4dcc4d] transition transform duration-200 hover:-translate-y-1" size={22} />
                <SiPrisma className="text-foreground transition transform duration-200 hover:-translate-y-1" size={22} />
              </div>
              <hr className="mt-4 text-project border-dashed" />
              <div className="flex text-muted items-center gap-2 mt-3 mb-1 ml-auto font-[family-name:var(--font-roboto-mono)] text-[11px] tracking-[2px] scale-y-95 ">
                <a href="https://github.com/dzn0/portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:text-hover-muted">CÓDIGO<ArrowUpRightIcon className="h-3 w-3 group-hover:translate-x-1 transition transform duration-200" /></a>
                <a href="https://andrepieri-andrepereirapieri-3671s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:text-hover-muted">PRODUTO<ArrowUpRightIcon className="h-3 w-3 group-hover:translate-x-1 transition transform duration-200" /></a>
              </div>
            </SpotlightCard>
          </RevealOnScreen>
          {/* Devtracker */}
          <RevealOnScreen className="md:flex-none md:basis-[calc(50%-12px)]">
            <SpotlightCard className="border border-project p-3 flex flex-col rounded-xl h-full">
              <div className="flex justify-center border border-project rounded-xl bg-[#e0e0e0] relative z-10 overflow-hidden">
                <div>
                  <Lightbox className="p-1 rounded-xl w-auto h-40 hover:scale-110 transition transform duration-200"
                    src="/devtracker.png"
                    alt="Profile Picture"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
              <div className="flex mt-4 gap-1 items-center ">
                <span className="text-lg font-medium">Devtracker</span>
                <div className="ml-2 font-medium text-[9px] scale-y-90 text-icons/90 bg-muted/15 border rounded-xl p-[2px] px-[5px] border-dashed">
                  <span className="">EM DESENVOLVIMENTO</span>
                </div>
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
              <div className="flex text-muted items-center gap-2 mt-3 mb-1 ml-auto font-[family-name:var(--font-roboto-mono)] text-[11px] tracking-[2px] scale-y-95 ">
                <a href="https://github.com/dzn0/devtracker" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:text-hover-muted">CÓDIGO<ArrowUpRightIcon className="h-3 w-3 group-hover:translate-x-1 transition transform duration-200" /></a>
                {/* <a href="https://www.analisacv.com.br/" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:text-hover-muted">PRODUTO<ArrowUpRightIcon className="h-3 w-3 group-hover:translate-x-1 transition transform duration-200" /></a> */}
              </div>
            </SpotlightCard>
          </RevealOnScreen>
        </div>
      </div>
      {/* Tecnologies */}
      <TechSection />
      {/* Certifications */}
      <RevealOnScreen>
        <div>
          <div className="font-thin mt-15 text-3xl flex ml-4">
            <span>Certificados</span>
          </div>
          {/* Titles and Descriptions */}
          <div className="mt-6 ml-4">
            <div className="flex flex-col sm:flex-row">
              <div><span className="text-[#6a7282] font-medium text-xs">Set 2026</span></div>
              <div className="sm:ml-19 flex flex-col">
                <span className="text-lg font-medium">Claude Academy: Claude Code 101</span>
                <span className="text-sm text-icons/90">Anthropic</span>
                <span className="text-sm text-[#6a7282]">Credential ID 363377d18212214294599fc711e35f1b</span>
                <Lightbox className="mt-3 rounded border border-project transition transform duration-200 hover:scale-110 w-19 h-auto"
                  src="/claude-code-101.png"
                  alt="Profile Picture"
                  width={3300}
                  height={2250}
                />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScreen>
      {/* Education */}
      <RevealOnScreen>
        <div>
          <div className="font-thin mt-15 text-3xl flex ml-4">
            <span>Educação</span>
          </div>
          {/* Titles and Descriptions */}
          <div className="mt-6 ml-4">
            <div className="flex flex-col sm:flex-row">
              <div><span className="text-[#6a7282] font-medium text-xs">2026 - 2030</span></div>
              <div className="sm:ml-15 flex flex-col">
                <span className="text-lg font-medium">Bacharelado em Engenharia de Software</span>
                <span className="text-sm text-icons/90">Faculdade Infnet</span>
                <span className="text-sm text-icons/90">Rio de Janeiro, Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScreen>
      {/* GitHub Activity */}
      <RevealOnScreen>
        <div>
          <div className="font-thin mt-15 text-3xl flex ml-4">
            <span>GitHub Activity</span>
          </div>
          <div className="mt-6 ml-4 mr-4">
            <GithubActivity username="dzn0" />
          </div>
        </div>
      </RevealOnScreen>
      <div>
        <div className="font-thin mt-15 text-3xl flex flex-col ml-4">
          {/* Lets Work Together */}
          <RevealOnScreen>
            <span>Vamos trabalhar juntos.</span>
            <div className="flex flex-col sm:flex-row">
              <div className="mt-5 text-[15px] sm:text-[17px] font-[390] text-[#99a1aa] font leading-relaxed">
                <span className="">Disponível para vagas full-stack, freelas e parcerias. Construo sistemas completos<br className="hidden sm:inline" /> do zero — frontend, backend e banco de dados, incluindo integração de <br className="hidden sm:inline" />pagamentos e automações com IA.</span>
              </div>
              {/* Email */}
              <div className="mr-4 mt-5 flex flex-col gap-3">
                <a href="mailto:andrepereirapieri@gmail.com" className="bg-card-bg p-3 rounded-2xl border border-project flex items-center gap-3 hover:scale-102 dark:hover:brightness-125 transition transform duration-200">
                  <div className="bg-card-icon-bg p-3 rounded-2xl">
                    <MdEmail size={24} />
                  </div>
                  <div className="text-[16px] font-[390] flex flex-col">
                    <span className="text-[11px] font-bold scale-y-98 tracking-widest text-label-accent">EMAIL</span>
                    <span>andrepereirapieri@gmail.com</span>
                  </div>
                  <ChevronRightIcon className="h-auto w-4 ml-auto mr-3" />
                </a>
                {/* Whatsapp */}
                <a href="https://wa.me/5567996115591" target="_blank" rel="noopener noreferrer" className="bg-card-bg p-3 rounded-2xl border border-project flex items-center gap-3 hover:scale-102 dark:hover:brightness-125 transition transform duration-200">
                  <div className="bg-card-icon-bg p-3 rounded-2xl">
                    <FaWhatsapp size={24} />
                  </div>
                  <div className="text-[16px] font-[390] flex flex-col">
                    <span className="text-[11px] font-bold scale-y-98 tracking-widest text-label-accent">TELEFONE</span>
                    <span>67 99611-5591</span>
                  </div>
                  <ChevronRightIcon className="h-auto w-4 ml-auto mr-3" />
                </a>
              </div>
            </div>
          </RevealOnScreen>
        </div>
      </div>
    </div>
  );
}

