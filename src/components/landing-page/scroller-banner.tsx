"use client";
import React from "react";
import { Link as LinkScroll } from "react-scroll";

export default function ScrollerBanner() {
  return (
    <div className="flex flex-col px-5 md:grid md:grid-cols-3 text-center border-b-2 pb-5 md:pb-10 gap-10 md:gap-40  mt-4 md:mt-0">
      <div className=" flex flex-col gap-4 items-center justify-between">
        <h1 className="text-2xl font-medium">
          Solar at the <br className="md:hidden" /> right price
        </h1>
        <p className="text-sm md:text-base">
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
      <div className="flex flex-col gap-4 items-center  justify-between">
        <h1 className="text-2xl font-medium">
          Full service installation and paperwork
        </h1>
        <p className="text-sm md:text-base">
          We take care of all paperwork and installation. All you have to do is
          count your savings.
        </p>
        <LinkScroll
          to="paper-work"
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
      <div className=" flex flex-col gap-4 items-center  justify-between">
        <h1 className="text-2xl font-medium">
          High tech. <br /> Hassle free
        </h1>
        <p className="text-sm md:text-base">
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
