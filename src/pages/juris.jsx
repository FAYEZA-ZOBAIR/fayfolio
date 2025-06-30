import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import j1 from "../assets/juris/j1.svg";
import j2 from "../assets/juris/j2.svg";
import j3 from "../assets/juris/j3.svg";

function Juris() {
  return (
    <>
      <Navbar />
      <section className="w-full px-[100px] py-16 bg-white max-w-[1600px] mx-auto">
        {/* Mobile View */}
        <div className="block lg:hidden w-full space-y-12">
          <TitleMobile />
          <WhatsTheCase />
          <MyBrief />
          <DesignFocus />
          <KeyIngredients />
          <DesignSystemTitle />
          <Colors />
          <Typeface />
          <UserInterfaceTitle />
        </div>

        {/* Desktop & Tablet View */}
        <div className="hidden lg:flex flex-col gap-12">
          <div className="flex justify-between gap-12">
            {/* Left */}
            <div className="flex-1 space-y-10">
              <TitleDesktop />
              <MyBrief />
              <KeyIngredients />
              <Typeface />
            </div>

            {/* Right */}
            <div className="w-[380px] space-y-10">
              <WhatsTheCase />
              <DesignFocus />
              <DesignSystemTitle />
              <Colors />
              <UserInterfaceTitle />
            </div>
          </div>
        </div>
      </section>

      {/* Mockups Section (Common for All) */}
      <section className="w-full px-[100px] mt-2 mb-8">
        <div className="flex justify-center items-end gap-6 flex-wrap">
          <img src={j1} alt="Juris Mockup 1" className="h-[400px] transition-all hover:scale-105" />
          <img src={j2} alt="Juris Mockup 2" className="h-[420px] rounded-2xl transition-all hover:scale-105" />
          <img src={j3} alt="Juris Mockup 3" className="h-[400px] transition-all hover:scale-105" />
        </div>
      </section>

      <Footer />
    </>
  );
}

// --- Section Components ---

function TitleMobile() {
  return (
    <div>
      <div className="flex items-baseline gap-4">
        <p className="text-[48px] font-extrabold text-black leading-none">03</p>
        <p className="text-[48px] font-extrabold text-black leading-none">Juris Chatbot</p>
      </div>
      <p className="text-[24px] text-black mt-2 leading-tight">
        <span className="font-normal">Legal </span>
        <span className="font-bold">Chat </span>
        <span className="font-normal">Interface</span>
      </p>
    </div>
  );
}

function TitleDesktop() {
  return (
    <div>
      <div className="flex items-baseline gap-4">
        <p className="text-[64px] font-extrabold text-black leading-none">03</p>
        <p className="text-[64px] font-extrabold text-black leading-none">Juris Chatbot</p>
      </div>
      <p className="text-[32px] text-black mt-2 leading-tight">
        <span className="font-normal">Legal </span>
        <span className="font-bold">Chat </span>
        <span className="font-normal">Interface</span>
      </p>
    </div>
  );
}

function WhatsTheCase() {
  return (
    <div>
      <h2 className="bg-[#B9FF66] text-black px-4 py-1 text-[30px] md:text-[40px] font-medium font-spacegrotesk leading-tight">
        What’s the Case?
      </h2>
      <p className="text-[16px] text-black font-spacegrotesk text-justify mt-4 leading-relaxed">
        TL;DR: Law, but make it chill — and stylish. Juris Chatbot is a sharp, bold legal chatbot
        interface for users who need fast answers without the headache. Designed in dark mode with
        a neumorphic look, it feels modern, minimal, and anything but boring.
      </p>
    </div>
  );
}

function MyBrief() {
  return (
    <div className="max-w-[710px]">
      <h2 className="text-[28px] md:text-[32px] italic font-medium text-black font-spacegrotesk mb-4">
        My Brief (Role)
      </h2>
      <p className="text-[18px] text-black font-normal font-spacegrotesk leading-relaxed text-justify">
        Handled the full UX direction — from rough wireframes to sleek, high-fidelity mockups. I focused on
        turning stiff legal interactions into smooth, scrollable, bold digital convos. Visual impact meets
        user clarity.
      </p>
    </div>
  );
}

function DesignFocus() {
  return (
    <div className="text-white font-poppins shadow-md">
      <h3 className="text-xl font-semibold bg-black rounded-t-xl px-4 py-2">Design Focus</h3>
      <ul className="bg-[#C6704E] text-sm space-y-1 leading-relaxed px-4 py-3 rounded-b-xl">
        <li>Bold dark-mode color scheme ✨</li>
        <li>Mobile-friendly chat interface 📱</li>
        <li>Clear flow, minimal confusion 👀</li>
        <li>Neumorphic layout → smart replies 🧩</li>
      </ul>
    </div>
  );
}

function KeyIngredients() {
  return (
    <div className="w-full bg-zinc-900 text-white rounded-[30px] px-8 py-6 shadow-md">
      <h2 className="text-[28px] font-bold font-spacegrotesk text-lime-400 mb-6">Key Ingredients</h2>
      <div className="text-[16px] text-zinc-200 font-spacegrotesk space-y-2">
        <p>Designed a 3-screen chatbot UI with bold colors, soft shadows, and floating components</p>
        <p>Created a visually rich dark-mode interface using neumorphic styling</p>
        <p>Styled consistent layouts for bot vs. user messages + quick action replies</p>
        <p>Focused on contrast, hierarchy, and visual rhythm to guide the user naturally</p>
      </div>
    </div>
  );
}

function DesignSystemTitle() {
  return (
    <div className="w-full bg-[#B9FF66] font-sora font-extrabold text-[30px] text-black leading-none">
      Design <br /> System
    </div>
  );
}

function Colors() {
  const palette = [
    { name: "Primary", hex: "#B033E9" },
    { name: "Accent 1", hex: "#E97D9A" },
    { name: "Accent 2", hex: "#E9D13A" },
    { name: "Accent 3", hex: "#F86DEC" },
  ];
  return (
    <div className="bg-[#0d0d0d] rounded-[20px] px-6 py-5 font-spacegrotesk">
      <h2 className="text-[24px] font-bold text-white mb-4">Colors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {palette.map((color) => (
          <div key={color.hex} className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-white mb-1">{color.name}</h3>
            <div
              className="w-full h-[100px] rounded-xl shadow-md"
              style={{ backgroundColor: color.hex }}
            />
            <p className="text-xs text-white mt-2">{color.hex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Typeface() {
  return (
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
  );
}

function UserInterfaceTitle() {
  return (
    <div className="w-full bg-[#B9FF66] font-sora font-extrabold text-[30px] text-black leading-none">
      User Interface
    </div>
  );
}

export default Juris;
