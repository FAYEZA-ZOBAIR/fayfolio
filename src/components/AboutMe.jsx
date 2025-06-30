import React from "react";
import aboutImg from "../assets/about.svg";

function AboutMe() {
  return (
    <section className="w-full px-6 sm:px-8 md:px-12 lg:px-[100px] py-12 sm:py-16 lg:py-20 bg-white">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={aboutImg}
            alt="About Illustration"
            className="w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] h-auto object-contain"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-left mt-0">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[400] font-sora mb-4 text-black leading-tight">
            <span className="capitalize">About </span>
            <span className="font-extrabold capitalize">Me</span>
          </h2>

          <div className="space-y-4 text-[16px] sm:text-[17px] md:text-[18px] text-zinc-600 font-spacegrotesk leading-relaxed">
            <p>
              I’m a creative, self-taught UI/UX designer and frontend developer with a love for clean
              interfaces and thoughtful user journeys. My background in computer applications has
              helped me blend logic with aesthetics, building designs that not only look good — but
              work flawlessly.
            </p>
            <p>
              I specialize in crafting responsive, accessible, and visually engaging experiences using
              Figma, React.js, and Tailwind CSS. I enjoy taking ideas from low-fidelity wireframes to
              high-performance code — shaping products through structured design systems, reusable
              components, and smart layouts.
            </p>
            <p>
              What matters most to me is clarity — in both design and communication. Whether I’m
              designing a mobile app or coding a responsive layout, I aim for balance, performance,
              and detail that users don’t just see… they feel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
