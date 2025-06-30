/* eslint-disable no-unused-vars */
import Marquee from "react-fast-marquee";
import {
  Sparkles,
  Code,
  PenTool,
  Brain,
  MousePointerClick,
  Smile,
} from "lucide-react";
import { motion } from "framer-motion";

function StickyMarqueeHeader() {
  return (
    <div className="sticky top-[64px] z-[50] w-full h-[56px] bg-black overflow-hidden font-sora">

      <Marquee
        speed={60}
        pauseOnHover={true}
        gradient={false}
        className="text-white text-xs sm:text-sm md:text-base uppercase tracking-[0.15em] h-full flex items-center"
      >
        <MarqueeItem icon={<Sparkles size={18} />} text="Hey, I’m Fayeza — building pixels & punchlines" weight="bold" />
        <MarqueeItem icon={<Smile size={18} />} text="It’s nice to meet you." weight="regular" />
        <MarqueeItem icon={<PenTool size={18} />} text="UI/UX Wizardry" weight="bold" />
        <MarqueeItem icon={<Code size={18} />} text="ReactJS + Tailwind CSS" weight="bold" />
        <MarqueeItem icon={<Brain size={18} />} text="Creativity meets Clean Code" weight="regular" />
        <MarqueeItem icon={<MousePointerClick size={18} />} text="Clicks with Meaning" weight="regular" />
      </Marquee>
    </div>
  );
}

function MarqueeItem({ icon, text, weight = "regular" }) {
  let fontStyle = "font-normal";
  if (weight === "bold") fontStyle = "font-bold";
  if (weight === "outlined") fontStyle = "font-extrabold text-transparent stroke-white";

  return (
    <motion.span
      whileHover={{
        color: weight === "outlined" ? undefined : "#B9FF66",
        y: -2,
        transition: { type: "spring", stiffness: 200 },
      }}
      className={`flex items-center gap-2 mx-4 sm:mx-6 md:mx-8 cursor-default transition-all duration-300 ${
        weight === "outlined"
          ? "hover:stroke-[#B9FF66]"
          : "hover:text-[#B9FF66]"
      } ${fontStyle}`}
    >
      {icon}
      <span className={`tracking-tight ${weight === "outlined" ? "stroke-[1.2px]" : ""}`}>
        {text}
      </span>
    </motion.span>
  );
}

export default StickyMarqueeHeader;
