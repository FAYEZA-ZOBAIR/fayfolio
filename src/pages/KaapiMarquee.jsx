import React from "react";
import Marquee from "react-fast-marquee";

// SVG imports
import k1 from "../assets/kappi/k1.svg";
import k2 from "../assets/kappi/k2.svg";
import k3 from "../assets/kappi/k3.svg";
import k4 from "../assets/kappi/k4.svg";
import k5 from "../assets/kappi/k5.svg";
import k6 from "../assets/kappi/k6.svg";
import k7 from "../assets/kappi/k7.svg";
import k8 from "../assets/kappi/k8.svg";
import k9 from "../assets/kappi/k9.svg";
import k10 from "../assets/kappi/k10.svg";
import k11 from "../assets/kappi/k11.svg";
import k12 from "../assets/kappi/k12.svg";
import k13 from "../assets/kappi/k13.svg";
import k14 from "../assets/kappi/k14.svg";
import k15 from "../assets/kappi/k15.svg";

const images = [
  k1, k2, k3, k4, k5, k6, k7, k8,
  k9, k10, k11, k12, k13, k14, k15
];

function KaapiMarquee() {
  return (
    <section className="w-full py-4 bg-white">
      <Marquee pauseOnHover={true} speed={60} gradient={false}>
        {images.map((img, index) => (
          <div key={index} className="mx-6">
            <img
              src={img}
              alt={`mockup-${index + 1}`}
              className="h-[520px] w-auto rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default KaapiMarquee;
