import Button from "@/components/common/button";
import IconCard from "@/components/common/icon-card";
import ScrollAppear from "@/components/common/scroll-appear";
import AccordionSection from "@/components/landing-page/accordion-section";
import DrawDemo from "@/components/landing-page/draw-demo";
import FlippingCardSection from "@/components/landing-page/flipping-card-section";

import Pills from "@/components/landing-page/pills";
import ScrollerBanner from "@/components/landing-page/scroller-banner";
import SolarAdviceSection from "@/components/landing-page/solar-advice-section";
import SolarOnYourFingertips from "@/components/landing-page/solar-on-your-fingertips";
import Ticker from "@/components/landing-page/ticker";
import Navbar from "@/components/navbar";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-4">
      <Navbar />

      <div className="flex flex-col items-center pt-16 md:pt-28">
        <ScrollAppear>
          <div className="flex flex-col items-center justify-center gap-7 md:gap-14 md:px-20 px-5">
            <span className="flex items-center gap-1 bg-secondary px-4 py-2 md:py-2 md:px-4 rounded-3xl text-xs md:text-sm font-medium">
              <svg
                className="w-4 h-4 md:w-6 md:h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2515 2H8.49591C8.31643 2 8.22669 2 8.14746 2.02733C8.0774 2.05149 8.01358 2.09093 7.96064 2.14279C7.90076 2.20143 7.86063 2.2817 7.78036 2.44223L3.58036 10.8422C3.38868 11.2256 3.29284 11.4173 3.31587 11.5731C3.33597 11.7091 3.41122 11.8309 3.52393 11.9097C3.65299 12 3.8673 12 4.29591 12H10.5015L7.50148 22L19.6946 9.35531C20.1059 8.9287 20.3116 8.7154 20.3237 8.53288C20.3341 8.37446 20.2687 8.22049 20.1474 8.11803C20.0077 8 19.7113 8 19.1187 8H12.0015L14.2515 2Z"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              India&apos;s Solar Platform
            </span>
            {/* <div className="relative md:py-0">
            <img
              src={"/assets/lander/banner/hero.webp"}
              alt="draw demo"
              className="md:w-[1072px] md:h-auto hidden md:block"
            />
            <img
              src={"/assets/lander/banner/hero-mobile.png"}
              alt="draw demo"
              className="md:w-[341px] md:h-auto md:hidden"
            />
            <div className="flex flex-col md:justify-start justify-center items-center absolute top-10 left-20 md:top-10 md:left-20 gap-4 md:gap-7">
              <h1 className="md:text-start text-center text-2xl md:text-5xl text-white">
                Switch to <br className="md:block hidden" /> solar{" "}
                <br className="md:hidden" /> easily.
              </h1>
              <h2 className="md:text-start text-center text-white text-xs md:text-lg ">
                Get a fixed price all online. <br /> Offgrid installs solar in
                an all new way.
              </h2>
            </div>
          </div> */}
            <div className="flex bg-[url('/assets/lander/banner/hero-mobile.webp')] md:bg-[url('/assets/lander/banner/hero.webp')] rounded-3xl bg-cover bg-center bg-no-repeat h-[52vh] md:h-[60dvh] md:w-full">
              <div className="flex flex-col md:justify-center  md:items-start gap-4 md:gap-7 pt-8 md:pt-0 md:px-16 px-12">
                <h1 className="md:text-start text-center text-2xl font-medium md:text-5xl text-white">
                  Switch to <br className="md:block hidden" /> solar{" "}
                  <br className="md:hidden" /> easily.
                </h1>
                <h2 className="md:text-start text-center text-white text-sm md:text-lg ">
                  Get a fixed price online. <br /> Offgrid installs solar in an
                  all new way.
                </h2>
                <Button className="hidden md:block text-sm md:text-lg font-medium py-2 px-4 md:px-6 md:py-3">
                  {" "}
                  Get your quote now
                </Button>
              </div>
            </div>
            <Button className="md:hidden text-sm md:text-lg font-medium py-2 px-4 md:px-6 md:py-3">
              {" "}
              Get your quote now
            </Button>

            <ScrollerBanner />
          </div>
        </ScrollAppear>
        <ScrollAppear>
          <div className="md:pt-14 md:pb-8 py-10 w-full overflow-hidden flex flex-col gap-6">
            <p className="md:text-lg text-sm text-center">
              Brands we work with
            </p>

            <Ticker />
          </div>
        </ScrollAppear>
        <ScrollAppear>
          <div className="text-center md:h-screen h-[60vh] w-screen  md:w-full flex flex-col items-center justify-center gap-4 md:gap-16 bg-[#f0f0f0] bg-[url('/assets/lander/banner/bg-lines.svg')] md:px-20 px-5">
            <div className="flex flex-col gap-3 md:gap-4">
              <h1 className="text-2xl md:text-5xl leading-tight font-medium">
                We&apos;re an{" "}
                <span className="text-gray-600">all inclusive</span> <br />
                solar platform
              </h1>
              <p className="text-[#868687] font-normal text-sm md:text-xl ">
                Get solar panels, plus a lot more, for a lot less.
              </p>
            </div>
            <Pills />
          </div>
        </ScrollAppear>
        <ScrollAppear>
          {/* desktop */}
          <div className="hidden md:flex h-1/2 flex-col md:flex-row py-36 gap-4 md:px-20 px-5 w-full md:justify-between ">
            <div className="flex flex-col gap-14 items-start border-r-[1px] pr-4 w-2/5">
              <h1 className="font-medium md:text-5xl text-2xl leading-tight">
                India&apos;s first solar platform.
              </h1>
              <p>
                Don&apos;t waste time with salesmen. Get all you need for solar
                online. Just mark your roof and leave the rest to us.
              </p>
              <button className="rounded-full bg-primary px-10 py-4 md:text-lg font-medium">
                Get Quote
              </button>
            </div>

            <div className="flex flex-col items-center gap-8 w-3/5">
              <div className="flex gap-6 items-center">
                <h1 className="font-medium text-6xl">100%</h1>
                <div className="flex flex-col gap-2">
                  <p className="text-2xl text-nowrap font-medium leading-tight">
                    Guaranteed quality and price.
                  </p>
                  <p>
                    No middleman involvement guarantee. Original products at
                    original cost is our promise.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <AccordionSection />
              </div>
            </div>
          </div>

          {/* mobile */}
          <div className="md:hidden h-1/2 flex flex-col items-center py-16 md:px-20 px-7 gap-6">
            <div className="flex flex-col gap-4 items-center text-center">
              <h1 className="text-2xl md:text-5xl text-center font-medium leading-tight">
                India&apos;s first <br /> solar platform.
              </h1>
              <p className="text-sm text-start font-normal">
                Don&apos;t waste time with salesmen. Get all you need for solar
                online. Just mark your roof and leave the rest to us.
              </p>
            </div>
            <div>
              <AccordionSection />
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="flex items-center gap-2">
                <h1 className="font-medium text-5xl">100%</h1>
                <h1 className="text-lg font-medium leading-tight">
                  Guaranteed <br /> quality and price.
                </h1>
              </div>
              <p className="text-sm font-normal">
                No middleman involvement guarantee. Original products at
                original cost is our promise.
              </p>
            </div>
            <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium">
              Get Quote
            </button>
          </div>
        </ScrollAppear>
        <ScrollAppear>
          <div
            className="px-5 py-16 md:px-20 md:py-24 flex items-center bg-[#F4F4F4] md:w-full w-screen justify-center bg-[url('/assets/lander/banner/bg-lines.svg')]"
            id="draw-demo"
          >
            <DrawDemo />
          </div>
        </ScrollAppear>
        <ScrollAppear>
          <FlippingCardSection />
        </ScrollAppear>
        <ScrollAppear>
          <div
            className="bg-[#F4F4F4] h-auto md:px-20 px-5 py-20 flex flex-col gap-5 md:gap-16 w-screen md:w-full"
            id="paper-work"
          >
            <h1 className="md:text-[3rem] text-2xl font-medium text-center leading-tight">
              Seamless Paperwork and <br className="md:block hidden" />
              Unmatched Guarantees
            </h1>

            <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-10">
              <IconCard className="py-6 px-4 md:px-12 md:py-12 gap-5 md:gap-20 flex flex-col rounded-3xl">
                <div className="text-center space-y-3">
                  <h5 className="text-lg md:text-[1.44rem] font-medium">
                    We take care of all paperwork
                  </h5>
                  <p className="text-sm md:text-base font-normal">
                    Complete paperwork management done by us for easy
                    coordination with your local discom and a smooth application
                    for subsidy.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-full px-6 py-2 border-[1px] border-primary flex items-center gap-2 bg-[#F4F4F4]">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 5L5 6.5L10 1.5M7 1H2.9C2.05992 1 1.63988 1 1.31901 1.16349C1.03677 1.3073 0.8073 1.53677 0.66349 1.81901C0.5 2.13988 0.5 2.55992 0.5 3.4V7.6C0.5 8.44008 0.5 8.86012 0.66349 9.18099C0.8073 9.46323 1.03677 9.6927 1.31901 9.83651C1.63988 10 2.05992 10 2.9 10H7.1C7.94008 10 8.36012 10 8.68099 9.83651C8.96323 9.6927 9.1927 9.46323 9.33651 9.18099C9.5 8.86012 9.5 8.44008 9.5 7.6V5.5"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p className="md:text-base text-sm">
                      Sanctioned load verification
                    </p>
                  </div>
                  <div className="rounded-full px-6 py-2 border-[1px] border-primary flex items-center gap-2 bg-[#F4F4F4]">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 5L5 6.5L10 1.5M7 1H2.9C2.05992 1 1.63988 1 1.31901 1.16349C1.03677 1.3073 0.8073 1.53677 0.66349 1.81901C0.5 2.13988 0.5 2.55992 0.5 3.4V7.6C0.5 8.44008 0.5 8.86012 0.66349 9.18099C0.8073 9.46323 1.03677 9.6927 1.31901 9.83651C1.63988 10 2.05992 10 2.9 10H7.1C7.94008 10 8.36012 10 8.68099 9.83651C8.96323 9.6927 9.1927 9.46323 9.33651 9.18099C9.5 8.86012 9.5 8.44008 9.5 7.6V5.5"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p className="md:text-base text-sm">DISCOM Approval </p>
                  </div>
                  <div className="rounded-full px-6 py-2 border-[1px] border-primary flex items-center gap-2 bg-[#F4F4F4]">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 5L5 6.5L10 1.5M7 1H2.9C2.05992 1 1.63988 1 1.31901 1.16349C1.03677 1.3073 0.8073 1.53677 0.66349 1.81901C0.5 2.13988 0.5 2.55992 0.5 3.4V7.6C0.5 8.44008 0.5 8.86012 0.66349 9.18099C0.8073 9.46323 1.03677 9.6927 1.31901 9.83651C1.63988 10 2.05992 10 2.9 10H7.1C7.94008 10 8.36012 10 8.68099 9.83651C8.96323 9.6927 9.1927 9.46323 9.33651 9.18099C9.5 8.86012 9.5 8.44008 9.5 7.6V5.5"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p className="md:text-base text-sm">Subsidy Application </p>
                  </div>
                  <div className="rounded-full px-6 py-2 border-[1px] border-primary flex items-center gap-2 bg-[#F4F4F4]">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 5L5 6.5L10 1.5M7 1H2.9C2.05992 1 1.63988 1 1.31901 1.16349C1.03677 1.3073 0.8073 1.53677 0.66349 1.81901C0.5 2.13988 0.5 2.55992 0.5 3.4V7.6C0.5 8.44008 0.5 8.86012 0.66349 9.18099C0.8073 9.46323 1.03677 9.6927 1.31901 9.83651C1.63988 10 2.05992 10 2.9 10H7.1C7.94008 10 8.36012 10 8.68099 9.83651C8.96323 9.6927 9.1927 9.46323 9.33651 9.18099C9.5 8.86012 9.5 8.44008 9.5 7.6V5.5"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p className="md:text-base text-sm">
                      Financing / Loan Documentation
                    </p>
                  </div>
                </div>
              </IconCard>
              {/* second card */}
              <IconCard className="py-6 px-4 md:px-12 md:py-12 gap-5 md:gap-20 flex flex-col rounded-3xl">
                <div className="text-center space-y-2">
                  <h5 className="text-lg md:text-[1.44rem] font-medium">
                    The best guarantees on the market
                  </h5>
                  <p className="text-sm md:text-base font-normal">
                    Offgrid guarantees the price and quality of your solar
                    panels for up to 25 years. We find the best products for
                    your home.
                  </p>
                </div>
                <div className="flex flex-col gap-4 relative">
                  <div className="absolute right-0 top-[-8px] rounded-full px-4 py-1 border-[1px] border-primary flex items-center gap-2 bg-white bg-opacity-60 backdrop-blur-sm">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 6.44922L6 7.94922L11 2.94922M8 2.44922H3.9C3.05992 2.44922 2.63988 2.44922 2.31901 2.61271C2.03677 2.75652 1.8073 2.98599 1.66349 3.26823C1.5 3.5891 1.5 4.00914 1.5 4.84922V9.04922C1.5 9.8893 1.5 10.3093 1.66349 10.6302C1.8073 10.9124 2.03677 11.1419 2.31901 11.2857C2.63988 11.4492 3.05992 11.4492 3.9 11.4492H8.1C8.94008 11.4492 9.36012 11.4492 9.68099 11.2857C9.96323 11.1419 10.1927 10.9124 10.3365 10.6302C10.5 10.3093 10.5 9.8893 10.5 9.04922V6.94922"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p className="">25 years</p>
                  </div>
                  <Image
                    src={"/assets/lander/solar.svg"}
                    alt="solar"
                    width={481}
                    height={179}
                  />
                </div>
              </IconCard>
            </div>
          </div>
        </ScrollAppear>

        {/* yellow banner */}
        <ScrollAppear>
          <div className="bg-[#FFCB00] md:h-screen h-auto w-full flex md:flex-row flex-col items-center md:px-20 px-7 md:py-0 py-16 justify-center gap-6 md:gap-28">
            <div className="w-1/2 flex justify-center items-center">
              <Image
                src={"/assets/lander/icons/group-card.svg"}
                width={324}
                height={324}
                alt="logo"
              />
            </div>
            <div className="md:w-1/2 flex flex-col gap-5 md:gap-12">
              <h1 className="text-2xl md:text-5xl font-medium leading-tight">
                Your trusted partner throughout the life of your system
              </h1>
              <div className="space-y-2">
                <p className="text-sm md:text-xl flex gap-2 items-center">
                  <svg
                    className="w-5 h-5 md:w-8 md:h-8"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.5 27.2852V5.28516C24.5 4.18059 23.6046 3.28516 22.5 3.28516L10.5 3.28516C9.39543 3.28516 8.5 4.18059 8.5 5.28516L8.5 27.2852C8.5 28.3897 9.39543 29.2852 10.5 29.2852H22.5C23.6046 29.2852 24.5 28.3897 24.5 27.2852Z"
                      stroke="#212121"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 7.28516H20.5"
                      stroke="#212121"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="text-lg md:text-2xl font-medium">
                    24/7 Active Monitoring
                  </span>
                </p>
                <p className=" text-sm md:text-base">
                  We guarantee continuous performance with constant supervision.
                  Our connected solar panels captures and analyses all data.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg md:text-xl flex gap-2 items-center">
                  <svg
                    className="w-5 h-5 md:w-8 md:h-8"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.5 5.28516H6.5C5.94772 5.28516 5.5 5.73287 5.5 6.28516V26.2852C5.5 26.8374 5.94772 27.2852 6.5 27.2852H26.5C27.0523 27.2852 27.5 26.8374 27.5 26.2852V6.28516C27.5 5.73287 27.0523 5.28516 26.5 5.28516Z"
                      stroke="#212121"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.5 3.28516V7.28516"
                      stroke="#212121"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5 3.28516V7.28516"
                      stroke="#212121"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.5 15.2852C16.5 14.4895 16.8161 13.7264 17.3787 13.1638C17.9413 12.6012 18.7044 12.2852 19.5 12.2852C20.2956 12.2852 21.0587 12.6012 21.6213 13.1638C22.1839 13.7264 22.5 14.4895 22.5 15.2852C22.5 19.2852 16.5 22.2852 16.5 22.2852C16.5 22.2852 10.5 19.2852 10.5 15.2852C10.5 14.4895 10.8161 13.7264 11.3787 13.1638C11.9413 12.6012 12.7044 12.2852 13.5 12.2852C14.2956 12.2852 15.0587 12.6012 15.6213 13.1638C16.1839 13.7264 16.5 14.4895 16.5 15.2852Z"
                      stroke="#212121"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="text-lg md:text-2xl font-medium">
                    Offgrid Care
                  </span>
                </p>

                <p className=" text-sm  md:text-base">
                  Forget about paying for maintenance and cleaning; with
                  Offgrid. Leave everything in our hands to enjoy without
                  worries.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm md:text-xl flex gap-2 items-center">
                  <svg
                    className="w-5 h-5 md:w-8 md:h-8"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 20.2852C18.1421 20.2852 21.5 16.9273 21.5 12.7852C21.5 8.64302 18.1421 5.28516 14 5.28516C9.85786 5.28516 6.5 8.64302 6.5 12.7852C6.5 16.9273 9.85786 20.2852 14 20.2852Z"
                      stroke="#212121"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.5 25.2852C6.06875 22.2289 9.695 20.2852 14 20.2852C18.305 20.2852 21.9313 22.2289 24.5 25.2852"
                      stroke="#212121"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M25.5 18.2852L27.5 20.2852L31.5 16.2852"
                      stroke="#212121"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="text-lg md:text-2xl font-medium">
                    Virtual Solar Advisor
                  </span>
                </p>

                <p className=" text-sm  md:text-base">
                  Our virtual solar advisor is always available to answer any
                  queries. We monitor and report every installation and
                  maintenance activity.
                </p>
              </div>
            </div>
          </div>
        </ScrollAppear>
        <ScrollAppear>
          <SolarOnYourFingertips />
        </ScrollAppear>
        <ScrollAppear>
          <div className="flex flex-col md:px-20 px-7 py-16 md:gap-16 gap-4 bg-[#f0f0f0]">
            <h1 className="text-2xl md:text-[3rem] font-medium text-center leading-tight">
              Why choose Offgrid for your <br /> solar installation
            </h1>
            <div className="flex flex-col gap-10 md:gap-16 py-6 border-t border-t-[#d9d8d6]">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="flex flex-col gap-2 md:gap-4">
                  <div className="md:self-center">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99609 10.2852H24.9961"
                        stroke="#212121"
                        stroke-width="2.48078"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.99609 5.28516H24.9961"
                        stroke="#212121"
                        stroke-width="2.48078"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.4961 5.28516C15.22 5.28516 16.8733 5.96998 18.0923 7.18896C19.3113 8.40795 19.9961 10.0612 19.9961 11.7852C19.9961 13.5091 19.3113 15.1624 18.0923 16.3813C16.8733 17.6003 15.22 18.2852 13.4961 18.2852H8.99609L19.9961 28.2852"
                        stroke="#212121"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h1 className="text-lg md:text-[1.44rem] font-medium md:text-center">
                    Fixed price guarantee
                  </h1>
                  <p className="font-normal md:text-base text-sm md:text-center">
                    Get a assured price quote for your solar. All included and
                    nothing extra.
                  </p>
                </div>
                <div className="flex flex-col gap-2 md:gap-4">
                  <div className="md:self-center">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25 28.2852H7C6.73478 28.2852 6.48043 28.1798 6.29289 27.9923C6.10536 27.8047 6 27.5504 6 27.2852V5.28516C6 5.01994 6.10536 4.76559 6.29289 4.57805C6.48043 4.39051 6.73478 4.28516 7 4.28516H19L26 11.2852V27.2852C26 27.5504 25.8946 27.8047 25.7071 27.9923C25.5196 28.1798 25.2652 28.2852 25 28.2852Z"
                        stroke="#343330"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 4.28516V11.2852H26"
                        stroke="#343330"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 17.2852H20"
                        stroke="#343330"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 21.2852H20"
                        stroke="#343330"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h1 className="text-lg md:text-[1.44rem] font-medium md:text-center">
                    No cost EMI
                  </h1>
                  <p className="font-normal md:text-base text-sm md:text-center">
                    Get solar loans and interest free financing from Offgrid
                    partner banks and NBFC&apos;s
                  </p>
                </div>
                <div className="flex flex-col gap-2 md:gap-4">
                  <div className="md:self-center">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0039 28.2891C22.6313 28.2891 28.0039 22.9165 28.0039 16.2891C28.0039 9.66165 22.6313 4.28906 16.0039 4.28906C9.37649 4.28906 4.00391 9.66165 4.00391 16.2891C4.00391 22.9165 9.37649 28.2891 16.0039 28.2891Z"
                        stroke="#212121"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 9.28516V16.2852H23"
                        stroke="#212121"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h1 className="text-lg md:text-[1.44rem] font-medium md:text-center">
                    24 Hours Installation
                  </h1>
                  <p className="font-normal md:text-base text-sm md:text-center">
                    We spend only a day in your house. We set up your panels and
                    switch you up fast.
                  </p>
                </div>
              </div>
              <div className="space-y-6 flex flex-col">
                <div className="flex relative bg-[url('/assets/lander/hero-image.webp')] rounded-3xl bg-cover bg-center bg-no-repeat h-[30vh] md:h-[60dvh]">
                  <div className="flex flex-col justify-center items-center text-center text-white gap-2 w-full px-3 py-3 md:px-4 md:py-4">
                    <h1 className="text-sm md:text-3xl font-medium">
                      Expert, local installers.
                    </h1>
                    <p className="text-sm md:text-base">
                      All of our installations are carried out by trained
                      engineers. You&apos;re in safe hands.
                    </p>
                  </div>
                  <div className="flex flex-col absolute bottom-[5%] left-[5%] md:bottom-[5%] md:left-[2%] text-white">
                    <p className="text-xs md:text-base">
                      Are you a Solar Installer?
                    </p>
                    <Link className="text-xs md:text-base font-medium" href="#">
                      Join Offgrid
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Button className="text-sm md:text-xl font-medium py-2 px-4 md:px-10 md:py-4">
                    Get your quotation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollAppear>

        <ScrollAppear>
          <div
            className="w-full py-16 md:py-20 px-5 md:px-20 "
            id="installation-steps"
          >
            <h1 className="md:text-[3rem] text-2xl font-medium text-center leading-tight ">
              Here&rsquo;s how your switch <br /> to solar would look like
            </h1>

            {/* step one */}

            {/* step two */}

            <section className="flex gap-5 relative pb-8 md:pb-40 mt-8 md:mt-16">
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
              <div className="flex flex-1 flex-col md:flex-row justify-between gap-6 md:space-x-4 lg:mb-32 ">
                <div className="max-w-lg">
                  <p className="md:text-4xl text-lg leading-none font-medium">
                    Personalised quote.
                  </p>
                  <div className="flex flex-col">
                    <div className="flex mt-4">
                      <dt className=" text-base  leading-7 text-gray-900 flex-row ">
                        <div className=" flex flex-col text-sm md:text-base">
                          <p>
                            Every Offgrid installation starts with an easy to
                            use and free online tool to help better understand
                            whether solar is right for you
                          </p>
                          <p className="mt-4 font-bold">Here’s what we need:</p>
                          <ul className="mt-4  list-disc ml-6">
                            <li>Where is your home? </li>
                            <li>Your roof marking.</li>
                            <li>What is your electricity use?</li>
                          </ul>
                          <p className="mt-4">
                            <b className="font-bold">Estimated time:</b> 5
                            minutes
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
                    src={"/assets/lander/process-section/image-1.webp"}
                    alt="image 1"
                    width={504}
                    height={289}
                  />
                </div>
              </div>
            </section>

            {/* step three */}

            <section className="flex gap-5 relative pb-8 md:pb-40">
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
              <div className="flex flex-1 flex-col md:flex-row justify-between gap-6 md:space-x-4 lg:mb-32 ">
                <div className="max-w-lg">
                  <p className="md:text-4xl text-lg leading-none font-medium">
                    Choose a package
                  </p>
                  <div className="flex flex-col">
                    <div className="flex mt-4">
                      <dt className=" text-base  leading-7 text-gray-900 flex-row ">
                        <div className=" flex flex-col text-sm md:text-base">
                          <p>
                            Offgrid now has a digital sketch of your roof along
                            with all parameters including sunshine hours and
                            temperature. We use this data to give the best
                            product recommendations at different price points to
                            suit your affordability.
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
                    src={"/assets/lander/process-section/image-2.webp"}
                    alt="image 1"
                    width={504}
                    height={289}
                  />
                </div>
              </div>
            </section>

            {/* step four */}

            <section className="flex gap-5 relative pb-8 md:pb-40">
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
              <div className="flex flex-1 flex-col md:flex-row justify-between gap-6 md:space-x-4 lg:mb-32 ">
                <div className="max-w-lg">
                  <p className="md:text-4xl text-lg leading-none font-medium">
                    Approval and Installation
                  </p>
                  <div className="flex flex-col">
                    <div className="flex mt-4">
                      <dt className=" text-base  leading-1 text-gray-900 flex-row ">
                        <div className=" flex flex-col text-sm md:text-base">
                          <p>
                            We work with energy experts to make sure your solar
                            is installed perfectly and efficiently. And we stay
                            in close contact with you at every step so
                            you&apos;re always in the loop.
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
                              Wind / Rain storm proofing and sturdy structure
                              that take winds up to 170km/h.
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
                    src={"/assets/lander/process-section/image-3.webp"}
                    alt="image 1"
                    width={504}
                    height={289}
                  />
                </div>
              </div>
            </section>
            <section className="flex gap-5 relative ">
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
              <div className="flex flex-1 flex-col md:flex-row justify-between gap-6 md:space-x-4 lg:mb-32 ">
                <div className="max-w-lg">
                  <p className="md:text-4xl text-lg leading-none font-medium">
                    Your power visualised
                  </p>
                  <div className="flex flex-col">
                    <div className="flex mt-4">
                      <dt className=" text-base leading-1 text-gray-900 flex-row ">
                        <div className=" flex flex-col text-sm md:text-base">
                          <p>
                            Once your solar is installed, we&apos;ll make sure
                            your home is powered, protected, and fully
                            optimised.
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
                    src={"/assets/lander/process-section/image-4.webp"}
                    alt="image 1"
                    width={504}
                    height={289}
                  />
                </div>
              </div>
            </section>
          </div>
        </ScrollAppear>
        <ScrollAppear>
          {/* Blog section */}
          <SolarAdviceSection />
        </ScrollAppear>

        <ScrollAppear>
          <div className="w-screen md:w-full bg-cover bg-center h-[50dvh] md:h-[100dvh] bg-[url('/assets/lander/banner/last-bg-mobile.webp')] md:bg-[url('/assets/lander/banner/last-bg.jpg')] flex justify-center items-center flex-col gap-4 md:gap-10 md:px-20 px-5">
            <h1 className="text-2xl md:text-5xl">Get a quote now</h1>
            <p className="text-sm md:text-2xl text-center ">
              Assured Prices | 30% Government <br className="md:hidden" />{" "}
              Subsidy | Trusted Quality
            </p>
            <button className="rounded-full bg-primary px-4 py-2 md:px-10 md:py-4 md:text-lg text-sm flex gap-2 items-center font-medium">
              <svg
                className="w-4 h-4 md:w-6 md:h-6"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.49968 1.73828H5.66264C5.54298 1.73828 5.48316 1.73828 5.43034 1.7565C5.38363 1.77261 5.34109 1.7989 5.30579 1.83348C5.26587 1.87257 5.23912 1.92608 5.18561 2.0331L2.38561 7.6331C2.25782 7.88867 2.19393 8.01646 2.20927 8.12033C2.22268 8.21104 2.27285 8.29222 2.34798 8.34477C2.43403 8.40495 2.5769 8.40495 2.86264 8.40495H6.99968L4.99968 15.0716L13.1284 6.64182C13.4027 6.35742 13.5398 6.21521 13.5478 6.09354C13.5548 5.98792 13.5112 5.88527 13.4303 5.81697C13.3371 5.73828 13.1396 5.73828 12.7445 5.73828H7.99968L9.49968 1.73828Z"
                  stroke="#212121"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Get Estimate
            </button>
          </div>
        </ScrollAppear>
      </div>
    </main>
  );
}
