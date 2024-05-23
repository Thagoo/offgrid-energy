import React from "react";

export default function CardOverlay() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-opacity-20 bg-slate-100 px-10 py-6 absolute right-[-6.2rem] top-1/4 rounded-[2rem] drop-shadow-lg border border-white blur-safari">
      <div className="flex justify-center item-center gap-4">
        <div className="flex flex-col items-center">
          <span className="text-center font-medium text-2xl">20</span>
          <span className="text-lg font-light text-gray-600">Panels</span>
        </div>
        <div className="flex items-center font-light text-3xl">+</div>
       
        <div className="flex flex-col items-center">
          <span className="text-center font-medium text-xl">180 <span className="text-xs font-light">hrs</span></span>
          <span className="text-lg font-light text-gray-600">Sunshine hours</span>
        </div>
        <div className="flex items-center font-light text-3xl">=</div>
        <div className="flex flex-col items-center">
          <span className="text-center font-medium text-xl">100%</span>
          <span className="text-lg font-light text-gray-600">Savings</span>
        </div>
      </div>
    </div>
  );
}
