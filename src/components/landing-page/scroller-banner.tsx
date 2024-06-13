"use client";
import React from "react";
import { Link as LinkScroll } from "react-scroll";

export default function ScrollerBanner() {
  return (
    <div className="flex md:flex-row flex-col justify-between w-full text-center md:gap-16 gap-14 border-b-2 py-10 md:mx-12">
      <div className="md:px-16 px-7 flex flex-col gap-4 items-center">
        <h1 className="text-2xl">Solar at the right price</h1>
        <p className="text-sm">
          Don’t overpay for solar. Get the right product at the right price.
        </p>
        <LinkScroll
          to="draw-demo"
          spy={true}
          smooth={true}
          className="rounded-full bg-primary w-8 h-8 justify-center items-center flex  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        >
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 1.76563L10 9.76562L2 1.76562"
              stroke="#212121"
              stroke-width="2.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </LinkScroll>
      </div>
      <div className="md:px-14 px-7 flex flex-col gap-4 items-center">
        <h1 className="text-2xl">Full service installation and paperwork</h1>
        <p className="text-sm">
          We take care of all paperwork and installation. All you have to count
          is savings.
        </p>
        <LinkScroll
          to="solar-solutions"
          spy={true}
          smooth={true}
          className="rounded-full bg-primary w-8 h-8 justify-center items-center flex  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        >
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 1.76563L10 9.76562L2 1.76562"
              stroke="#212121"
              stroke-width="2.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </LinkScroll>
      </div>
      <div className="md:px-8 px-7 flex flex-col gap-4 items-center">
        <h1 className="text-2xl">
          High tech. <br /> Hassle free
        </h1>
        <p className="text-sm">
          Offgrid integrates with inverters and continuously monitors your
          systems remotely.
        </p>
        <LinkScroll
          to="installation-steps"
          spy={true}
          smooth={true}
          className="rounded-full bg-primary w-8 h-8 justify-center items-center flex cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        >
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 1.76563L10 9.76562L2 1.76562"
              stroke="#212121"
              stroke-width="2.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </LinkScroll>
      </div>
    </div>
  );
}
