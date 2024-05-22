import React from "react";

const pillsOptions = [
  "Rail System",
  "Rail System",
  "Rail System",
  "Rail System",
];
export default function Pills() {
  return (
    <>
      <div className="flex gap-4">
        {pillsOptions.map((pill, i) => (
          <div className="px-4 rounded-3xl border border-orange-400">
            {pill}
          </div>
        ))}
      </div>
    </>
  );
}
