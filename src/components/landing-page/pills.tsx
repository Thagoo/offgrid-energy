import React from "react";

const pillsOptions = [
  {
    text: "Rail System",
    icon: (
      <svg
        className="md:w-8 md:h-8 w-4 h-4"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 13H7"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.22266 5.2207L9.63766 6.6357"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 2V4"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.7783 5.2207L22.3633 6.6357"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M27 13H25"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11 13C11 11.6739 11.5268 10.4021 12.4645 9.46447C13.4021 8.52678 14.6739 8 16 8C17.3261 8 18.5979 8.52678 19.5355 9.46447C20.4732 10.4021 21 11.6739 21 13"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 27L8.0875 18H23.9125L29 27H3Z"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.82812 22H26.1756"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.043 18L20.9992 27"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11 27L12.9563 18"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect width="32" height="14" fill="#FBF4D8" />
      </svg>
    ),
  },
  {
    text: "Solar Panels",
    icon: (
      <svg
        className="md:w-8 md:h-8 w-4 h-4"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 16H12L7 6"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18 16L13 6"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19 6L24 16"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 16V24"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M30 16V23C30 23.2652 29.8946 23.5196 29.7071 23.7071C29.5196 23.8946 29.2652 24 29 24H3C2.73478 24 2.48043 23.8946 2.29289 23.7071C2.10536 23.5196 2 23.2652 2 23V16L7 6H25L30 16Z"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.5 11H27.5"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    text: "Inverter",
    icon: (
      <svg
        className="md:w-8 md:h-8 w-4 h-4"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.5 12.75L20.75 16.5L23.75 17.625L18.5 23.25L19.25 19.5L16.25 18.375L21.5 12.75Z"
          stroke="#343330"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.5938 9.9375H8.40625C8.25092 9.9375 8.125 10.0075 8.125 10.0938V12.9062C8.125 12.9925 8.25092 13.0625 8.40625 13.0625H14.5938C14.7491 13.0625 14.875 12.9925 14.875 12.9062V10.0938C14.875 10.0075 14.7491 9.9375 14.5938 9.9375Z"
          stroke="#343330"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    text: "Battery",
    icon: (
      <svg
        className="md:w-8 md:h-8 w-4 h-4"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 17H23"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 15V19"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 17H13"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28 10H4C3.44772 10 3 10.4477 3 11V23C3 23.5523 3.44772 24 4 24H28C28.5523 24 29 23.5523 29 23V11C29 10.4477 28.5523 10 28 10Z"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 10V7C7 6.73478 7.10536 6.48043 7.29289 6.29289C7.48043 6.10536 7.73478 6 8 6H12C12.2652 6 12.5196 6.10536 12.7071 6.29289C12.8946 6.48043 13 6.73478 13 7V10"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19 10V7C19 6.73478 19.1054 6.48043 19.2929 6.29289C19.4804 6.10536 19.7348 6 20 6H24C24.2652 6 24.5196 6.10536 24.7071 6.29289C24.8946 6.48043 25 6.73478 25 7V10"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    text: "Scaffolding",
    icon: (
      <svg
        className="md:w-8 md:h-8 w-4 h-4"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 27H16.5"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.5 11H30.5"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.5 19H13.5"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M27.5 11V23C27.5 23.2652 27.3946 23.5196 27.2071 23.7071C27.0196 23.8946 26.7652 24 26.5 24H24.5C24.2348 24 23.9804 23.8946 23.7929 23.7071C23.6054 23.5196 23.5 23.2652 23.5 23V22"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.5 27V5H10.5L13.5 11V27"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    text: "Monitoring",
    icon: (
      <svg
        className="md:w-8 md:h-8 w-4 h-4"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.5 27V5C24.5 3.89543 23.6046 3 22.5 3L10.5 3C9.39543 3 8.5 3.89543 8.5 5L8.5 27C8.5 28.1046 9.39543 29 10.5 29H22.5C23.6046 29 24.5 28.1046 24.5 27Z"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 7H20.5"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    text: "After Care",
    icon: (
      <svg
        className="md:w-8 md:h-8 w-4 h-4"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.5 5H6.5C5.94772 5 5.5 5.44772 5.5 6V26C5.5 26.5523 5.94772 27 6.5 27H26.5C27.0523 27 27.5 26.5523 27.5 26V6C27.5 5.44772 27.0523 5 26.5 5Z"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.5 3V7"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.5 3V7"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.5 15C16.5 14.2044 16.8161 13.4413 17.3787 12.8787C17.9413 12.3161 18.7044 12 19.5 12C20.2956 12 21.0587 12.3161 21.6213 12.8787C22.1839 13.4413 22.5 14.2044 22.5 15C22.5 19 16.5 22 16.5 22C16.5 22 10.5 19 10.5 15C10.5 14.2044 10.8161 13.4413 11.3787 12.8787C11.9413 12.3161 12.7044 12 13.5 12C14.2956 12 15.0587 12.3161 15.6213 12.8787C16.1839 13.4413 16.5 14.2044 16.5 15Z"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    text: "Financing",
    icon: (
      <svg
        className="md:w-8 md:h-8 w-4 h-4"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 10H25.5"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.5 5H25.5"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 5C15.7239 5 17.3772 5.68482 18.5962 6.90381C19.8152 8.12279 20.5 9.77609 20.5 11.5C20.5 13.2239 19.8152 14.8772 18.5962 16.0962C17.3772 17.3152 15.7239 18 14 18H9.5L20.5 28"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    text: "Net Metering",
    icon: (
      <svg
        className="md:w-8 md:h-8 w-4 h-4"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 2V30"
          stroke="#212121"
          stroke-width="1.6"
          stroke-linecap="round"
        />
        <path
          d="M2 6H30"
          stroke="#212121"
          stroke-width="1.6"
          stroke-linecap="round"
        />
        <path
          d="M5 3V5"
          stroke="#212121"
          stroke-width="0.8"
          stroke-linecap="round"
        />
        <path
          d="M8 3V5"
          stroke="#212121"
          stroke-width="0.8"
          stroke-linecap="round"
        />
        <path
          d="M5.17188 5.41602L15.9334 11.6292"
          stroke="#212121"
          stroke-width="0.8"
          stroke-linecap="round"
        />
        <path
          d="M26.9922 5.57031L16.3266 11.7281"
          stroke="#212121"
          stroke-width="0.8"
          stroke-linecap="round"
        />
        <path
          d="M24 3V5"
          stroke="#212121"
          stroke-width="0.8"
          stroke-linecap="round"
        />
        <path
          d="M27 3V5"
          stroke="#212121"
          stroke-width="0.8"
          stroke-linecap="round"
        />
      </svg>
    ),
  },
  {
    text: "Govt. Subsidy",
    icon: (
      <svg
        className="md:w-8 md:h-8 w-4 h-4"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 12H20.5"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 16H20.5"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 20H16.5"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.0863 27H6.5C6.23478 27 5.98043 26.8946 5.79289 26.7071C5.60536 26.5196 5.5 26.2652 5.5 26V6C5.5 5.73478 5.60536 5.48043 5.79289 5.29289C5.98043 5.10536 6.23478 5 6.5 5H26.5C26.7652 5 27.0196 5.10536 27.2071 5.29289C27.3946 5.48043 27.5 5.73478 27.5 6V19.5863C27.4999 19.8511 27.3947 20.1051 27.2075 20.2925L20.7925 26.7075C20.6051 26.8947 20.3511 26.9999 20.0863 27Z"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M27.41 19.998H20.5V26.908"
          stroke="#343330"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

export default function Pills() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex flex-col gap-2 md:gap-6">
        <div className="flex gap-3 md:gap-10 flex-wrap">
          {pillsOptions.slice(0, 4).map((pill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 md:px-[26px] py-2 rounded-full border-2 border-[#FFCB00] bg-[#FBF4D8] text-normal text-xs md:text-lg"
            >
              {pill.icon} {pill.text}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 md:gap-10">
          {pillsOptions.slice(4, 8).map((pill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 md:px-[26px] py-2 rounded-full border-2 border-[#FFCB00] bg-[#FBF4D8] text-normal text-xs md:text-lg"
            >
              {pill.icon} {pill.text}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 md:gap-10">
          {pillsOptions
            .slice(pillsOptions.length - 2, pillsOptions.length)
            .map((pill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 md:px-[26px] py-2 rounded-full border-2 border-[#FFCB00] bg-[#FBF4D8] text-normal text-xs md:text-lg"
              >
                {pill.icon} {pill.text}
              </div>
            ))}
        </div>
      </div>

      {/* mobile */}
      <div className="grid grid-cols-2 gap-2 md:hidden">
        {pillsOptions.map((pill, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 md:px-[26px] py-2 rounded-full border-2 border-[#FFCB00] bg-[#FBF4D8] text-normal text-xs md:text-lg"
          >
            {pill.icon} {pill.text}
          </div>
        ))}
        {/* <div className="flex gap-2 md:gap-16 flex-wrap justify-center">
          {pillsOptions.slice(0, 2).map((pill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 md:px-6 py-2 rounded-3xl -2border-[#FFCB00] bg-[#FBF4D8] text-normal text-xs md:text-lg"
            >
              {pill.icon} {pill.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2 md:gap-16 flex-wrap justify-center">
          {pillsOptions.slice(2, 5).map((pill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 md:px-6 py-2 rounded-3xl -2border-[#FFCB00] bg-[#FBF4D8] text-normal text-xs md:text-lg"
            >
              {pill.icon} {pill.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2 md:gap-16 flex-wrap justify-center">
          {pillsOptions.slice(5, 8).map((pill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 md:px-6 py-2 rounded-3xl -2border-[#FFCB00] bg-[#FBF4D8] text-normal text-xs md:text-lg"
            >
              {pill.icon} {pill.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2 md:gap-16 flex-wrap justify-center">
          {pillsOptions.slice(8, 10).map((pill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 md:px-6 py-2 rounded-3xl -2border-[#FFCB00] bg-[#FBF4D8] text-normal text-xs md:text-lg"
            >
              {pill.icon} {pill.text}
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}
