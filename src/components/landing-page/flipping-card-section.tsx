"use client";
import React from "react";

export default function FlippingCardSection() {
  return (
    <div
      className="h-auto w-full flex flex-col gap-8 md:gap-16 py-16 md:py-28 md:px-20 px-5"
      id="solar-installation"
    >
      <div className="flex flex-col gap-3 md:gap-3">
        <h1 className="text-2xl md:text-[3rem] font-medium text-center leading-tight">
          Solar installations <br />
          without salesmen.
        </h1>
        <p className="text-[#868687] text-sm md:text-lg text-center">
          Get a fixed price online with fast installation service.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-5 md:gap-4">
        {/* Card One */}
        <FlipCard
          frontContent={
            <div className="flex flex-col gap-2 h-full cursor-pointer">
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
              <h1 className="md:text-lg">
                <span className="font-semibold">You provide </span>some details
                about your home and it&apos;s current set up.{" "}
              </h1>
              <svg
                className="mt-auto self-end"
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.40625"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#FFCB00"
                />
                <path
                  d="M13.3345 26.1562C13.0082 25.5824 12.9222 24.9027 13.0952 24.2656C13.2681 23.6285 13.6861 23.0857 14.2578 22.7556C14.8295 22.4255 15.5086 22.3349 16.1468 22.5037C16.7851 22.6724 17.3306 23.0867 17.6645 23.6562L19.9995 27.4062V13.9062C19.9995 13.2432 20.2629 12.6073 20.7318 12.1385C21.2006 11.6696 21.8365 11.4062 22.4995 11.4062C23.1626 11.4062 23.7985 11.6696 24.2673 12.1385C24.7361 12.6073 24.9995 13.2432 24.9995 13.9062V20.9062C24.9995 20.2432 25.2629 19.6073 25.7318 19.1385C26.2006 18.6696 26.8365 18.4062 27.4995 18.4062C28.1626 18.4062 28.7985 18.6696 29.2673 19.1385C29.7361 19.6073 29.9995 20.2432 29.9995 20.9062V22.9062C29.9995 22.2432 30.2629 21.6073 30.7318 21.1385C31.2006 20.6696 31.8365 20.4062 32.4995 20.4062C33.1626 20.4062 33.7985 20.6696 34.2673 21.1385C34.7361 21.6073 34.9995 22.2432 34.9995 22.9062V27.4062C34.9995 28.7195 34.7409 30.0198 34.2383 31.2331C33.7358 32.4463 32.9992 33.5487 32.0706 34.4773C31.142 35.4059 30.0396 36.1425 28.8264 36.645C27.6131 37.1476 26.3127 37.4062 24.9995 37.4062C19.477 37.4062 18.0233 34.4062 13.3345 26.1562Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          }
          backContent={
            <div className=" flex flex-col gap-2 h-full cursor-pointer">
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
              <h1 className="md:text-lg">
                Using our online quote generator, mark your home and provide a
                few details.
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
            <div className=" flex flex-col gap-2 h-full cursor-pointer">
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

              <h1 className="md:text-lg">
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
                <rect
                  y="0.40625"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#FFCB00"
                />
                <path
                  d="M13.3345 26.1562C13.0082 25.5824 12.9222 24.9027 13.0952 24.2656C13.2681 23.6285 13.6861 23.0857 14.2578 22.7556C14.8295 22.4255 15.5086 22.3349 16.1468 22.5037C16.7851 22.6724 17.3306 23.0867 17.6645 23.6562L19.9995 27.4062V13.9062C19.9995 13.2432 20.2629 12.6073 20.7318 12.1385C21.2006 11.6696 21.8365 11.4062 22.4995 11.4062C23.1626 11.4062 23.7985 11.6696 24.2673 12.1385C24.7361 12.6073 24.9995 13.2432 24.9995 13.9062V20.9062C24.9995 20.2432 25.2629 19.6073 25.7318 19.1385C26.2006 18.6696 26.8365 18.4062 27.4995 18.4062C28.1626 18.4062 28.7985 18.6696 29.2673 19.1385C29.7361 19.6073 29.9995 20.2432 29.9995 20.9062V22.9062C29.9995 22.2432 30.2629 21.6073 30.7318 21.1385C31.2006 20.6696 31.8365 20.4062 32.4995 20.4062C33.1626 20.4062 33.7985 20.6696 34.2673 21.1385C34.7361 21.6073 34.9995 22.2432 34.9995 22.9062V27.4062C34.9995 28.7195 34.7409 30.0198 34.2383 31.2331C33.7358 32.4463 32.9992 33.5487 32.0706 34.4773C31.142 35.4059 30.0396 36.1425 28.8264 36.645C27.6131 37.1476 26.3127 37.4062 24.9995 37.4062C19.477 37.4062 18.0233 34.4062 13.3345 26.1562Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          }
          backContent={
            <div className=" flex flex-col gap-2 h-full cursor-pointer">
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
              <h1 className="md:text-lg">
                With the data you&apos;ve provided we give you a fixed quote
                based on different plans.
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
            <div className=" flex flex-col gap-2 h-full cursor-pointer">
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

              <h1 className="md:text-lg">
                <span className="font-semibold">We fit </span> your chosen
                products, on your chosen date.
              </h1>
              <svg
                className="mt-auto self-end"
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.40625"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#FFCB00"
                />
                <path
                  d="M13.3345 26.1562C13.0082 25.5824 12.9222 24.9027 13.0952 24.2656C13.2681 23.6285 13.6861 23.0857 14.2578 22.7556C14.8295 22.4255 15.5086 22.3349 16.1468 22.5037C16.7851 22.6724 17.3306 23.0867 17.6645 23.6562L19.9995 27.4062V13.9062C19.9995 13.2432 20.2629 12.6073 20.7318 12.1385C21.2006 11.6696 21.8365 11.4062 22.4995 11.4062C23.1626 11.4062 23.7985 11.6696 24.2673 12.1385C24.7361 12.6073 24.9995 13.2432 24.9995 13.9062V20.9062C24.9995 20.2432 25.2629 19.6073 25.7318 19.1385C26.2006 18.6696 26.8365 18.4062 27.4995 18.4062C28.1626 18.4062 28.7985 18.6696 29.2673 19.1385C29.7361 19.6073 29.9995 20.2432 29.9995 20.9062V22.9062C29.9995 22.2432 30.2629 21.6073 30.7318 21.1385C31.2006 20.6696 31.8365 20.4062 32.4995 20.4062C33.1626 20.4062 33.7985 20.6696 34.2673 21.1385C34.7361 21.6073 34.9995 22.2432 34.9995 22.9062V27.4062C34.9995 28.7195 34.7409 30.0198 34.2383 31.2331C33.7358 32.4463 32.9992 33.5487 32.0706 34.4773C31.142 35.4059 30.0396 36.1425 28.8264 36.645C27.6131 37.1476 26.3127 37.4062 24.9995 37.4062C19.477 37.4062 18.0233 34.4062 13.3345 26.1562Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          }
          backContent={
            <div className=" flex flex-col gap-2 h-full cursor-pointer">
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
              <h1 className="md:text-lg">
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
    <div className="h-60 md:h-72 w-full perspective" onClick={handleFlip}>
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
          isFlipped ? "transform-rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden shadow-lg rounded-3xl py-8 px-10 bg-[#FBF4D8]">
          {frontContent}
        </div>
        <div className="absolute w-full h-full backface-hidden shadow-lg rounded-3xl transform-rotate-y-180 py-8 px-10 bg-primary">
          {backContent}
        </div>
      </div>
    </div>
  );
};
