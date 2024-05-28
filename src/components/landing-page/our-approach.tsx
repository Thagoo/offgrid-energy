"use client";
import Image from "next/image";
import { useState } from "react";

export default function OurApproach() {
  const [activeBtn, setActiveBtn] = useState<number>(1);

  return (
    <>
      <div className="w-full bg-[#F4F4F4] py-24 space-y-16">
        {" "}
        <h1 className="text-center text-5xl tracking-[-2px]">Our approach</h1>
        <div className="px-20 py-12 h-screen flex gap-5">
          {/* Collumn one */}
          <div className="flex flex-col w-1/2 gap-8">
            <div
              className={`${
                activeBtn === 1 ? "bg-white rounded-3xl drop-shadow-lg" : ""
              } px-4 py-6 flex items-center gap-8`}
              onClick={() => setActiveBtn(1)}
            >
              <div
                className={`rounded-full flex justify-center items-center p-2 ${
                  activeBtn === 1 ? "bg-primary" : "bg-white"
                }`}
              >
                <Image
                  src={"/assets/lander/icons/approach/icon-1.svg"}
                  alt="thunder"
                  width={48}
                  height={48}
                />
              </div>
              <div className="space-y-6 ">
                <h1 className="text-2xl font-semibold ">
                  Expertise at each step
                </h1>
                <p className="text-sm text-normal">
                  We work the best in energy, from system designers to highly-
                  vetted and certified electricians
                </p>
              </div>
            </div>

            <div
              className={`${
                activeBtn === 2 ? "bg-white rounded-3xl drop-shadow-lg" : ""
              } px-4 py-6 flex items-center gap-8`}
              onClick={() => setActiveBtn(2)}
            >
              <div
                className={`rounded-full flex justify-center items-center p-2 ${
                  activeBtn === 2 ? "bg-primary" : "bg-white"
                }`}
              >
                <Image
                  src={"/assets/lander/icons/approach/icon-2.svg"}
                  alt="thunder"
                  width={48}
                  height={48}
                />
              </div>
              <div className="space-y-6 ">
                <h1 className="text-2xl font-semibold">Inventory on demand</h1>
                <p className="text-sm font-normal">
                  Secure top- rated solar and battery hardware without the wait
                  and a seamless, stress- free installation
                </p>
              </div>
            </div>
            <div
              className={`${
                activeBtn === 3 ? "bg-white rounded-3xl drop-shadow-lg" : ""
              } px-4 py-6 flex items-center gap-8`}
              onClick={() => setActiveBtn(3)}
            >
              <div
                className={`rounded-full flex justify-center items-center p-2 ${
                  activeBtn === 3 ? "bg-primary" : "bg-white"
                }`}
              >
                <Image
                  src={"/assets/lander/icons/approach/icon-3.svg"}
                  alt="thunder"
                  width={48}
                  height={48}
                />
              </div>
              <div className="space-y-6 ">
                <h1 className="text-2xl font-semibold">Responsive service</h1>
                <p className="text-sm font-normal">
                  Get a dedicated project manager to deliver detailed updates on
                  your install and ongoing system support
                </p>
              </div>
            </div>
          </div>

          {/* Collumn two */}
          {activeBtn === 1 && (
            <div className="w-1/2 flex flex-col gap-4">
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
            <div className="w-1/2 flex flex-col gap-4">
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
            <div
              className={`w-1/2 flex-col gap-4 transition-all ease-in-out duration-1000 ${
                activeBtn === 3 ? "flex opacity-100" : "hidden opacity-0"
              }`}
            >
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
