import Image from "next/image";
import { BadgeCheck, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    // Master Div
    <div className="flex flex-col sm:max-w-3xl mx-auto">
      {/* Photo Div */}
      <div className="flex p-4 mt-2 items-center gap-5 sm:ml-8">
        <Image className="rounded-full border border-[#efefef]"
          src="/cropped_circle_image.png"
          alt="Profile Picture"
          width={140}
          height={140}
        />
        {/* Text Div (Name + Icons) */}
        <div className="flex-col">
          <div className="flex items-center gap-2">
            {/* Name */}
            <h1 className="font-semibold text-2xl">André Pieri</h1>
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


    </div>
  );
}

