"use client";
import React from "react";

export default function FlippingCardSection() {
  return (
    <div
      className="h-auto w-screen md:w-auto md:px-[5.13rem] flex flex-col gap-4 md:gap-28 py-16 md:py-28"
      id="solar-installation"
    >
      <div className="flex flex-col gap-2 md:gap-3">
        <h1 className="text-2xl md:text-[3rem] font-medium text-center leading-none">
          Solar installations <br />
          without salesmen.
        </h1>
        <p className="text-[#868687] text-sm md:text-lg text-center font-light">
          Get a fixed price online with fast installation service.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 md:w-full w-screen px-5 md:px-0">
        {/* Card One */}
        <FlipCard
          frontContent={
            <div className=" flex flex-col gap-2 h-full">
              <svg
                width="56"
                height="57"
                viewBox="0 0 56 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10.7383H14V3.73828H10.5V10.7383H3.5V14.2383H10.5V21.2383H14V14.2383H21V10.7383ZM52.5 17.7383V7.23828H42V10.7383H28V14.2383H42V17.7383H45.5V42.2383H42V45.7383H17.5V42.2383H14V28.2383H10.5V42.2383H7V52.7383H17.5V49.2383H42V52.7383H52.5V42.2383H49V17.7383H52.5ZM14 49.2383H10.5V45.7383H14V49.2383ZM49 49.2383H45.5V45.7383H49V49.2383ZM45.5 10.7383H49V14.2383H45.5V10.7383Z"
                  fill="#FFCB00"
                />
              </svg>
              <h1 className="text-lg">
                <span className="font-semibold">You provide </span>some details
                about your home and it’s current set up.{" "}
              </h1>
              <svg
                className="mt-auto self-end"
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 3.23828C18.4514 3.30561 13.149 5.53971 9.2252 9.46348C5.30143 13.3872 3.06732 18.6896 3 24.2383C3.06732 29.7869 5.30143 35.0893 9.2252 39.0131C13.149 42.9368 18.4514 45.171 24 45.2383C29.5486 45.171 34.851 42.9368 38.7748 39.0131C42.6986 35.0893 44.9327 29.7869 45 24.2383C44.9327 18.6896 42.6986 13.3872 38.7748 9.46348C34.851 5.53971 29.5486 3.30561 24 3.23828ZM36 25.7383H25.5V36.2383H22.5V25.7383H12V22.7383H22.5V12.2383H25.5V22.7383H36V25.7383Z"
                  fill="#FFCB00"
                />
              </svg>
            </div>
          }
          backContent={
            <div className=" flex flex-col gap-2 h-full">
              <svg
                width="25"
                height="25"
                viewBox="0 0 56 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10.7383H14V3.73828H10.5V10.7383H3.5V14.2383H10.5V21.2383H14V14.2383H21V10.7383ZM52.5 17.7383V7.23828H42V10.7383H28V14.2383H42V17.7383H45.5V42.2383H42V45.7383H17.5V42.2383H14V28.2383H10.5V42.2383H7V52.7383H17.5V49.2383H42V52.7383H52.5V42.2383H49V17.7383H52.5ZM14 49.2383H10.5V45.7383H14V49.2383ZM49 49.2383H45.5V45.7383H49V49.2383ZM45.5 10.7383H49V14.2383H45.5V10.7383Z"
                  fill="#FFCB00"
                />
              </svg>
              <h1 className="text-lg">
                The package that you want from a range of fixed price options
                and an installation date that suits you.
              </h1>
              <div className="self-end mt-auto">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.2031 10.7289C30.4031 2.92891 17.6031 2.92891 9.80313 10.7289C2.00313 18.5289 2.00313 31.3289 9.80313 39.1289C17.6031 46.9289 30.2031 46.9289 38.0031 39.1289C45.8031 31.3289 46.0031 18.5289 38.2031 10.7289ZM29.6031 33.3289L24.0031 27.7289L18.4031 33.3289L15.6031 30.5289L21.2031 24.9289L15.6031 19.3289L18.4031 16.5289L24.0031 22.1289L29.6031 16.5289L32.4031 19.3289L26.8031 24.9289L32.4031 30.5289L29.6031 33.3289Z"
                    fill="#212121"
                  />
                </svg>
              </div>
            </div>
          }
        />
        {/* Card Two */}
        <FlipCard
          frontContent={
            <div className=" flex flex-col gap-2 h-full">
              <svg
                width="56"
                height="57"
                viewBox="0 0 56 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.5 20L23.8 37.5L17.5 30.5"
                  stroke="#FFCB00"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M43.75 7.75H12.25C9.35051 7.75 7 10.1005 7 13V44.5C7 47.3995 9.35051 49.75 12.25 49.75H43.75C46.6495 49.75 49 47.3995 49 44.5V13C49 10.1005 46.6495 7.75 43.75 7.75Z"
                  stroke="#FFCB00"
                  stroke-width="3.5"
                  stroke-linejoin="round"
                />
              </svg>

              <h1 className="text-lg">
                <span className="font-semibold">You pick</span> the package that
                you want from a range of options.
              </h1>
              <svg
                className="mt-auto self-end"
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 3.23828C18.4514 3.30561 13.149 5.53971 9.2252 9.46348C5.30143 13.3872 3.06732 18.6896 3 24.2383C3.06732 29.7869 5.30143 35.0893 9.2252 39.0131C13.149 42.9368 18.4514 45.171 24 45.2383C29.5486 45.171 34.851 42.9368 38.7748 39.0131C42.6986 35.0893 44.9327 29.7869 45 24.2383C44.9327 18.6896 42.6986 13.3872 38.7748 9.46348C34.851 5.53971 29.5486 3.30561 24 3.23828ZM36 25.7383H25.5V36.2383H22.5V25.7383H12V22.7383H22.5V12.2383H25.5V22.7383H36V25.7383Z"
                  fill="#FFCB00"
                />
              </svg>
            </div>
          }
          backContent={
            <div className=" flex flex-col gap-2 h-full">
              <svg
                width="25"
                height="25"
                viewBox="0 0 56 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10.7383H14V3.73828H10.5V10.7383H3.5V14.2383H10.5V21.2383H14V14.2383H21V10.7383ZM52.5 17.7383V7.23828H42V10.7383H28V14.2383H42V17.7383H45.5V42.2383H42V45.7383H17.5V42.2383H14V28.2383H10.5V42.2383H7V52.7383H17.5V49.2383H42V52.7383H52.5V42.2383H49V17.7383H52.5ZM14 49.2383H10.5V45.7383H14V49.2383ZM49 49.2383H45.5V45.7383H49V49.2383ZM45.5 10.7383H49V14.2383H45.5V10.7383Z"
                  fill="#FFCB00"
                />
              </svg>
              <h1 className="text-lg">
                Your chosen products, on your chosen date, using verified
                installers close to you.
              </h1>
              <div className="self-end mt-auto">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.2031 10.7289C30.4031 2.92891 17.6031 2.92891 9.80313 10.7289C2.00313 18.5289 2.00313 31.3289 9.80313 39.1289C17.6031 46.9289 30.2031 46.9289 38.0031 39.1289C45.8031 31.3289 46.0031 18.5289 38.2031 10.7289ZM29.6031 33.3289L24.0031 27.7289L18.4031 33.3289L15.6031 30.5289L21.2031 24.9289L15.6031 19.3289L18.4031 16.5289L24.0031 22.1289L29.6031 16.5289L32.4031 19.3289L26.8031 24.9289L32.4031 30.5289L29.6031 33.3289Z"
                    fill="#212121"
                  />
                </svg>
              </div>
            </div>
          }
        />
        {/* Card three */}
        <FlipCard
          frontContent={
            <div className=" flex flex-col gap-2 h-full">
              <svg
                width="56"
                height="57"
                viewBox="0 0 56 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4998 24.2096V35.8763C10.4998 40.277 10.4998 42.475 11.8671 43.8423C12.9661 44.9436 14.6065 45.1583 17.4998 45.2003M45.4998 24.2096V35.8763C45.4998 40.277 45.4998 42.475 44.1325 43.8423C43.0335 44.9436 41.3931 45.1583 38.4998 45.2003M30.3331 33.543L24.2805 40.6993C23.5408 41.656 23.1721 42.1366 23.4008 42.5076C23.6295 42.8763 24.2945 42.8763 25.6268 42.8763H30.3728C31.7028 42.8763 32.3701 42.8763 32.5988 43.245C32.8275 43.616 32.4588 44.0943 31.7191 45.0533L25.6291 52.2096M23.3331 5.54297L20.9998 24.2096M32.6665 5.54297L34.9998 24.2096M9.33313 14.8763H46.6665M9.25379 14.405L10.6608 11.136C11.8298 8.4223 12.4131 7.0643 13.5588 6.30597C14.7045 5.54297 16.1628 5.54297 19.0795 5.54297H36.9201C39.8368 5.54297 41.2951 5.54297 42.4408 6.30364C43.5841 7.0643 44.1698 8.4223 45.3388 11.1336L46.7458 14.405C48.6521 18.829 49.6041 21.041 48.5845 22.6253C47.5648 24.2096 45.1871 24.2096 40.4318 24.2096H15.5655C10.8125 24.2096 8.43479 24.2096 7.41513 22.6253C6.39546 21.041 7.34746 18.829 9.25379 14.405Z"
                  stroke="#FFCB00"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1 className="text-lg">
                <span className="font-semibold">We fit </span> your chosen
                products, on your chosen date, using verified installers close
                to you.
              </h1>
              <svg
                className="mt-auto self-end"
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 3.23828C18.4514 3.30561 13.149 5.53971 9.2252 9.46348C5.30143 13.3872 3.06732 18.6896 3 24.2383C3.06732 29.7869 5.30143 35.0893 9.2252 39.0131C13.149 42.9368 18.4514 45.171 24 45.2383C29.5486 45.171 34.851 42.9368 38.7748 39.0131C42.6986 35.0893 44.9327 29.7869 45 24.2383C44.9327 18.6896 42.6986 13.3872 38.7748 9.46348C34.851 5.53971 29.5486 3.30561 24 3.23828ZM36 25.7383H25.5V36.2383H22.5V25.7383H12V22.7383H22.5V12.2383H25.5V22.7383H36V25.7383Z"
                  fill="#FFCB00"
                />
              </svg>
            </div>
          }
          backContent={
            <div className=" flex flex-col gap-2 h-full">
              <svg
                width="25"
                height="25"
                viewBox="0 0 56 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10.7383H14V3.73828H10.5V10.7383H3.5V14.2383H10.5V21.2383H14V14.2383H21V10.7383ZM52.5 17.7383V7.23828H42V10.7383H28V14.2383H42V17.7383H45.5V42.2383H42V45.7383H17.5V42.2383H14V28.2383H10.5V42.2383H7V52.7383H17.5V49.2383H42V52.7383H52.5V42.2383H49V17.7383H52.5ZM14 49.2383H10.5V45.7383H14V49.2383ZM49 49.2383H45.5V45.7383H49V49.2383ZM45.5 10.7383H49V14.2383H45.5V10.7383Z"
                  fill="#FFCB00"
                />
              </svg>
              <h1 className="text-lg">
                Some details about your home and it’s current set up. It’s super
                straight forward, nothing complex.
              </h1>
              <div className="self-end mt-auto">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.2031 10.7289C30.4031 2.92891 17.6031 2.92891 9.80313 10.7289C2.00313 18.5289 2.00313 31.3289 9.80313 39.1289C17.6031 46.9289 30.2031 46.9289 38.0031 39.1289C45.8031 31.3289 46.0031 18.5289 38.2031 10.7289ZM29.6031 33.3289L24.0031 27.7289L18.4031 33.3289L15.6031 30.5289L21.2031 24.9289L15.6031 19.3289L18.4031 16.5289L24.0031 22.1289L29.6031 16.5289L32.4031 19.3289L26.8031 24.9289L32.4031 30.5289L29.6031 33.3289Z"
                    fill="#212121"
                  />
                </svg>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}

import { useState } from "react";
const FlipCard = ({
  frontContent,
  backContent,
}: {
  frontContent: any;
  backContent: any;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="h-80 w-80 perspective" onClick={handleFlip}>
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
          isFlipped ? "transform-rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden shadow-lg rounded-3xl py-12 px-10 bg-[#FBF4D8]">
          {frontContent}
        </div>
        <div className="absolute w-full h-full backface-hidden shadow-lg rounded-3xl transform-rotate-y-180 py-12 px-10 bg-primary">
          {backContent}
        </div>
      </div>
    </div>
  );
};
