import Image from "next/image";
import Link from "next/link";
import React from "react";

//bg-gradient-to-r from-cyan-500 to-blue-500
export default function Navbar() {
  return (
    <div className="px-5 py-5 flex justify-between items-center rounded-full shadow-xl fixed w-[80vw] z-10 backdrop-blur-md backdrop-filter bg-opacity-20 blur-safari">
      <div className="flex gap-2">
        <div className="bg-black rounded-full">
          {/* <Image
            alt="offgrid"
            src={"/assets/lander/offgrid-logo/offgrid.svg"}
            width={20}
            height={20}
          /> */}
        </div>
        <h1 className="font-semibold text-[1.6rem] flex item-center">
          Offgrid
        </h1>
      </div>
      <div className="flex gap-8 text-[1.25rem]">
        <Link href={"/features"} className="hover:underline">
          Features
        </Link>
        <Link href={"/resources"} className="hover:underline">
          Resources
        </Link>
        <Link href={"/financing"} className="hover:underline">
          Financing
        </Link>
      </div>
      <div className="flex gap-4">
        <button className="border border-gray-400 px-4 py-2 rounded-3xl text-sm">
          Contact Us
        </button>
        <button className="border border-[#ffcb00] px-4 py-2 rounded-3xl text-sm">
          Calculate Savings
        </button>
      </div>
    </div>
  );
}
