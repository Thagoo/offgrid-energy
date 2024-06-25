"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function PartnerWithUsForm() {
  const [validationError, setValidationError] = useState({});

  const handleResetValidationErrors = () => {
    setValidationError({});
  };

  return (
    <div className="animated-gradient h-screen w-full flex justify-center items-center">
      <div className="md:w-1/3 bg-white flex flex-col items-center md:p-9 rounded-3xl gap-10 drop-shadow-2xl">
        <h1 className="text-5xl">Partner with Us</h1>
        <Image
          src={"/assets/partner-with-us/handshake-icon.png"}
          width={306}
          height={196}
          alt="handshake icon"
        />
        <form action="" className="space-y-4">
          <div className="space-y-2 ">
            <label htmlFor="name" className="text-[#868687]">
              Full Name
            </label>
            <input
              type="text"
              className={`border-2 bg-gray-50 ${
                validationError?.errors?.name ? "border-red-300" : "border-none"
              } focus:outline-primary w-full px-10 py-3 rounded-full`}
              placeholder="Full Name"
              id="name"
              name="name"
              onChange={(e) => {
                handleResetValidationErrors();
              }}
              required
            />
            {validationError.errors?.name &&
              validationError.errors.name.map((error: any) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          <div className="space-y-2 ">
            <label htmlFor="name" className="text-[#868687]">
              Phone Number
            </label>
            <input
              type="text"
              className={`border-2 bg-gray-50 ${
                validationError?.errors?.name ? "border-red-300" : "border-none"
              } focus:outline-primary w-full px-10 py-3 rounded-full`}
              placeholder="Full Name"
              id="phone"
              name="phone"
              onChange={(e) => {
                handleResetValidationErrors();
              }}
              required
            />
            {validationError.errors?.phone &&
              validationError.errors.phone.map((error: any) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </form>
      </div>
    </div>
  );
}
