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
      <div className="flex flex-col justify-start items-start absolute top-20 left-20 gap-2">
        <span className="text-primary text-xs bg-[#222323] rounded-full px-2 py-1 mb-8">
          NEW
        </span>
        <p className="text-primary text-xl">Considering Solar?</p>
        <h2 className="text-white font-medium text-4xl">
          Draw your own <br />
          conclusions
        </h2>
        <ul className="text-white font-thin text-sm space-y-2 mt-2">
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
        <Button className="font-light">Draw Your Solar System {"->"}</Button>
      </div>
    </div>
  );
}
