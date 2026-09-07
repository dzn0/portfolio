import Image from "next/image";
import { BadgeCheck, Mail, ArrowRight } from "lucide-react"
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { ChevronRightIcon } from "@heroicons/react/24/outline";



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
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/andr%C3%A9-pieri-914563358/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={22} />
            </a>
            <a href="mailto:andrepereirapieri@gmail.com">
              <MdEmail size={25} />
            </a>
          </div>
        </div>
      </div>
      {/* Personal description */}
        {/* Title */}
      <div className="ml-4 mt flex-warp text-2xl sm:text-3xl sm:ml-7 flex-col">
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
        <div className="mt-4 sm:mt-9 p-1 ml-3 sm:ml-6 mr-75 sm:mr-140">
          <a href="/André-Pieri-Currículo.pdf" target="_blank" rel="noopener noreferrer" className="px-7 flex items-center p-3 bg-foreground rounded-lg text text-background font-semibold transition transform duration-200 hover:scale-105 group">Ver Currículo <ChevronRightIcon strokeWidth={2.5} className="h-4 ml-2 w-4 transition transform duration-200 group-hover:translate-x-1"/></a>
        </div>
    </div>
  );
}

