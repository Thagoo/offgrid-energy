"use client";
import Image from "next/image";
import { useState } from "react";

export default function OurApproach() {
  const [activeBtn, setActiveBtn] = useState<number>(1);
  const [isContentVisible, setIsContentVisible] = useState(true);

  const handleToggle = (btn: number) => {
    if (btn === activeBtn) return;
    setIsContentVisible(false);
    setTimeout(() => {
      setIsContentVisible(true);
      setActiveBtn(btn);
    }, 500); // Match the duration of the transition
  };

  return (
    <>
      <div className="h-auto w-full py-16 space-y-4 md:space-y-16">
        <h1 className="text-center text-3xl md:text-5xl md:tracking-[-2px]">
          Our approach
        </h1>
        <div className="px-5 md:px-20 flex md:flex-row flex-col gap-5">
          {/* Collumn one */}
          <div className="flex flex-col w-full md:w-1/2 gap-3 md:gap-8">
            {/* button one */}
            <div
              className={`${
                activeBtn === 1 ? "bg-white rounded-3xl drop-shadow-lg" : ""
              } px-4 py-4 md:py-6 flex items-center gap-4 md:gap-8`}
              onClick={() => handleToggle(1)}
            >
              <div
                className={`rounded-full flex justify-center items-center p-2 ${
                  activeBtn === 1 ? "bg-primary" : "bg-white"
                }`}
              >
                <Image
                  src={"/assets/lander/icons/approach/icon-1.svg"}
                  alt="thunder"
                  width={64}
                  height={64}
                />
              </div>
              <div className="space-y-2 md:space-y-6">
                <h1 className="text-sm md:text-2xl font-semibold ">
                  Expertise at each step
                </h1>
                <p className="text-xs md:text-sm text-normal">
                  We work the best in energy, from system designers to highly-
                  vetted and certified electricians
                </p>
              </div>
            </div>
            {/* mobile content one */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                isContentVisible ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {activeBtn === 1 && (
                <div className="w-full md:w-1/2 md:hidden flex flex-col gap-4 md:text-base text-xs px-5 md:px-0">
                  <p>
                    Getting solar is often considered a long and complex
                    process. We bring the best team of every field to make your
                    solar journey easier and faster.
                  </p>
                  <Image
                    alt="image-1"
                    width={619}
                    height={288}
                    src={"/assets/lander/approach/image-1.png"}
                    className="rounded-3xl"
                  />
                  <p>
                    At Offgrid, we pride ourselves on delivering a perfect solar
                    journey through expertise, precision, and ongoing support.
                    By integrating advanced technology with a dedicated team of
                    professionals, we ensure that your transition to solar
                    energy is smooth, efficient, and beneficial for the long
                    term.
                  </p>
                </div>
              )}
            </div>
            {/* button two */}
            <div
              className={`${
                activeBtn === 2 ? "bg-white rounded-3xl drop-shadow-lg" : ""
              } px-4 py-6 flex items-center gap-4 md:gap-8`}
              onClick={() => handleToggle(2)}
            >
              <div
                className={`rounded-full flex justify-center items-center p-2 ${
                  activeBtn === 2 ? "bg-primary" : "bg-white"
                }`}
              >
                <Image
                  src={"/assets/lander/icons/approach/icon-2.svg"}
                  alt="thunder"
                  width={64}
                  height={64}
                />
              </div>
              <div className="space-y-2 md:space-y-6">
                <h1 className="text-sm md:text-2xl font-semibold ">
                  Inventory on demand
                </h1>
                <p className="text-xs md:text-sm text-normal">
                  Secure top- rated solar and battery hardware without the wait
                  and a seamless, stress- free installation
                </p>
              </div>
            </div>
            {/* mobile Content two */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                isContentVisible ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {activeBtn === 2 && (
                <div className="w-full md:w-1/2 md:hidden flex flex-col gap-4 md:text-base text-xs px-5 md:px-0">
                  <p>
                    Offgrid offers inventory on demand with zero bias towards
                    current stock.
                  </p>
                  <Image
                    alt="image-1"
                    width={619}
                    height={288}
                    src={"/assets/lander/approach/image-2.svg"}
                  />
                  <p>
                    Our AI-driven analysis evaluates every aspect of your
                    installation, identifying the best products to meet your
                    specific needs. With partnerships with top verified solar
                    installers, we ensure you receive the optimal products and
                    the highest quality installation for a perfect solar
                    journey.
                  </p>
                </div>
              )}
            </div>
            {/* button three */}
            <div
              className={`${
                activeBtn === 3 ? "bg-white rounded-3xl drop-shadow-lg" : ""
              } px-4 py-6 flex items-center gap-4 md:gap-8`}
              onClick={() => handleToggle(3)}
            >
              <div
                className={`rounded-full flex justify-center items-center p-2 ${
                  activeBtn === 3 ? "bg-primary" : "bg-white"
                }`}
              >
                <Image
                  src={"/assets/lander/icons/approach/icon-3.svg"}
                  alt="thunder"
                  width={64}
                  height={64}
                />
              </div>
              <div className="space-y-2 md:space-y-6">
                <h1 className="text-sm md:text-2xl font-semibold ">
                  Responsive service
                </h1>
                <p className="text-xs md:text-sm text-normal">
                  Get a dedicated project manager to deliver detailed updates on
                  your install and ongoing system support
                </p>
              </div>
            </div>
            {/* Mobile Content three */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                isContentVisible ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {activeBtn === 3 && (
                <div className="w-full md:w-1/2 md:hidden flex flex-col gap-4 md:text-base text-xs px-5 md:px-0">
                  <p>
                    Offgrid combines advanced technology with dedicated managers
                    to deliver a responsive and efficient support service.
                  </p>
                  <Image
                    alt="image-3"
                    width={619}
                    height={288}
                    src={"/assets/lander/approach/image-3.svg"}
                  />
                  <p>
                    By continuously analyzing energy production and consumption,
                    auto-scheduling maintenance, and providing instant support
                    through the Offgrid app, it ensures that your solar system
                    operates seamlessly. With Offgrid, you can enjoy the
                    benefits of affordable and clean, renewable energy without
                    the hassle of manual maintenance and monitoring.
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* Collumn two */}
          {/* Desktop Content */}
          {activeBtn === 1 && (
            <div className="w-full md:w-1/2 hidden md:flex flex-col gap-4">
              <p>
                Getting solar is often considered a long and complex process. We
                bring the best team of every field to make your solar journey
                easier and faster.
              </p>
              <Image
                alt="image-1"
                width={619}
                height={288}
                src={"/assets/lander/approach/image-1.png"}
                className="rounded-3xl"
              />
              <p>
                At Offgrid, we pride ourselves on delivering a perfect solar
                journey through expertise, precision, and ongoing support. By
                integrating advanced technology with a dedicated team of
                professionals, we ensure that your transition to solar energy is
                smooth, efficient, and beneficial for the long term.
              </p>
            </div>
          )}
          {activeBtn === 2 && (
            <div className="w-full md:w-1/2 hidden md:flex flex-col gap-4">
              <p>
                Offgrid offers inventory on demand with zero bias towards
                current stock.
              </p>
              <Image
                alt="image-1"
                width={619}
                height={288}
                src={"/assets/lander/approach/image-2.svg"}
              />
              <p>
                Our AI-driven analysis evaluates every aspect of your
                installation, identifying the best products to meet your
                specific needs. With partnerships with top verified solar
                installers, we ensure you receive the optimal products and the
                highest quality installation for a perfect solar journey.
              </p>
            </div>
          )}
          {activeBtn === 3 && (
            <div className="w-full md:w-1/2 hidden md:flex flex-col gap-4">
              <p>
                Offgrid combines advanced technology with dedicated managers to
                deliver a responsive and efficient support service.
              </p>
              <Image
                alt="image-3"
                width={619}
                height={288}
                src={"/assets/lander/approach/image-3.svg"}
              />
              <p>
                By continuously analyzing energy production and consumption,
                auto-scheduling maintenance, and providing instant support
                through the Offgrid app, it ensures that your solar system
                operates seamlessly. With Offgrid, you can enjoy the benefits of
                affordable and clean, renewable energy without the hassle of
                manual maintenance and monitoring.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
