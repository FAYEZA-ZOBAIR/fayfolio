import { Mail } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import bannerImg from "../assets/Banner 1.svg";

function Hero() {
  return (
    <section className="w-full px-6 sm:px-8 md:px-12 lg:px-[100px] py-12 lg:py-20 bg-white max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6 text-left">
        <div className="text-[32px] sm:text-[40px] lg:text-[48px] font-sora leading-snug text-black">
          <p className="font-normal">Hello I’m</p>
          <p className="font-extrabold">FAYEZA ZOBAIR</p>
          <p>
            <span className="font-extrabold">Designer</span>{" "}
            <span className="italic font-extrabold">&</span>{" "}
            <span className="font-extrabold stroke-text">Developer</span>
          </p>
          <p>
            <span className="font-normal">Based In </span>
            <span className="font-bold">India.</span>
          </p>
        </div>

        <p className="text-[15px] sm:text-[16px] text-zinc-500 font-sora max-w-xl leading-relaxed">
          I’m Fayeza Zobair — Pixels, prototypes & punchy code — that’s my toolkit. Raised in Aligarh,
          built in Figma, powered by React. Obsessed with turning wireframes into wow. I turn caffeine
          and curiosity into functional beauty. When I’m not designing, I’m debugging life’s layout.
        </p>

        {/* Social Icons */}
<div className="flex gap-4 pt-2 sm:pt-4">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/fayeza-zobair-8a739621a/"
    target="_blank"
    rel="noopener noreferrer"
    className="relative group w-[48px] sm:w-[56px] h-[48px] sm:h-[56px] flex items-center justify-center border border-black rounded-md transition-colors duration-300 hover:bg-black"
  >
    <SiLinkedin size={22} className="text-black group-hover:text-white transition-colors duration-300" />
    <span className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      LinkedIn
    </span>
  </a>

  {/* Email */}
  <a
    href="mailto:fayeza.zobair@gmail.com"
    className="relative group w-[48px] sm:w-[56px] h-[48px] sm:h-[56px] flex items-center justify-center border border-black rounded-md transition-colors duration-300 hover:bg-black"
  >
    <Mail size={22} className="text-black group-hover:text-white transition-colors duration-300" />
    <span className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Email
    </span>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/FAYEZA-ZOBAIR"
    target="_blank"
    rel="noopener noreferrer"
    className="relative group w-[48px] sm:w-[56px] h-[48px] sm:h-[56px] flex items-center justify-center border border-black rounded-md transition-colors duration-300 hover:bg-black"
  >
    <SiGithub size={22} className="text-black group-hover:text-white transition-colors duration-300" />
    <span className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      GitHub
    </span>
  </a>
</div>

      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={bannerImg}
          alt="Banner Illustration"
          className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[630px] h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;
