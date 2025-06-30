import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KaapiMarquee from "./KaapiMarquee";

function Kaapi() {
  return (
    <>
      <Navbar />

      <section className="w-full px-[100px] py-16 bg-white max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* ----------- MOBILE VIEW (stacked layout) ----------- */}
          <div className="block lg:hidden w-full space-y-12">
            {/* Title */}
            <div>
              <div className="flex items-baseline gap-4">
                <p className="text-[48px] font-extrabold stroke-text text-black leading-none">01</p>
                <p className="text-[48px] font-extrabold text-black leading-none">Kappi Crave</p>
              </div>
              <p className="text-[24px] text-black mt-2 leading-tight">
                <span className="font-normal">Coffee </span>
                <span className="font-bold">Ordering </span>
                <span className="font-normal">Mobile App</span>
              </p>
            </div>

            {/* What’s Brewing */}
            <div>
              <h2 className="bg-[#B9FF66] text-black px-4 py-1 text-[30px] font-medium font-spacegrotesk leading-tight">
                What’s Brewing?
              </h2>
              <p className="text-[16px] text-black font-spacegrotesk text-justify mt-4 leading-relaxed">
                Kaapi Crave is a cute, cozy mobile app I designed for coffee lovers who hate waiting in line.
                It lets users browse drinks, customize their perfect cup, and order in just a few taps.
                Think smooth flow + creamy UI.
              </p>
            </div>

            {/* My Blend */}
            <div>
              <h2 className="text-[28px] italic font-medium text-black font-spacegrotesk mb-4">My Blend (Role)</h2>
              <p className="text-[18px] text-black font-normal font-spacegrotesk leading-relaxed text-justify">
                I was the designer, researcher (aka espresso-fuelled overthinker), and flow master.
                From moodboard to final screen, every pixel was placed with purpose (and a little caffeine).
              </p>
            </div>

            {/* Design Focus */}
            <div className="text-white font-poppins shadow-md">
              <h3 className="text-xl font-semibold bg-black rounded-t-xl px-4 py-2">Design Focus</h3>
              <ul className="bg-[#C6704E] text-sm space-y-1 leading-relaxed px-4 py-3 rounded-b-xl">
                <li>Warm coffee-toned palette ✨</li>
                <li>Mobile-first, tap-friendly UI 📱</li>
                <li>Intuitive flow, zero distractions 👀</li>
                <li>Simple layout → custom orders 🧩</li>
              </ul>
            </div>

            {/* Key Ingredients */}
            <div className="w-full bg-zinc-900 text-white rounded-[30px] px-8 py-6 shadow-md">
              <h2 className="text-[28px] font-bold font-spacegrotesk text-lime-400 mb-6">Key Ingredients</h2>
              <div className="text-[16px] text-zinc-200 font-spacegrotesk space-y-2">
                <p>Crafted a clean, swipe-friendly mobile layout using Figma</p>
                <p>Focused on warm tones, rounded buttons, and soft spacing to give that café vibe</p>
                <p>Built reusable components — menus, drink cards, modifiers</p>
                <p>Prioritized UX flow: from home → drink → customize → checkout — smooth as a latte pour</p>
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
                <ColorBox name="Primary" hex="#C6704E" />
                <ColorBox name="Secondary" hex="#4E5847" />
              </div>
            </div>

            {/* Typeface */}
            <div className="bg-[#B9FF66] rounded-[20px] px-6 py-5 font-spacegrotesk">
              <h2 className="text-[28px] font-bold text-black mb-2">Typeface</h2>
              <p className="text-[18px] text-black mb-1">Poppins</p>
              <p className="text-[22px] font-poppins tracking-wide text-black">
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

          {/* ----------- DESKTOP/TABLET VIEW (side-by-side layout) ----------- */}
          <div className="hidden lg:flex w-full justify-between gap-12">
            {/* LEFT SIDE */}
            <div className="flex-1 space-y-10">
              {/* Title */}
              <div>
                <div className="flex items-baseline gap-4">
                  <p className="text-[64px] font-extrabold stroke-text text-black leading-none">01</p>
                  <p className="text-[64px] font-extrabold text-black leading-none">Kappi Crave</p>
                </div>
                <p className="text-[32px] text-black mt-2 leading-tight">
                  <span className="font-normal">Coffee </span>
                  <span className="font-bold">Ordering </span>
                  <span className="font-normal">Mobile App</span>
                </p>
              </div>

              {/* My Blend */}
              <div className="max-w-[710px]">
                <h2 className="text-[32px] italic font-medium text-black font-spacegrotesk mb-4">My Blend (Role)</h2>
                <p className="text-[18px] text-black font-normal font-spacegrotesk leading-relaxed text-justify">
                  I was the designer, researcher (aka espresso-fuelled overthinker), and flow master.
                  From moodboard to final screen, every pixel was placed with purpose (and a little caffeine).
                </p>
              </div>

              {/* Key Ingredients */}
              <div className="w-full bg-zinc-900 text-white rounded-[30px] px-8 py-6 max-w-[720px] shadow-md">
                <h2 className="text-[28px] font-bold font-spacegrotesk text-lime-400 mb-6">Key Ingredients</h2>
                <div className="text-[16px] text-zinc-200 font-spacegrotesk space-y-2">
                  <p>Crafted a clean, swipe-friendly mobile layout using Figma</p>
                  <p>Focused on warm tones, rounded buttons, and soft spacing to give that café vibe</p>
                  <p>Built reusable components — menus, drink cards, modifiers</p>
                  <p>Prioritized UX flow: from home → drink → customize → checkout — smooth as a latte pour</p>
                </div>
              </div>

              {/* Typeface */}
              <div className="bg-[#B9FF66] rounded-[20px] px-6 py-5 w-full max-w-[720px] font-spacegrotesk">
                <h2 className="text-[28px] font-bold text-black mb-2">Typeface</h2>
                <p className="text-[18px] text-black mb-1">Poppins</p>
                <p className="text-[22px] font-poppins tracking-wide text-black">
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
                  a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
                  0 1 2 3 4 5 6 7 8 9<br />
                  ! @ # $ %
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-[380px] space-y-12">
              {/* What’s Brewing */}
              <div>
                <h2 className="bg-[#B9FF66] text-black px-4 py-1 text-[40px] font-medium font-spacegrotesk leading-tight">
                  What’s Brewing?
                </h2>
                <p className="text-[16px] text-black font-spacegrotesk text-justify mt-4 leading-relaxed">
                  Kaapi Crave is a cute, cozy mobile app I designed for coffee lovers who hate waiting in line.
                  It lets users browse drinks, customize their perfect cup, and order in just a few taps.
                  Think smooth flow + creamy UI.
                </p>
              </div>

              {/* Design Focus */}
              <div className="text-white font-poppins shadow-md">
                <h3 className="text-xl font-semibold bg-black rounded-t-xl px-4 py-2">Design Focus</h3>
                <ul className="bg-[#C6704E] text-sm space-y-1 leading-relaxed px-4 py-3 rounded-b-xl">
                  <li>Warm coffee-toned palette ✨</li>
                  <li>Mobile-first, tap-friendly UI 📱</li>
                  <li>Intuitive flow, zero distractions 👀</li>
                  <li>Simple layout → custom orders 🧩</li>
                </ul>
              </div>

              {/* Design System Title */}
              <div className="w-full bg-[#B9FF66] font-sora font-extrabold text-[30px] text-black leading-tight">
                Design <br /> System
              </div>

              {/* Colors */}
              <div className="bg-[#0d1404] rounded-[20px] px-6 py-5 w-full max-w-[720px] font-spacegrotesk">
                <h2 className="text-[24px] font-bold font-spacegrotesk text-white mb-4">Colors</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ColorBox name="Primary" hex="#C6704E" />
                  <ColorBox name="Secondary" hex="#4E5847" />
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

      <KaapiMarquee />
      <Footer />
    </>
  );
}

// ColorBox used in both views
function ColorBox({ name, hex }) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-sm font-semibold text-white mb-1">{name}</h3>
      <div className="w-full h-[100px] rounded-xl shadow-md" style={{ backgroundColor: hex }} />
      <p className="text-xs text-white mt-2">{hex}</p>
    </div>
  );
}

export default Kaapi;
