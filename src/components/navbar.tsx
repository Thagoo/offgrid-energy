"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

//bg-gradient-to-r from-cyan-500 to-blue-500
export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    if (menuActive) {
      // Start close transition
      setMenuActive(false);
      // After the transition duration, set visibility to false
      setTimeout(() => setIsVisible(false), 500); // 500ms matches the duration of the CSS transition
    } else {
      // Make menu visible and then start open transition
      setIsVisible(true);
      setTimeout(() => setMenuActive(true), 10); // Slight delay to ensure the transition is applied
    }
  };

  return (
    <>
      {" "}
      <div className="px-4 md:px-4 py-1 md:py-2 flex justify-between items-center rounded-full shadow-xl fixed gap-8 z-50 border-[1px] border-white border-opacity-20 backdrop-blur-md backdrop-filter bg-opacity-20 blur-safari">
        <div className="flex gap-2 items-center">
          <Image
            src={"/assets/lander/offgrid-logo.svg"}
            width={100}
            height={100}
            alt={"offgrid"}
            loading="eager"
            priority
          ></Image>
        </div>

        <button
          className="md:hidden cursor-pointer"
          onClick={() => handleToggle()}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5 12.5C21.5 12.6989 21.421 12.8897 21.2803 13.0303C21.1397 13.171 20.9489 13.25 20.75 13.25H4.25C4.05109 13.25 3.86032 13.171 3.71967 13.0303C3.57902 12.8897 3.5 12.6989 3.5 12.5C3.5 12.3011 3.57902 12.1103 3.71967 11.9697C3.86032 11.829 4.05109 11.75 4.25 11.75H20.75C20.9489 11.75 21.1397 11.829 21.2803 11.9697C21.421 12.1103 21.5 12.3011 21.5 12.5ZM4.25 7.25H20.75C20.9489 7.25 21.1397 7.17098 21.2803 7.03033C21.421 6.88968 21.5 6.69891 21.5 6.5C21.5 6.30109 21.421 6.11032 21.2803 5.96967C21.1397 5.82902 20.9489 5.75 20.75 5.75H4.25C4.05109 5.75 3.86032 5.82902 3.71967 5.96967C3.57902 6.11032 3.5 6.30109 3.5 6.5C3.5 6.69891 3.57902 6.88968 3.71967 7.03033C3.86032 7.17098 4.05109 7.25 4.25 7.25ZM20.75 17.75H4.25C4.05109 17.75 3.86032 17.829 3.71967 17.9697C3.57902 18.1103 3.5 18.3011 3.5 18.5C3.5 18.6989 3.57902 18.8897 3.71967 19.0303C3.86032 19.171 4.05109 19.25 4.25 19.25H20.75C20.9489 19.25 21.1397 19.171 21.2803 19.0303C21.421 18.8897 21.5 18.6989 21.5 18.5C21.5 18.3011 21.421 18.1103 21.2803 17.9697C21.1397 17.829 20.9489 17.75 20.75 17.75Z"
              fill="#343330"
            />
          </svg>
        </button>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href={"/features"} className="hover:underline">
            Features
          </Link>
          <Link href={"/resources"} className="hover:underline">
            Resources
          </Link>
          <Link href={"/financing"} className="hover:underline">
            Contact Us
          </Link>
        </div>
        <div className="hidden md:flex">
          <div className=" md:flex gap-8">
            {/* <button className="text-sm font-medium">Contact Us</button> */}
            <button className="border border-[#ffcb00] px-4 py-2 rounded-3xl text-sm font-medium">
              Calculate Savings
            </button>
          </div>
          {/* <div>
            <ThemeToggle />
          </div> */}
        </div>
      </div>
      {isVisible && (
        <div
          className={`transition-all duration-500 ease-in-out fixed bg-white rounded-3xl shadow-xl z-40 mt-16 ${
            menuActive ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
          } overflow-hidden`}
        >
          <div
            className={`${menuActive ? "fixed inset-0 " : ""}`}
            onClick={() => handleToggle()}
          ></div>

          <div className="px-6 py-6 md:py-5 flex flex-col justify-between items-center w-[90vw]  ">
            <div className="flex flex-col items-center gap-6 text-sm">
              <Link href={"/features"} className="hover:underline">
                Features
              </Link>
              <Link href={"/resources"} className="hover:underline">
                Resources
              </Link>
              <Link href={"/financing"} className="hover:underline">
                Financing
              </Link>
              <Link href={"/financing"} className="hover:underline">
                Contact Us
              </Link>

              <button className="border border-[#ffcb00] px-3 py-2 rounded-3xl text-sm">
                Calculate Savings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
