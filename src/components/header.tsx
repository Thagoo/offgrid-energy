import React from "react";

export default function Header() {
  return (
    <div className="px-14 py-4 flex justify-between items-center">
      <h1 className="font-semibold text-md">Offgrid</h1>
      <div className="flex gap-8">
        <span>Features</span>
        <span>Resources</span>
        <span>Financing</span>
      </div>
      <div className="flex gap-4">
        <button className="px-6 py-2 bg-[#d9d8d6] rounded-3xl text-sm">
          Contact Us
        </button>
        <button className="bg-[#ffcb00] px-8 py-2 rounded-3xl text-sm">
          Calculate Savings
        </button>
      </div>
    </div>
  );
}
