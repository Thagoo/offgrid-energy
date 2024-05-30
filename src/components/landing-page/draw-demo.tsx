import Image from "next/image";
import React from "react";
import Button from "../common/button";

const bulletPoints = [
  "100% Price Guaranteed.",
  "Certified Installers.",
  "100% Branded Products.",
  "24/7 Active Monitoring.",
  "30 Days Installation Guarantee.",
];

export default function DrawDemo() {
  return (
    <div className="relative">
      <Image
        src={"/assets/lander/banner/draw-demo.svg"}
        alt="draw demo"
        width={800}
        height={800}
      />
      <div className="flex flex-col justify-start items-start absolute top-2 left-2 md:top-20 md:left-20 gap-1 md:gap-2">
        <span className="text-primary text-xs md:text-xs bg-[#222323] rounded-full px-2 py-1 mb-1 md:mb-8">
          NEW
        </span>
        <p className="text-primary text-sm md:text-xl">Considering Solar?</p>
        <h2 className="text-white font-medium text-[10px] md:text-4xl mb-1">
          Draw your own <br className="hidden md:block" />
          conclusions
        </h2>
        <ul className="text-white font-thin text-[10px] md:text-sm space-y-1 md:space-y-2">
          {bulletPoints.map((item, i) => (
            <li key={i} className="flex gap-2">
              <Image
                src={"/assets/lander/icons/demo-bullet/icon.svg"}
                alt="bullet"
                width={10}
                height={10}
              />{" "}
              {item}
            </li>
          ))}
        </ul>
        <button className="font-light px-4 py-2 md:px-10 md:py-3 text-xs md:text-xl bg-primary rounded-3xl mt-1">
          Draw Your Solar System {"->"}
        </button>
      </div>
    </div>
  );
}
