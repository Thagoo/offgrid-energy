import React from "react";

export default function CardOverlay() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-opacity-20 bg-slate-100 px-1 py-2 md:px-10 md:py-6 absolute right-2 top-1/4 md:right-[-6.2rem] md:top-1/4 rounded-lg md:rounded-3xl drop-shadow-lg border border-white blur-safari">
      <div className="flex justify-center item-center gap-2 md:gap-4">
        <div className="flex flex-col items-center">
          <span className="text-center font-medium md:text-2xl text-xs">
            20
          </span>
          <span className="md:text-lg font-light text-gray-600 text-xs">
            Panels
          </span>
        </div>
        <div className="flex items-center font-light md:text-3xl text-xs">
          +
        </div>

        <div className="flex flex-col items-center">
          <span className="text-center font-medium md:text-xl text-xs">
            180 <span className="text-xs font-light">hrs</span>
          </span>
          <span className="md:text-lg text-xs font-light text-gray-600">
            Sunshine hours
          </span>
        </div>
        <div className="flex items-center font-light md:text-3xl text-xs">
          =
        </div>
        <div className="flex flex-col items-center">
          <span className="text-center font-medium md:text-xl text-xs">
            100%
          </span>
          <span className="md:text-lg text-xs font-light text-gray-600">
            Savings
          </span>
        </div>
      </div>
    </div>
  );
}
