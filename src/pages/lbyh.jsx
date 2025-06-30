import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Icon from "../assets/Icon.svg";
import LbyhMarquee from "./LbyhMarquee";

function LBYH() {
  return (
    <>
      <Navbar />

      <section className="w-full px-[100px] py-16 bg-white max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* ----------- MOBILE VIEW ----------- */}
          <div className="block lg:hidden w-full space-y-12">
            {/* Title */}
            <div>
              <div className="flex items-baseline gap-4">
                <p className="text-[48px] font-extrabold stroke-text text-black leading-none">02</p>
                <p className="text-[48px] font-extrabold text-black leading-none">LBYH-CBSE</p>
              </div>
              <p className="text-[24px] text-black mt-2 leading-tight">
                <span className="font-normal">eLearning </span>
                <span className="font-bold">Platform</span>
              </p>
            </div>

            {/* What’s the Idea? */}
            <div>
              <h2 className="bg-[#B9FF66] text-black px-4 py-1 text-[30px] font-medium font-spacegrotesk leading-tight">
                What’s the Idea?
              </h2>
              <p className="text-[16px] text-black font-spacegrotesk text-justify mt-4 leading-relaxed">
                An accessible and responsive e-learning platform built for CBSE students — designed to feel friendly,
                uncluttered, and device-ready. Whether you're on a school computer or scrolling on your phone during a
                chai break, LBYH works like a charm.
              </p>
            </div>

            {/* My Role */}
            <div>
              <h2 className="text-[28px] italic font-medium text-black font-spacegrotesk mb-4">My Role</h2>
              <p className="text-[18px] text-black font-normal font-spacegrotesk leading-relaxed text-justify">
                As a UI/UX Designer & Frontend Dev Intern, I handled everything from Figma screens to frontend layout
                structure — for both mobile and desktop experiences. My goal? Keep it clean, clear, and scroll-friendly
                no matter the device.
              </p>
            </div>

            {/* Design Focus */}
            <div className="text-white font-poppins shadow-md">
              <h3 className="text-xl font-semibold bg-black rounded-t-xl px-4 py-2">Design Focus</h3>
              <ul className="bg-[#008080] text-sm space-y-1 leading-relaxed px-4 py-3 rounded-b-xl">
                <li>Calm colors ✨</li>
                <li>📱 Mobile-first UX</li>
                <li>👀 Focused attention blocks</li>
                <li>🧩 Simple UI → Complex topics</li>
              </ul>
            </div>

            {/* Key Ingredients */}
            <div className="w-full bg-zinc-900 text-white rounded-[30px] px-8 py-6 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-[28px] font-bold font-spacegrotesk text-lime-400">Key Ingredients</h2>
                <img src={Icon} alt="icon" className="w-[24px] h-[24px] mt-1" />
              </div>
              <div className="text-[16px] text-zinc-200 font-spacegrotesk space-y-2">
                <p>Crafted responsive designs for web and mobile in Figma, ensuring visual and functional consistency</p>
                <p>Designed core screens: Home, Subject Dashboard, Chapter Page, Quiz View</p>
                <p>Focused on adaptive layout patterns — like stacked blocks for mobile and multi-column grids for desktop</p>
                <p>Built frontend templates using HTML, CSS, and basic React structure</p>
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
                <ColorBox name="Primary" hex="#008080" />
                <ColorBox name="Secondary" hex="#22B286" />
              </div>
            </div>

            {/* Typeface */}
            <div className="bg-[#B9FF66] rounded-[20px] px-6 py-5 font-spacegrotesk">
              <h2 className="text-[28px] font-bold text-black mb-2">Typeface</h2>
              <p className="text-[18px] text-black mb-1">Odor</p>
              <p className="text-[22px] tracking-wide text-black">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
                a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
                0 1 2 3 4 5 6 7 8 9<br />
                ! @ # $ %
              </p>
            </div>

            {/* User Interface Title */}
            <div className="w-full bg-[#B9FF66] font-sora font-extrabold text-[30px] text-black leading-tight px-4 py-3">
              User Interface
            </div>
          </div>

          {/* ----------- DESKTOP VIEW ----------- */}
          <div className="hidden lg:flex w-full justify-between gap-12">
            {/* LEFT SIDE */}
            <div className="flex-1 space-y-10">
              {/* Title */}
              <div>
                <div className="flex items-baseline gap-4">
                  <p className="text-[64px] font-extrabold stroke-text text-black leading-none">02</p>
                  <p className="text-[64px] font-extrabold text-black leading-none">LBYH-CBSE</p>
                </div>
                <p className="text-[32px] text-black mt-2 leading-tight">
                  <span className="font-normal">eLearning </span>
                  <span className="font-bold">Platform</span>
                </p>
              </div>

              {/* My Role */}
              <div className="max-w-[710px]">
                <h2 className="text-[32px] italic font-medium text-black font-spacegrotesk mb-4">My Role</h2>
                <p className="text-[18px] text-black font-normal font-spacegrotesk leading-relaxed text-justify">
                  As a UI/UX Designer & Frontend Dev Intern, I handled everything from Figma screens to frontend layout
                  structure — for both mobile and desktop experiences. My goal? Keep it clean, clear, and scroll-friendly
                  no matter the device.
                </p>
              </div>

              {/* Key Ingredients */}
              <div className="w-full bg-zinc-900 text-white rounded-[30px] px-8 py-6 max-w-[720px] shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-[28px] font-bold font-spacegrotesk text-lime-400">Key Ingredients</h2>
                  <img src={Icon} alt="icon" className="w-[24px] h-[24px] mt-1" />
                </div>
                <div className="text-[16px] text-zinc-200 font-spacegrotesk space-y-2">
                  <p>Crafted responsive designs for web and mobile in Figma, ensuring visual and functional consistency</p>
                  <p>Designed core screens: Home, Subject Dashboard, Chapter Page, Quiz View</p>
                  <p>Focused on adaptive layout patterns — like stacked blocks for mobile and multi-column grids for desktop</p>
                  <p>Built frontend templates using HTML, CSS, and basic React structure</p>
                </div>
              </div>

              {/* Typeface */}
              <div className="bg-[#B9FF66] rounded-[20px] px-6 py-5 w-full max-w-[720px] font-spacegrotesk">
                <h2 className="text-[28px] font-bold text-black mb-2">Typeface</h2>
                <p className="text-[18px] text-black mb-1">Odor</p>
                <p className="text-[22px] tracking-wide text-black">
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
                  a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
                  0 1 2 3 4 5 6 7 8 9<br />
                  ! @ # $ %
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-[380px] space-y-12">
              {/* What’s the Idea? */}
              <div>
                <h2 className="bg-[#B9FF66] text-black px-4 py-1 text-[40px] font-medium font-spacegrotesk leading-none">
                  What’s the Idea?
                </h2>
                <p className="text-[16px] text-black font-spacegrotesk text-justify mt-4 leading-relaxed">
                  An accessible and responsive e-learning platform built for CBSE students — designed to feel friendly,
                  uncluttered, and device-ready. Whether you're on a school computer or scrolling on your phone during a
                  chai break, LBYH works like a charm.
                </p>
              </div>

              {/* Design Focus */}
              <div className="text-white font-poppins shadow-md">
                <h3 className="text-xl font-semibold bg-black rounded-t-xl px-4 py-2">Design Focus</h3>
                <ul className="bg-[#008080] text-sm space-y-1 leading-relaxed px-4 py-3 rounded-b-xl">
                  <li>Calm colors ✨</li>
                  <li>📱 Mobile-first UX</li>
                  <li>👀 Focused attention blocks</li>
                  <li>🧩 Simple UI → Complex topics</li>
                </ul>
              </div>

              {/* Design System Title */}
              <div className="w-full bg-[#B9FF66] font-sora font-extrabold text-[30px] text-black leading-tight">
                Design <br /> System
              </div>

              {/* Colors */}
              <div className="bg-[#0d1404] rounded-[20px] px-6 py-5 w-full max-w-[720px] font-spacegrotesk">
                <h2 className="text-[24px] font-bold text-white mb-4">Colors</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ColorBox name="Primary" hex="#008080" />
                  <ColorBox name="Secondary" hex="#22B286" />
                </div>
              </div>

              {/* User Interface Title */}
              <div className="w-full">
                <h2 className="w-full bg-[#B9FF66] font-sora font-extrabold text-[30px] text-black leading-tight">
                  User Interface
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LbyhMarquee />
      <Footer />
    </>
  );
}

// Reusable ColorBox
function ColorBox({ name, hex }) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-sm font-semibold text-white mb-1">{name}</h3>
      <div className="w-full h-[100px] rounded-xl shadow-md" style={{ backgroundColor: hex }} />
      <p className="text-xs text-white mt-2">{hex}</p>
    </div>
  );
}

export default LBYH;
