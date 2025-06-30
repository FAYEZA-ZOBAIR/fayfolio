// src/pages/LbyhMarquee.jsx

import React from "react";
import Marquee from "react-fast-marquee";

// Import all 10 mockup images
import l1 from "../assets/lbyh/l1.svg";
import l2 from "../assets/lbyh/l2.svg";
import l3 from "../assets/lbyh/l3.svg";
import l4 from "../assets/lbyh/l4.svg";
import l5 from "../assets/lbyh/l5.svg";
import l6 from "../assets/lbyh/l6.svg";
import l7 from "../assets/lbyh/l7.svg";
import l8 from "../assets/lbyh/l8.svg";
import l9 from "../assets/lbyh/l9.svg";
import l10 from "../assets/lbyh/l10.svg";

const images = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10];

function LbyhMarquee() {
  return (
    <section className="w-full bg-white py-2 overflow-hidden">
      <Marquee pauseOnHover={true} speed={60} gradient={false}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`mockup-${index + 1}`}
            className="h-[520px] w-auto mx-6 transition-transform duration-300 hover:scale-105"
          />
        ))}
      </Marquee>
    </section>
  );
}

export default LbyhMarquee;
