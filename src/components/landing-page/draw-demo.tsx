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
        loading="eager"
      />
      <div className="flex flex-col justify-start items-start absolute top-1 left-2 md:top-10 md:left-20 gap-1.5 md:gap-8">
        <span className="text-primary text-[10px] md:text-lg bg-[#222323] rounded-full md:px-5 px-3 py-1">
          NEW
        </span>
        <div className="">
          <h1 className="text-primary sm:text-xs">Considering Solar?</h1>
          <h2 className="text-white text-[10px] md:text-4xl font-light">
            Draw your own <br className="hidden md:block" />
            conclusions
          </h2>
        </div>
        <ul className="text-white text-[10px] md:text-sm space-y-0.5 md:space-y-2">
          {bulletPoints.map((item, i) => (
            <li key={i} className="flex gap-2 md:gap-4 font-extralight">
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
        <button className="px-4 py-[6px] md:px-10 md:py-3 text-xs md:text-xl bg-primary rounded-3xl">
          Draw Your Solar System {"->"}
        </button>
      </div>
    </div>
  );
}
