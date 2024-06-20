import Image from "next/image";
import React from "react";
import Button from "../common/button";
import Link from "next/link";

const bulletPoints = [
  "100% Price Guaranteed.",
  "Certified Installers.",
  "100% Branded Products.",
  "24/7 Active Monitoring.",
  "30 Days Installation Guarantee.",
];

export default function DrawDemo() {
  return (
    // <div className="relative">
    //   <Image
    //     src={"/assets/lander/banner/draw-demo.svg"}
    //     alt="draw demo"
    //     width={800}
    //     height={800}
    //   />
    //   <div className="flex flex-col justify-start items-start absolute top-1 left-2 md:top-10 md:left-20 gap-1.5 md:gap-8">
    //     <span className="text-primary text-[10px] md:text-lg bg-[#222323] rounded-full md:px-5 px-3 py-1">
    //       NEW
    //     </span>
    //     <div className="">
    //       <h1 className="text-primary sm:text-xs">Considering Solar?</h1>
    //       <h2 className="text-white text-[10px] md:text-4xl font-light">
    //         Draw your own <br className="hidden md:block" />
    //         conclusions
    //       </h2>
    //     </div>
    //     <ul className="text-white text-[10px] md:text-sm space-y-0.5 md:space-y-2">
    //       {bulletPoints.map((item, i) => (
    //         <li key={i} className="flex gap-2 md:gap-4 font-extralight">
    //           <Image
    //             src={"/assets/lander/icons/demo-bullet/icon.svg"}
    //             alt="bullet"
    //             width={10}
    //             height={10}
    //           />{" "}
    //           {item}
    //         </li>
    //       ))}
    //     </ul>
    //     <button className="px-4 py-[6px] md:px-10 md:py-3 text-xs md:text-xl bg-primary rounded-3xl">
    //       Draw Your Solar System {"->"}
    //     </button>
    //   </div>
    // </div>

    <div className="bg-[url('/assets/lander/banner/draw-demo.webp')] rounded-3xl bg-cover bg-center bg-no-repeat w-full">
      <div className=" flex flex-col justify-start items-start pl-5 pr-20 py-4 md:py-20 md:pl-14 md:pr-[30rem] gap-3 md:gap-8">
        <span className="text-primary text-[10px] md:text-lg bg-[#222323] rounded-full md:px-5 px-3 py-1">
          NEW
        </span>

        <div className="">
          <h1 className="text-primary md:text-xs text-2xl">
            Considering Solar?
          </h1>

          <h2 className="text-white text-sm md:text-4xl font-light">
            Draw your own <br className="hidden md:block" />
            conclusions
          </h2>
        </div>

        <ul className="text-white text-sm md:text-base space-y-0.5 md:space-y-2">
          {bulletPoints.map((item, i) => (
            <li key={i} className="flex gap-2 md:gap-4 font-light items-center">
              <svg
                className="w-4 h-4 md:w-6 md:h-6"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.53906 11L12.5391 14L22.5391 4M16.5391 3H8.33906C6.65891 3 5.81883 3 5.17709 3.32698C4.6126 3.6146 4.15366 4.07354 3.86604 4.63803C3.53906 5.27976 3.53906 6.11984 3.53906 7.8V16.2C3.53906 17.8802 3.53906 18.7202 3.86604 19.362C4.15366 19.9265 4.6126 20.3854 5.17709 20.673C5.81883 21 6.6589 21 8.33906 21H16.7391C18.4192 21 19.2593 21 19.901 20.673C20.4655 20.3854 20.9245 19.9265 21.2121 19.362C21.5391 18.7202 21.5391 17.8802 21.5391 16.2V12"
                  stroke="#F4F4F4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {item}
            </li>
          ))}
        </ul>

        <Link
          href={"https://quote.getoffgrid.energy"}
          className="px-4 py-[6px] md:px-10 md:py-3 text-xs md:text-xl bg-primary rounded-3xl mt-1 md:mt-0"
        >
          Draw Your Solar System {"->"}
        </Link>
      </div>
    </div>
  );
}
