import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Icon from "../assets/Icon.svg";
import SushiMarquee from "./SushiMarquee";

export default function Sushi() {
  return (
    <>
      <Navbar />
      <section className="w-full px-[100px] py-16 bg-white max-w-[1600px] mx-auto">
        {/* ----------- MOBILE VIEW ----------- */}
        <div className="block lg:hidden w-full space-y-12">
          {/* Title */}
          <div>
            <div className="flex items-baseline gap-4">
              <p className="text-[48px] font-extrabold stroke-text text-black leading-none">04</p>
              <p className="text-[48px] font-extrabold text-black leading-none">SushiNinja</p>
            </div>
            <p className="text-[24px] text-black mt-2 leading-tight">
              🥢 <span className="font-bold">What’s the Dish?</span><br />
              <span className="font-normal">Sushi Restaurant Website</span>
            </p>
          </div>

          {/* What’s the Dish? */}
          <div>
            <h2 className="bg-[#B9FF66] text-black px-4 py-1 text-[30px] font-medium font-spacegrotesk leading-tight">
              What’s the Dish?
            </h2>
            <p className="text-[16px] text-black font-spacegrotesk text-justify mt-4 leading-relaxed">
              SushiNinja is a sleek, single-page website designed for a fictional sushi restaurant. The goal?
              Keep it visually elegant, smooth to scroll, and aesthetically on point—just clean vibes and crave-worthy UI.
            </p>
          </div>

          {/* My Brief */}
          <div>
            <h2 className="text-[28px] italic font-medium text-black font-spacegrotesk mb-4">My Brief (Role)</h2>
            <p className="text-[18px] text-black font-normal font-spacegrotesk leading-relaxed text-justify">
              I designed the full web layout from scratch in Figma, focusing on clarity, whitespace, and subtle visual rhythm.
              Even though the site’s structure was simple, every section was built to feel polished and intentional.
            </p>
          </div>

          {/* Design Focus */}
          <div className="text-white font-poppins shadow-md">
            <h3 className="text-xl font-semibold bg-black rounded-t-xl px-4 py-2">Design Focus</h3>
            <ul className="bg-[#AC5050] text-sm space-y-1 leading-relaxed px-4 py-3 rounded-b-xl">
              <li>Structured layout with Hero, Menu, About, and Contact</li>
              <li>Used neutral tones + strong typography</li>
              <li>Balanced image placement with clean text</li>
              <li>Designed responsive elements for all screens</li>
            </ul>
          </div>

          {/* Key Ingredients */}
          <div className="w-full bg-zinc-900 text-white rounded-[30px] px-8 py-6 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-[28px] font-bold font-spacegrotesk text-lime-400">Key Ingredients</h2>
              <img src={Icon} alt="icon" className="w-[24px] h-[24px] mt-1" />
            </div>
            <div className="text-[16px] text-zinc-200 font-spacegrotesk space-y-2">
              <p>Calm, scroll-friendly layout 🧘‍♀️</p>
              <p>Soft colors with bold type 🎨</p>
              <p>Balanced image + text flow 🖼️</p>
              <p>Designed for desktop viewing 💻</p>
            </div>
          </div>

          {/* Design System Title */}
          <div className="w-full bg-[#B9FF66] font-sora font-extrabold text-[30px] text-black leading-tight px-4 py-3">
            Design <br /> System
          </div>

          {/* Colors */}
          <div className="bg-[#0d1404] rounded-[20px] px-6 py-5 font-spacegrotesk">
            <h2 className="text-[24px] font-bold text-white mb-4">Colors</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <ColorBox name="Primary" hex="#AC5050" />
              <ColorBox name="Secondary" hex="#740909" />
            </div>
          </div>

          {/* Typeface */}
          <div className="bg-[#B9FF66] rounded-[20px] px-6 py-5 font-spacegrotesk">
            <h2 className="text-[28px] font-bold text-black mb-2">Typeface</h2>
            <p className="text-[18px] text-black mb-1">Odor</p>
            <p className="text-[22px] font-poppins tracking-wide text-black">
              A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
              a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
              0 1 2 3 4 5 6 7 8 9<br />
              ! @ # $ %
            </p>
          </div>

          {/* User Interface */}
          <div className="w-full bg-[#B9FF66] font-sora font-extrabold text-[30px] text-black leading-tight px-4 py-3">
            User Interface
          </div>
        </div>

        {/* ----------- DESKTOP VIEW ----------- */}
        <div className="hidden lg:flex w-full justify-between gap-12">
          {/* LEFT */}
          <div className="flex-1 space-y-10">
            {/* Title */}
            <div>
              <div className="flex items-baseline gap-4">
                <p className="text-[64px] font-extrabold stroke-text text-black leading-none">04</p>
                <p className="text-[64px] font-extrabold text-black leading-none">SushiNinja</p>
              </div>
              <p className="text-[32px] text-black mt-2 leading-tight">
                🥢 <span className="font-bold">What’s the Dish?</span><br />
                <span className="font-normal">Sushi Restaurant Website</span>
              </p>
            </div>

            {/* My Brief */}
            <div className="max-w-[710px]">
              <h2 className="text-[32px] italic font-medium text-black font-spacegrotesk mb-4">My Brief (Role)</h2>
              <p className="text-[18px] text-black font-normal font-spacegrotesk leading-relaxed text-justify">
                I designed the full web layout from scratch in Figma, focusing on clarity, whitespace, and subtle visual rhythm.
                Even though the site’s structure was simple, every section was built to feel polished and intentional.
              </p>
            </div>

            {/* Key Ingredients */}
            <div className="w-full bg-zinc-900 text-white rounded-[30px] px-8 py-6 max-w-[720px] shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-[28px] font-bold font-spacegrotesk text-lime-400">Key Ingredients</h2>
                <img src={Icon} alt="icon" className="w-[24px] h-[24px] mt-1" />
              </div>
              <div className="text-[16px] text-zinc-200 font-spacegrotesk space-y-2">
                <p>Calm, scroll-friendly layout 🧘‍♀️</p>
                <p>Soft colors with bold type 🎨</p>
                <p>Balanced image + text flow 🖼️</p>
                <p>Designed for desktop viewing 💻</p>
              </div>
            </div>

            {/* Typeface */}
            <div className="bg-[#B9FF66] rounded-[20px] px-6 py-5 w-full max-w-[720px] font-spacegrotesk">
              <h2 className="text-[28px] font-bold text-black mb-2">Typeface</h2>
              <p className="text-[18px] text-black mb-1">Odor</p>
              <p className="text-[22px] font-poppins tracking-wide text-black">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
                a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
                0 1 2 3 4 5 6 7 8 9<br />
                ! @ # $ %
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-[380px] space-y-12">
            {/* What’s the Dish? */}
            <div>
              <h2 className="bg-[#B9FF66] text-black px-4 py-1 text-[40px] font-medium font-spacegrotesk leading-none">
                What’s the Dish?
              </h2>
              <p className="text-[16px] text-black font-spacegrotesk text-justify mt-4 leading-relaxed">
                SushiNinja is a sleek, single-page website designed for a fictional sushi restaurant. The goal?
                Keep it visually elegant, smooth to scroll, and aesthetically on point—just clean vibes and crave-worthy UI.
              </p>
            </div>

            {/* Design Focus */}
            <div className="text-white font-poppins shadow-md">
              <h3 className="text-xl font-semibold bg-black rounded-t-xl px-4 py-2">Design Focus</h3>
              <ul className="bg-[#AC5050] text-sm space-y-1 leading-relaxed px-4 py-3 rounded-b-xl">
                <li>Structured layout with Hero, Menu, About, and Contact</li>
                <li>Used neutral tones + strong typography</li>
                <li>Balanced image placement with clean text</li>
                <li>Designed responsive elements for all screens</li>
              </ul>
            </div>

            {/* Design System Title */}
            <div className="w-full bg-[#B9FF66] font-sora font-extrabold text-[30px] text-black leading-tight">
              Design <br /> System
            </div>

            {/* Colors */}
            <div className="bg-[#0d1404] rounded-[20px] px-6 py-5 font-spacegrotesk">
              <h2 className="text-[24px] font-bold text-white mb-4">Colors</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <ColorBox name="Primary" hex="#AC5050" />
                <ColorBox name="Secondary" hex="#740909" />
              </div>
            </div>

            {/* User Interface */}
            <div className="w-full">
              <h2 className="w-full bg-[#B9FF66] font-sora font-extrabold text-[30px] text-black leading-tight">
                User Interface
              </h2>
            </div>
          </div>
        </div>
      </section>

      <SushiMarquee />
      <Footer />
    </>
  );
}

// ColorBox component
function ColorBox({ name, hex }) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-sm font-semibold text-white mb-1">{name}</h3>
      <div className="w-full h-[100px] rounded-xl shadow-md" style={{ backgroundColor: hex }} />
      <p className="text-xs text-white mt-2">{hex}</p>
    </div>
  );
}
