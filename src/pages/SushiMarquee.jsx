import React from "react";
import Marquee from "react-fast-marquee";

// SVG imports
import s1 from "../assets/sushi/s1.svg";
import s2 from "../assets/sushi/s2.svg";
import s3 from "../assets/sushi/s3.svg";
import s4 from "../assets/sushi/s4.svg";
import s5 from "../assets/sushi/s5.svg";
import s6 from "../assets/sushi/s6.svg";

const images = [s1, s2, s3, s4, s5, s6];

function SushiMarquee() {
  return (
    <section className="w-full py-4 bg-white">
      <Marquee pauseOnHover={true} speed={60} gradient={false}>
        {images.map((img, index) => (
          <div key={index} className="mx-6">
            <img
              src={img}
              alt={`sushi-${index + 1}`}
              className="h-[400px] w-auto rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default SushiMarquee;
