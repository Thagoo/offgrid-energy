import Button from "@/components/common/button";
import Card from "@/components/common/card";
import IconCard from "@/components/common/icon-card";
import CardOverlay from "@/components/landing-page/card-overlay";
import DrawDemo from "@/components/landing-page/draw-demo";
import OurApproach from "@/components/landing-page/our-approach";

import Pills from "@/components/landing-page/pills";
import SolarAdviceSection from "@/components/landing-page/solar-advice-section";
import Ticker from "@/components/landing-page/ticker";

import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-4">
      <Navbar />
      <div className="flex flex-col items-center pt-10 mt-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-3xl text-sm">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99968 1.33398H6.16264C6.04298 1.33398 5.98316 1.33398 5.93034 1.3522C5.88363 1.36831 5.84109 1.39461 5.80579 1.42918C5.76587 1.46827 5.73912 1.52178 5.68561 1.6288L2.88561 7.2288C2.75782 7.48438 2.69393 7.61216 2.70927 7.71604C2.72268 7.80674 2.77285 7.88792 2.84798 7.94047C2.93403 8.00065 3.0769 8.00065 3.36264 8.00065H7.49968L5.49968 14.6673L13.6284 6.23752C13.9027 5.95312 14.0398 5.81092 14.0478 5.68924C14.0548 5.58362 14.0112 5.48097 13.9303 5.41267C13.8371 5.33398 13.6396 5.33398 13.2445 5.33398H8.49968L9.99968 1.33398Z"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Start Saving today!
          </span>
          <h1 className="text-2xl md:text-7xl font-medium text-center">
            Don't overpay <br className="my-2" /> for Solar
          </h1>
          <p className=" text-[#868687] text-xs md:text-lg text-center font-light leading-6">
            Get fixed price for your solar panels all online. <br /> Offgrid
            install solar in all new way.
          </p>
        </div>

        <Button className="text-1xl font-normal"> Get your quote now</Button>

        <div className="relative px-5 md:w-auto w-screen">
          <CardOverlay />
          <Image
            alt="hero"
            src={"/assets/lander/banner/hero.svg"}
            width={780}
            height={477}
          />
        </div>
        <p className="md:text-lg text-gray-600 font-normal text-center mt-[108px]">
          Brands we work with
        </p>
        <div className="flex">
          <Ticker />
        </div>
        <div className="text-center md:h-screen h-[50vh] max-w-screen md:w-full flex flex-col items-center justify-center gap-4 bg-[#f0f0f0] bg-[url('/assets/lander/banner/bg-lines.svg')]">
          <p className="text-lg md:text-5xl leading-none">
            We're an <span className="text-[#1D7739]">all inclusive</span>{" "}
            <br />
            solar platform
          </p>
          <p className="text-[#868687] font-normal text-xs md:text-xl ">
            Get solar panels, plus a lot more, for a lot less
          </p>
          <Pills />
        </div>

        <div className="relative md:h-screen h-[50vh] flex items-center bg-[#F4F4F4] md:w-full w-screen justify-center px-5">
          <DrawDemo />
        </div>
        <div className="w-auto py-16 md:py-20 md:px-40 px-5">
          <h1 className="md:text-[3rem] text-lg font-medium text-center leading-none mb-4 md:mb-20">
            Here&rsquo;s how your switch <br /> to solar would look like
          </h1>
          {/* step one */}
          <section className="flex gap-5 relative pb-40">
            <span
              className="absolute top-8 md:left-8 left-4 h-full w-0.5 bg-primary z-0"
              aria-hidden="true"
            />
            <div className="z-40">
              <span className="md:h-16 md:w-16 h-8 w-8 rounded-full flex items-center justify-center bg-primary ">
                <h1
                  className="md:text-4xl text-lg text-black self-center flex"
                  aria-hidden="true"
                >
                  1
                </h1>
              </span>
            </div>
            <div className="flex flex-1 flex-col md:flex-row justify-between md:space-x-4 lg:mb-32 ">
              <div className="max-w-lg">
                <p className="md:text-4xl text-[32px]leading-none">
                  Personalised quote.
                </p>
                <div className="flex flex-col">
                  <div className="flex mt-4">
                    <dt className=" text-base font-light leading-7 text-gray-900 flex-row ">
                      <div className=" flex flex-col">
                        <p>
                          Every Offgrid installation starts with an easy to use
                          and free online tool to help better understand whether
                          solar is right for you
                        </p>
                        <p className="mt-4 font-bold">Here’s what we need:</p>
                        <ul className="mt-4  list-disc ml-6">
                          <li>Where is your home? </li>
                          <li>Your roof marking.</li>
                          <li>What is your electricity use?</li>
                        </ul>
                        <p className="mt-4">
                          <b className="font-bold">Estimated time:</b> 5 minutes
                        </p>
                        <p className="mt-4">
                          You get an instant quote with prices and products.
                        </p>
                      </div>
                    </dt>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={"/assets/lander/process-section/image-1.png"}
                  alt="image 1"
                  width={504}
                  height={289}
                />
              </div>
            </div>
          </section>
          {/* step two */}
          <section className="flex gap-5 relative pb-40">
            <span
              className="absolute top-8 md:left-8 left-4 h-full w-0.5 bg-primary z-0"
              aria-hidden="true"
            />
            <div className="z-40">
              <span className="md:h-16 md:w-16 h-8 w-8 rounded-full flex items-center justify-center bg-primary ">
                <h1
                  className="md:text-4xl text-lg text-black self-center flex"
                  aria-hidden="true"
                >
                  2
                </h1>
              </span>
            </div>
            <div className="flex flex-1 flex-col md:flex-row justify-between md:space-x-4 lg:mb-32 ">
              <div className="max-w-lg">
                <p className="md:text-4xl text-[32px]leading-none">
                  Choose a package
                </p>
                <div className="flex flex-col">
                  <div className="flex mt-4">
                    <dt className=" text-base font-light leading-7 text-gray-900 flex-row ">
                      <div className=" flex flex-col">
                        <p>
                          Offgrid now has a digital sketch of your roof along
                          with all parameters including sunshine hours and
                          temperature. We use this data to give the best product
                          recommendations at different price points to suit your
                          affordability.
                        </p>
                        <p className="mt-4 font-bold">
                          Here’s what’s included in the package:{" "}
                        </p>
                        <ul className="mt-4  list-disc ml-6">
                          <li>Panel + Inverter + Cabling </li>
                          <li>Meters + Mounts</li>
                          <li>Installation</li>
                          <li>1 Year free service</li>
                        </ul>
                      </div>
                    </dt>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={"/assets/lander/process-section/image-2.png"}
                  alt="image 1"
                  width={504}
                  height={289}
                />
              </div>
            </div>
          </section>
          {/* step three */}
          <section className="flex gap-5 relative pb-40">
            <span
              className="absolute top-8 md:left-8 left-4 h-full w-0.5 bg-primary z-0"
              aria-hidden="true"
            />
            <div className="z-40">
              <span className="md:h-16 md:w-16 h-8 w-8 rounded-full flex items-center justify-center bg-primary ">
                <h1
                  className="md:text-4xl text-lg text-black self-center flex"
                  aria-hidden="true"
                >
                  3
                </h1>
              </span>
            </div>
            <div className="flex flex-1 flex-col md:flex-row justify-between md:space-x-4 lg:mb-32 ">
              <div className="max-w-lg">
                <p className="md:text-4xl text-[32px]leading-none">
                  Approval and Installation
                </p>
                <div className="flex flex-col">
                  <div className="flex mt-4">
                    <dt className=" text-base font-light leading-1 text-gray-900 flex-row ">
                      <div className=" flex flex-col">
                        <p>
                          We work with energy experts to make sure your solar is
                          installed perfectly and efficiently. And we stay in
                          close contact with you at every step so you're always
                          in the loop.
                        </p>
                        <p className="mt-4 font-bold">
                          Let us do the heavy lifting:
                        </p>
                        <ul className="mt-4  list-disc ml-6">
                          <li>System Design and Planning: 1 week </li>
                          <li>DISCOM Approval: 3 to 4 weeks</li>
                          <li>Installation: 1 Day</li>
                        </ul>
                        <p className="mt-4 font-bold">
                          Extra guarantees on your installation:
                        </p>
                        <ul className="mt-4  list-disc ml-6">
                          <li>
                            Wind / Rain storm proofing and sturdy structure that
                            take winds up to 170km/h.
                          </li>
                          <li>
                            ₹ 1 Lakhs guarantee on water leakage with chemical
                            anchoring.
                          </li>
                        </ul>
                      </div>
                    </dt>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={"/assets/lander/process-section/image-3.png"}
                  alt="image 1"
                  width={504}
                  height={289}
                />
              </div>
            </div>
          </section>
          {/* step four */}
          <section className="flex gap-5 relative">
            <span
              className="absolute top-8 md:left-8 left-4 h-full w-0.5 bg-primary z-0"
              aria-hidden="true"
            />
            <div className="z-40">
              <span className="md:h-16 md:w-16 h-8 w-8 rounded-full flex items-center justify-center bg-primary ">
                <h1
                  className="md:text-4xl text-lg text-black self-center flex"
                  aria-hidden="true"
                >
                  4
                </h1>
              </span>
            </div>
            <div className="flex flex-1 flex-col md:flex-row justify-between md:space-x-4 lg:mb-32 ">
              <div className="max-w-lg">
                <p className="md:text-4xl text-[32px]leading-none">
                  Your power visualised
                </p>
                <div className="flex flex-col">
                  <div className="flex mt-4">
                    <dt className=" text-base font-light leading-1 text-gray-900 flex-row ">
                      <div className=" flex flex-col">
                        <p>
                          Once your solar is installed, we'll make sure your
                          home is powered, protected, and fully optimised.
                        </p>
                        <p className="mt-4 font-bold">
                          Here’s everything we take care of:
                        </p>
                        <ul className="mt-4  list-disc ml-6">
                          <li>Electricity production / consumption</li>
                          <li>Bill payments </li>
                          <li>Auto-scheduled maintenance.</li>
                        </ul>
                      </div>
                    </dt>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={"/assets/lander/process-section/image-4.png"}
                  alt="image 1"
                  width={504}
                  height={289}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
