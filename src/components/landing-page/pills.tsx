import React from "react";

const pillsOptions = [
  "Rail System",
  "Solar Panels",
  "Inverter",
  "Battery",
  "Scaffolding",
  "Monitoring",
  "After Care",
];
export default function Pills() {
  return (
    <>
    <div className="flex flex-col gap-8">
      <div className="flex content-center gap-16 ">
        {pillsOptions.slice(0, 4).map((pill, i) => (
          <div className="px-4 rounded-3xl border border-[#FFCB00] bg-[#FBF4D8] text-normal text-lg">
            {pill}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-16">
        {pillsOptions
          .slice(pillsOptions.length - 3, pillsOptions.length)
          .map((pill, i) => (
            <div className="px-4 rounded-3xl border border-[#FFCB00] bg-[#FBF4D8] text-normal text-lg">
              {pill}
            </div>
          ))}
      </div></div>
    </>
  );
}
