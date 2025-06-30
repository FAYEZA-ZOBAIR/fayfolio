import React from "react";
import flowSVG from "../assets/flow.svg";

function LiveLifeBy() {
  return (
    <section className="w-full px-6 sm:px-8 md:px-12 lg:px-[100px] py-12 md:py-16 lg:py-20">
      <div className="bg-zinc-100 rounded-[20px] w-full relative overflow-visible flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 md:px-12 py-8 md:py-0 min-h-[320px]">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 z-10 flex flex-col justify-center space-y-3">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[30px] font-medium text-black font-spacegrotesk">
            Live Life By
          </h2>

          <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal text-zinc-800 font-spacegrotesk">
            You never really understand a person until you consider things from his point of view.
          </p>

          <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal text-zinc-800 font-spacegrotesk">
            I am rooted, but I flow
          </p>

          <button className="w-fit mt-2 bg-black text-white font-spacegrotesk text-[15px] sm:text-[16px] px-5 sm:px-6 py-2 rounded-md hover:bg-[#B9FF66] hover:text-black transition">
            Always Smiling and Kind
          </button>
        </div>

        {/* Right Section - SVG */}
        <div className="w-full md:w-1/2 flex justify-end items-center mt-8 md:mt-0">
          <img
            src={flowSVG}
            alt="flow"
            className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] object-contain md:-mr-10 -mr-4"
          />
        </div>
      </div>
    </section>
  );
}

export default LiveLifeBy;
