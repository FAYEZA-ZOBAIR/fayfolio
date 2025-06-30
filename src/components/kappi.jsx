import React from "react";

const Kappi = () => {
  return (
    <section className="bg-white text-black font-poppins px-6 sm:px-10 md:px-20 pt-20 pb-32 max-w-[1440px] mx-auto">

      {/* BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT COLUMN */}
        <div className="flex flex-col space-y-10">

          {/* Title + Subtitle */}
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
              <span className="text-gray-300">01</span> Kappi Crave
            </h1>
            <p className="text-xl font-light mt-2">
              Coffee <span className="font-semibold">Ordering</span> Mobile App.
            </p>
          </div>

          {/* My Blend */}
          <div>
            <h3 className="italic font-medium text-gray-700 mb-1">My Blend (Role)</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              I was the designer, researcher (aka espresso-fuelled overthinker), and flow master.
              From moodboard to final screen, every pixel was placed with purpose (and a little caffeine).
            </p>
          </div>

          {/* Key Ingredients */}
          <div className="bg-gray-900 text-white p-6 rounded-3xl shadow-md max-w-md">
            <h3 className="text-lime-300 font-semibold text-lg mb-4">Key Ingredients</h3>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>Clean, swipe-friendly layout in Figma</li>
              <li>Warm tones & rounded buttons = café vibe</li>
              <li>Reusable components — cards, menus</li>
              <li>Smooth UX: home → drink → checkout</li>
            </ul>
          </div>

          {/* Typeface */}
          <div className="bg-lime-300 p-6 rounded-3xl max-w-md">
            <h4 className="font-bold text-black text-lg mb-2">Typeface</h4>
            <p className="text-black font-semibold text-base">Poppins</p>
            <p className="text-sm mt-1 tracking-wider text-black">A–Z a–z 0–9 !@#$%</p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col space-y-10">

          {/* What's Brewing */}
          <div className="bg-lime-300 p-6 rounded-3xl shadow-sm">
            <h4 className="font-bold text-black text-lg mb-2">What’s Brewing?</h4>
            <p className="text-sm text-black leading-relaxed">
              Kaapi Crave is a cozy mobile app for coffee lovers who hate waiting.
              Order your perfect drink in just a few taps — quick, clean, satisfying.
            </p>
          </div>

          {/* Design Focus */}
          <div className="bg-gray-900 text-white p-6 rounded-3xl shadow-sm">
            <h4 className="font-bold text-lg mb-2">Design Focus</h4>
            <ul className="text-sm list-disc list-inside space-y-1 leading-relaxed">
              <li>Warm coffee palette ☕</li>
              <li>Tap-first UI for mobile 📱</li>
              <li>Minimal distractions, focused flow 🧠</li>
              <li>Clear layout to custom order 🔄</li>
            </ul>
          </div>

          {/* Design System Title */}
          <div className="relative">
            <div className="bg-lime-300 h-12 w-full absolute top-0 right-0 rounded-l-full"></div>
            <h3 className="relative z-10 text-3xl font-bold pl-6 pt-2">Design System</h3>
          </div>

          {/* Color Palette */}
          <div className="bg-gray-900 text-white p-6 rounded-3xl">
            <h4 className="font-bold text-lg mb-3">Colors</h4>
            <div className="flex gap-8">
              <div>
                <div className="w-12 h-12 bg-[#C6704E] rounded-lg mb-2 shadow-inner"></div>
                <p className="text-xs uppercase tracking-wide">Primary<br />#C6704E</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#4E5847] rounded-lg mb-2 shadow-inner"></div>
                <p className="text-xs uppercase tracking-wide">Secondary<br />#4E5847</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* USER INTERFACE TITLE */}
      <div className="mt-24 relative">
        <div className="bg-lime-300 h-12 w-full absolute top-0 right-0 rounded-l-full"></div>
        <h3 className="relative z-10 text-2xl font-bold pl-6 pt-2">User Interface</h3>
      </div>
    </section>
  );
};

export default Kappi;
