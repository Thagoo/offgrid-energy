"use client";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { partnerWithUsForm } from "@/lib/action";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

export const metadata: Metadata = {
  title: "Offgird Energy",
  description: "Offgrid installs solar in an all new way.",
  metadataBase: new URL("https://offgrid-website.vercel.app/"),
  openGraph: {
    images: "/assets/lander/offgrid-favicon.png",
  },
  icons: {
    icon: "/assets/lander/offgrid-favicon.png",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PartnerWithUsForm() {
  const [validationError, setValidationError] = useState<any>({});
  const initialState = { errors: {}, message: {} };

  const [state, formAction] = useFormState(partnerWithUsForm, initialState);

  const handleResetValidationErrors = () => {
    setValidationError({});
  };
  useEffect(() => {
    if (state?.errors) {
      setValidationError(state);
    }
  }, [state]);
  return (
    <div className="animated-gradient w-full flex flex-col items-center px-5 md:px-20 py-28">
      <p className="md:hidden text-xs md:text-base ml-auto mb-4">
        <Link href={"/"} className="hover:underline">
          Home
        </Link>
        / <span className="text-[#636363]">Privacy Policy</span>
      </p>
      <div className="flex justify-end items-center w-full">
        <p className="md:block hidden text-xs md:text-base">
          <Link href={"/"} className="hover:underline">
            Home
          </Link>
          / <span className="text-[#636363]">Privacy Policy</span>
        </p>
      </div>
      <div className="md:w-1/3 bg-white flex flex-col items-center md:p-9 p-5 rounded-3xl gap-4 md:gap-10 drop-shadow-2xl">
        <h1 className="text-2xl md:text-5xl text-center text-nowrap">
          Partner with Us
        </h1>
        <Image
          src={"/assets/partner-with-us/handshake-icon.png"}
          width={0}
          height={0}
          alt="handshake icon"
          sizes="100vw"
          className="h-auto md:w-96 w-52"
        />
        <form action={formAction} className="space-y-4">
          <div className="space-y-2 ">
            <label htmlFor="name" className="text-[#868687]">
              Full Name
            </label>
            <input
              type="text"
              className={`border-2 bg-gray-50 ${
                validationError?.errors?.name ? "border-red-300" : "border-none"
              } focus:outline-primary w-full px-5 md:px-10 py-3 rounded-full`}
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
              type="number"
              className={`border-2 bg-gray-50 ${
                validationError?.errors?.phone
                  ? "border-red-300"
                  : "border-none"
              } focus:outline-primary w-full px-5 md:px-10 py-3 rounded-full`}
              placeholder="+91 XXXXX XXXXX"
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
          <div className="space-y-2 ">
            <label htmlFor="name" className="text-[#868687]">
              Email Address
            </label>
            <input
              type="text"
              className={`border-2 bg-gray-50 ${
                validationError?.errors?.email
                  ? "border-red-300"
                  : "border-none"
              } focus:outline-primary w-full px-5 md:px-10 py-3 rounded-full`}
              placeholder="Eg. mansi@example.com"
              id="email"
              name="email"
              onChange={(e) => {
                handleResetValidationErrors();
              }}
              required
            />
            {validationError.errors?.email &&
              validationError.errors.email.map((error: any) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          <div className="space-y-2 ">
            <label htmlFor="name" className="text-[#868687]">
              Servicing area Pin code/ City
            </label>
            <input
              type="number"
              className={`border-2 bg-gray-50 ${
                validationError?.errors?.pincode
                  ? "border-red-300"
                  : "border-none"
              } focus:outline-primary w-full px-5 md:px-10 py-3 rounded-full`}
              placeholder="Eg. XXX XXX or Bangalore"
              id="pincode"
              name="pincode"
              onChange={(e) => {
                handleResetValidationErrors();
              }}
              required
            />
            {validationError.errors?.pincode &&
              validationError.errors.pincode.map((error: any) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          <div className="space-y-2 ">
            <label htmlFor="name" className="text-[#868687]">
              Comments
            </label>
            <textarea
              className={`border-2 bg-gray-50 ${
                validationError?.errors?.comments
                  ? "border-red-300"
                  : "border-none"
              } focus:outline-primary w-full px-5 md:px-10 py-3 rounded-3xl`}
              placeholder="Type your comment here..."
              id="comments"
              name="comments"
              onChange={(e) => {
                handleResetValidationErrors();
              }}
              required
            />
            {validationError.errors?.comments &&
              validationError.errors.comments.map((error: any) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          <div className=" space-y-2 flex justify-center animate-in slide-in-from-bottom-2 duration-1000">
            <Submit />
          </div>
        </form>
      </div>
    </div>
  );
}

function Submit() {
  const status = useFormStatus();

  return (
    <button
      className="focus:outline-none bg-primary tracking-wider px-6 py-2 rounded-full disabled:bg-yellow-400 flex items-center justify-center gap-2"
      disabled={status.pending}
    >
      Submit
      {status.pending ? <LoadingSpinner height={20} width={20} /> : ""}
    </button>
  );
}
