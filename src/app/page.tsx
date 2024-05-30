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
        <div className="text-center md:h-screen h-[50vh] w-full flex flex-col items-center justify-center gap-4 bg-[#f0f0f0] bg-[url('/assets/lander/banner/bg-lines.svg')]">
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
        <div className="hidden md:flex h-1/2 flex-col md:flex-row py-16 px-20 gap-4 w-full md:justify-between ">
          <div className="flex flex-col gap-4 justify-start items-start px-10 border-r-[1px] h-1/2">
            <h1 className="font-medium md:text-5xl text-lg">
              India's first solar <br /> platform.
            </h1>
            <p className="font-normal">
              Get assured quality at the right price. Get everything covered
              from quotation to installation to maintenance all on Offgrid.
            </p>
            <button className="rounded-full bg-primary px-10 py-4 font-medium md:text-lg">
              Get Quote
            </button>
          </div>
          {/* desktop */}
          <div className="flex flex-col items-center gap-8 px-12">
            <div className="flex gap-6">
              <h1 className="font-medium text-6xl text-[#1D7739]">100%</h1>
              <div className="flex flex-col gap-2">
                <p className="text-3xl">Guaranteed quality and price.</p>
                <p>
                  Get assured price and quality with all installation on
                  Offgrid. We ensure your solar works from day 1.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-5">
                <IconCard className="flex flex-col items-center justify-center w-[22rem] h-[14rem] px-5 py-5 gap-6">
                  <Image
                    src={"/assets/lander/icons/price-guarantee/icon-1.svg"}
                    width={48}
                    height={71}
                    alt="icon"
                  />
                  <h1>Verified Products </h1>
                  <p className="font-normal">
                    To ensure optimum electricity production.
                  </p>
                </IconCard>
                <IconCard className="flex gap-2 w-[22rem] h-auto px-5 py-5 text-center">
                  <Image
                    src={"/assets/lander/icons/price-guarantee/icon-2.svg"}
                    width={79}
                    height={77}
                    alt="icon"
                  />
                  <h1>Solar without salesmen</h1>
                  <p className="font-normal">
                    Save time and get the best quote without negotiating.
                  </p>
                </IconCard>
              </div>
              <div>
                <IconCard className="h-full w-[16.5rem] flex flex-col items-center px-5 py-5 gap-6">
                  <Image
                    src={"/assets/lander/icons/price-guarantee/icon-3.svg"}
                    width={79}
                    height={79}
                    alt="icon"
                  />
                  <p className="text-center">
                    Offgrid gives you a price guarantee. <br /> <br /> Our
                    technology provides transparency on the how which will solar
                    cost you and how much money you would actually save.
                  </p>
                </IconCard>
              </div>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="md:hidden h-1/2 flex flex-col items-center py-16 px-5 gap-4 w-screen">
          <div className="flex flex-col gap-4 items-center text-center">
            <h1 className="font-medium md:text-5xl text-lg text-center">
              India's first solar <br /> platform.
            </h1>
            <p className="font-normal text-xs text-center text-[#868687]">
              Get assured quality at the right price. Get everything covered
              from quotation to installation to maintenance all on Offgrid.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 px-5">
            <div className="flex flex-col gap-4">
              <IconCard className="flex flex-col items-center justify-center px-5 py-5 gap-2 text-center">
                <Image
                  src={"/assets/lander/icons/price-guarantee/icon-1.svg"}
                  width={48}
                  height={71}
                  alt="icon"
                />
                <h1>Verified Products </h1>
                <p className="font-normal text-xs">
                  To ensure optimum electricity production.
                </p>
              </IconCard>
              <IconCard className="flex flex-col items-center gap-2 px-5 py-5 text-center">
                <Image
                  src={"/assets/lander/icons/price-guarantee/icon-2.svg"}
                  width={79}
                  height={77}
                  alt="icon"
                />
                <h1>Solar without salesmen</h1>
                <p className="font-normal text-xs">
                  Save time and get the best quote without negotiating.
                </p>
              </IconCard>

              <IconCard className="flex flex-col items-center px-5 py-5 gap-2 text-center">
                <Image
                  src={"/assets/lander/icons/price-guarantee/icon-3.svg"}
                  width={79}
                  height={79}
                  alt="icon"
                />
                <h1>Guaranteed Prices</h1>
                <p className="font-normal text-xs">
                  Our technology provides transparency on how much will solar
                  cost and how much you would actually save.
                </p>
              </IconCard>
            </div>
          </div>
          <div className="flex gap-2 px-5 items-center">
            <h1 className="font-medium text-2xl text-[#1D7739]">100%</h1>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm">Guaranteed quality and price.</h1>
              <p className="font-normal text-xs text-[#868687]">
                Get assured price and quality with all installation on Offgrid.
                We ensure your solar works from day 1.
              </p>
            </div>
          </div>
          <button className="rounded-full bg-primary px-10 py-4 font-medium md:text-lg">
            Get Quote
          </button>
        </div>
        <div className="relative md:h-screen h-[50vh] flex items-center bg-[#F4F4F4] md:w-full w-screen justify-center px-5">
          <DrawDemo />
        </div>
        <div className="h-auto md:h-screen px-[5.13rem] py-[6.25rem] space-y-[16px] md:space-y-[122px]">
          <div className="flex flex-col gap-2 md:gap-3">
            <h1 className="text-lg md:text-[3rem] font-medium text-center leading-none">
              Solar installations <br />
              without salesmen.
            </h1>
            <p className="text-[#868687] font-light text-xs md:text-[1.1rem] text-center">
              Get a fixed price online with fast installation service.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-7 md:w-full w-screen px-5 md:px-0">
            <IconCard className="text-normal flex justify-center items-center flex-col gap-2 md:gap-5 px-12 py-12">
              <Image
                src={"/assets/lander/icons/solar-installation/icon-1.svg"}
                width={125}
                height={120}
                alt="icon"
              />
              <h5 className="text-sm md:text-2xl">You Provide</h5>
              <p className="font-light text-xs md:text-base">
                Some details about your home and it’s current set up. It’s super
                straight forward, nothing complex.
              </p>
            </IconCard>
            <IconCard className="text-normal flex justify-center items-center flex-col gap-5 px-12 py-12">
              <Image
                src={"/assets/lander/icons/solar-installation/icon-2.svg"}
                width={125}
                height={115}
                alt="icon"
              />
              <h5 className="text-sm md:text-2xl">You Pick</h5>
              <p className="font-light text-xs md:text-base">
                The package that you want from a range of fixed price options
                and an installation date that suits you.
              </p>
            </IconCard>
            <IconCard className="font-normal flex justify-center items-center flex-col gap-5 px-12 py-12">
              <Image
                src={"/assets/lander/icons/solar-installation/icon-3.svg"}
                width={62}
                height={115}
                alt="icon"
              />
              <h5 className="text-sm md:text-2xl">We fit</h5>
              <p className="font-light text-xs md:text-base">
                Your chosen products, on your chosen date, using verified
                installers close to you.
              </p>
            </IconCard>
          </div>
        </div>
        <div className="bg-[#F4F4F4] h-auto px-5 md:px-20 py-20 flex flex-col gap-16  w-screen md:w-full">
          <h1 className="text-[3rem] text-lg font-medium text-center leading-none">
            Seamless Paperwork and <br />
            Unmatched Guarantees
          </h1>

          <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-10">
            <IconCard className="py-12 px-5 md:px-20 gap-3 md:gap-20 flex flex-col rounded-3xl">
              <div className="text-center space-y-3">
                <h5 className="text-sm md:text-[1.44rem]">
                  We take care of all paperwork
                </h5>
                <p className="md:text-sm text-xs font-normal">
                  Complete paperwork management done by us for easy coordination
                  with your local discom and a smooth application for subsidy.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-full px-6 py-2 border-[1px] border-[#212121] flex items-center gap-2 bg-[#F4F4F4]">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 5L5 6.5L10 1.5M7 1H2.9C2.05992 1 1.63988 1 1.31901 1.16349C1.03677 1.3073 0.8073 1.53677 0.66349 1.81901C0.5 2.13988 0.5 2.55992 0.5 3.4V7.6C0.5 8.44008 0.5 8.86012 0.66349 9.18099C0.8073 9.46323 1.03677 9.6927 1.31901 9.83651C1.63988 10 2.05992 10 2.9 10H7.1C7.94008 10 8.36012 10 8.68099 9.83651C8.96323 9.6927 9.1927 9.46323 9.33651 9.18099C9.5 8.86012 9.5 8.44008 9.5 7.6V5.5"
                      stroke="#1D7739"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p className="font-light text-base md:text-sm ">
                    Sanctioned load verification
                  </p>
                </div>
                <div className="rounded-full px-6 py-2 border-[1px] border-[#212121] flex items-center gap-2 bg-[#F4F4F4]">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 5L5 6.5L10 1.5M7 1H2.9C2.05992 1 1.63988 1 1.31901 1.16349C1.03677 1.3073 0.8073 1.53677 0.66349 1.81901C0.5 2.13988 0.5 2.55992 0.5 3.4V7.6C0.5 8.44008 0.5 8.86012 0.66349 9.18099C0.8073 9.46323 1.03677 9.6927 1.31901 9.83651C1.63988 10 2.05992 10 2.9 10H7.1C7.94008 10 8.36012 10 8.68099 9.83651C8.96323 9.6927 9.1927 9.46323 9.33651 9.18099C9.5 8.86012 9.5 8.44008 9.5 7.6V5.5"
                      stroke="#1D7739"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p className="font-light text-base md:text-sm ">
                    DISCOM Approval{" "}
                  </p>
                </div>
                <div className="rounded-full px-6 py-2 border-[1px] border-[#212121] flex items-center gap-2 bg-[#F4F4F4]">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 5L5 6.5L10 1.5M7 1H2.9C2.05992 1 1.63988 1 1.31901 1.16349C1.03677 1.3073 0.8073 1.53677 0.66349 1.81901C0.5 2.13988 0.5 2.55992 0.5 3.4V7.6C0.5 8.44008 0.5 8.86012 0.66349 9.18099C0.8073 9.46323 1.03677 9.6927 1.31901 9.83651C1.63988 10 2.05992 10 2.9 10H7.1C7.94008 10 8.36012 10 8.68099 9.83651C8.96323 9.6927 9.1927 9.46323 9.33651 9.18099C9.5 8.86012 9.5 8.44008 9.5 7.6V5.5"
                      stroke="#1D7739"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p className="font-light text-base md:text-sm ">
                    Subsidy Application{" "}
                  </p>
                </div>
                <div className="rounded-full px-6 py-2 border-[1px] border-[#212121] flex items-center gap-2 bg-[#F4F4F4]">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 5L5 6.5L10 1.5M7 1H2.9C2.05992 1 1.63988 1 1.31901 1.16349C1.03677 1.3073 0.8073 1.53677 0.66349 1.81901C0.5 2.13988 0.5 2.55992 0.5 3.4V7.6C0.5 8.44008 0.5 8.86012 0.66349 9.18099C0.8073 9.46323 1.03677 9.6927 1.31901 9.83651C1.63988 10 2.05992 10 2.9 10H7.1C7.94008 10 8.36012 10 8.68099 9.83651C8.96323 9.6927 9.1927 9.46323 9.33651 9.18099C9.5 8.86012 9.5 8.44008 9.5 7.6V5.5"
                      stroke="#1D7739"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p className="font-light text-base md:text-sm ">
                    Financing / Loan Documentation
                  </p>
                </div>
              </div>
            </IconCard>
            {/* second card */}
            <IconCard className="py-12 px-20 gap-20 flex flex-col rounded-3xl">
              <div className="text-center">
                <h5 className="text-[1.44rem]">
                  The best guarantees on the market
                </h5>
                <p className="font-normal">
                  Offgrid guarantees the price and quality of your solar panels
                  for up to 25 years. We find the best products for your home.
                </p>
              </div>
              <div className="flex flex-col gap-4 relative">
                <div className="absolute right-0 top-[-8px] rounded-full px-4 py-1 border-[1px] border-[#212121] flex items-center gap-2 bg-translucent backdrop-blur-sm">
                  <Image
                    className="invert"
                    src={"/assets/lander/icons/demo-bullet/icon.svg"}
                    alt="bullet"
                    width={18}
                    height={18}
                  />
                  <p className="font-light">25 years</p>
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
        {/* yellow banner */}
        <div className="bg-[#FFCB00] h-screen w-full flex items-center px-28 justify-center gap-28">
          <Image
            src={"/assets/lander/icons/group-card.svg"}
            width={324}
            height={324}
            alt="logo"
          />
          <div className="flex flex-col gap-12">
            <h1 className="text-5xl font-normal">
              Your trusted partner throughout the life of your system
            </h1>
            <div className="space-y-2">
              <p className="text-xl flex gap-2">
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.96477 26.25C11.6333 25.4497 13.5125 25 15.5 25C17.4875 25 19.3667 25.4497 21.0352 26.25M9 21.25H22C24.1002 21.25 25.1503 21.25 25.9525 20.8413C26.6581 20.4817 27.2318 19.9081 27.5913 19.2025C28 18.4003 28 17.3502 28 15.25V9.75C28 7.6498 28 6.5997 27.5913 5.79754C27.2318 5.09193 26.6581 4.51825 25.9525 4.15873C25.1503 3.75 24.1002 3.75 22 3.75H9C6.8998 3.75 5.8497 3.75 5.04754 4.15873C4.34193 4.51825 3.76825 5.09193 3.40873 5.79754C3 6.5997 3 7.6498 3 9.75V15.25C3 17.3502 3 18.4003 3.40873 19.2025C3.76825 19.9081 4.34193 20.4817 5.04754 20.8413C5.8497 21.25 6.8998 21.25 9 21.25Z"
                    stroke="black"
                    stroke-width="2.8125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                24/7 Active Monitoring
              </p>
              <p className="font-light">
                We guarantee continuous performance with constant supervision.
                Our connected solar panels captures and analyses all data.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xl flex gap-2">
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.25 5.75C19.25 5.04993 19.25 4.6999 19.1138 4.43251C18.9939 4.19731 18.8027 4.00608 18.5675 3.88624C18.3001 3.75 17.9501 3.75 17.25 3.75H13.75C13.0499 3.75 12.6999 3.75 12.4325 3.88624C12.1973 4.00608 12.0061 4.19731 11.8862 4.43251C11.75 4.6999 11.75 5.04993 11.75 5.75V9.25C11.75 9.95006 11.75 10.3001 11.6138 10.5675C11.4939 10.8027 11.3027 10.9939 11.0675 11.1138C10.8001 11.25 10.4501 11.25 9.75 11.25H6.25C5.54993 11.25 5.1999 11.25 4.93251 11.3862C4.69731 11.5061 4.50608 11.6973 4.38624 11.9325C4.25 12.1999 4.25 12.5499 4.25 13.25V16.75C4.25 17.4501 4.25 17.8001 4.38624 18.0675C4.50608 18.3027 4.69731 18.4939 4.93251 18.6138C5.1999 18.75 5.54993 18.75 6.25 18.75H9.75C10.4501 18.75 10.8001 18.75 11.0675 18.8862C11.3027 19.0061 11.4939 19.1973 11.6138 19.4325C11.75 19.6999 11.75 20.0499 11.75 20.75V24.25C11.75 24.9501 11.75 25.3001 11.8862 25.5675C12.0061 25.8027 12.1973 25.9939 12.4325 26.1138C12.6999 26.25 13.0499 26.25 13.75 26.25H17.25C17.9501 26.25 18.3001 26.25 18.5675 26.1138C18.8027 25.9939 18.9939 25.8027 19.1138 25.5675C19.25 25.3001 19.25 24.9501 19.25 24.25V20.75C19.25 20.0499 19.25 19.6999 19.3862 19.4325C19.5061 19.1973 19.6973 19.0061 19.9325 18.8862C20.1999 18.75 20.5499 18.75 21.25 18.75H24.75C25.4501 18.75 25.8001 18.75 26.0675 18.6138C26.3027 18.4939 26.4939 18.3027 26.6138 18.0675C26.75 17.8001 26.75 17.4501 26.75 16.75V13.25C26.75 12.5499 26.75 12.1999 26.6138 11.9325C26.4939 11.6973 26.3027 11.5061 26.0675 11.3862C25.8001 11.25 25.4501 11.25 24.75 11.25L21.25 11.25C20.5499 11.25 20.1999 11.25 19.9325 11.1138C19.6973 10.9939 19.5061 10.8027 19.3862 10.5675C19.25 10.3001 19.25 9.95007 19.25 9.25V5.75Z"
                    stroke="black"
                    stroke-width="2.8125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Offgrid Care
              </p>

              <p className="font-light">
                Forget about paying for maintenance and cleaning; with Offgrid.
                Leave everything in our hands to enjoy without worries.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xl flex gap-2">
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="15.5"
                    cy="15"
                    r="14.0625"
                    stroke="black"
                    stroke-width="1.875"
                  />
                  <g clip-path="url(#clip0_1709_160)">
                    <mask id="path-2-inside-1_1709_160" fill="white">
                      <path d="M23.4093 22.4952C22.2389 20.391 20.4352 18.8822 18.3303 18.1669C19.3715 17.5224 20.1804 16.5402 20.6329 15.3713C21.0854 14.2024 21.1563 12.9113 20.8349 11.6964C20.5135 10.4815 19.8174 9.40985 18.8537 8.64611C17.8899 7.88238 16.7117 7.46875 15.5 7.46875C14.2883 7.46875 13.1101 7.88238 12.1463 8.64611C11.1826 9.40985 10.4865 10.4815 10.1651 11.6964C9.84368 12.9113 9.91464 14.2024 10.3671 15.3713C10.8196 16.5402 11.6285 17.5224 12.6697 18.1669C10.5648 18.8814 8.76112 20.3902 7.59071 22.4952C7.54779 22.568 7.51932 22.6489 7.50698 22.7333C7.49464 22.8177 7.49869 22.9039 7.51887 22.9866C7.53906 23.0694 7.57498 23.1471 7.62452 23.2152C7.67405 23.2833 7.7362 23.3403 7.80729 23.383C7.87838 23.4257 7.95698 23.4532 8.03844 23.4638C8.1199 23.4744 8.20258 23.4679 8.2816 23.4448C8.36062 23.4216 8.43437 23.3822 8.49852 23.3289C8.56266 23.2756 8.61589 23.2095 8.65507 23.1345C10.1029 20.5324 12.662 18.9789 15.5 18.9789C18.338 18.9789 20.8971 20.5324 22.3449 23.1345C22.3841 23.2095 22.4373 23.2756 22.5015 23.3289C22.5656 23.3822 22.6394 23.4216 22.7184 23.4448C22.7974 23.4679 22.8801 23.4744 22.9616 23.4638C23.043 23.4532 23.1216 23.4257 23.1927 23.383C23.2638 23.3403 23.3259 23.2833 23.3755 23.2152C23.425 23.1471 23.4609 23.0694 23.4811 22.9866C23.5013 22.9039 23.5054 22.8177 23.493 22.7333C23.4807 22.6489 23.4522 22.568 23.4093 22.4952ZM11.1965 13.2249C11.1965 12.3398 11.4489 11.4745 11.9217 10.7385C12.3946 10.0026 13.0667 9.42897 13.8531 9.09025C14.6395 8.75152 15.5048 8.66289 16.3396 8.83558C17.1744 9.00826 17.9412 9.43449 18.5431 10.0604C19.1449 10.6863 19.5548 11.4837 19.7208 12.3518C19.8869 13.2199 19.8017 14.1198 19.476 14.9375C19.1502 15.7553 18.5986 16.4542 17.8909 16.946C17.1832 17.4377 16.3512 17.7002 15.5 17.7002C14.359 17.6989 13.2651 17.227 12.4583 16.388C11.6515 15.549 11.1977 14.4114 11.1965 13.2249Z" />
                    </mask>
                    <path
                      d="M23.4093 22.4952L20.9514 23.8623L20.9687 23.8933L20.9867 23.9239L23.4093 22.4952ZM18.3303 18.1669L16.8499 15.7756L11.7828 18.9125L17.4255 20.8299L18.3303 18.1669ZM15.5 7.46875V4.65625V7.46875ZM12.6697 18.1669L13.5736 20.8302L19.2194 18.9139L14.1501 15.7756L12.6697 18.1669ZM7.59071 22.4952L10.0133 23.9239L10.0314 23.8931L10.0488 23.8619L7.59071 22.4952ZM8.65507 23.1345L6.1974 21.767L6.17926 21.7996L6.16199 21.8327L8.65507 23.1345ZM22.3449 23.1345L24.838 21.8327L24.8207 21.7996L24.8026 21.767L22.3449 23.1345ZM11.1965 13.2249H8.38396L8.38396 13.2278L11.1965 13.2249ZM15.5 17.7002L15.4969 20.5127H15.5V17.7002ZM25.8672 21.128C24.3735 18.4427 22.0307 16.4539 19.2352 15.504L17.4255 20.8299C18.8397 21.3104 20.1043 22.3393 20.9514 23.8623L25.8672 21.128ZM19.8108 20.5583C21.3854 19.5834 22.588 18.1117 23.2558 16.3865L18.01 14.356C17.7729 14.9687 17.3576 15.4613 16.8499 15.7756L19.8108 20.5583ZM23.2558 16.3865C23.9231 14.6625 24.0267 12.7642 23.5539 10.977L18.1159 12.4157C18.286 13.0584 18.2476 13.7423 18.01 14.356L23.2558 16.3865ZM23.5539 10.977C23.0808 9.18907 22.0512 7.59146 20.6005 6.44182L17.1069 10.8504C17.5837 11.2282 17.9461 11.7738 18.1159 12.4157L23.5539 10.977ZM20.6005 6.44182C19.1477 5.29056 17.356 4.65625 15.5 4.65625V10.2812C16.0674 10.2812 16.6321 10.4742 17.1069 10.8504L20.6005 6.44182ZM15.5 4.65625C13.644 4.65625 11.8523 5.29056 10.3995 6.44182L13.8931 10.8504C14.3679 10.4742 14.9326 10.2812 15.5 10.2812V4.65625ZM10.3995 6.44182C8.9488 7.59146 7.91918 9.18907 7.44615 10.977L12.8841 12.4157C13.0539 11.7738 13.4163 11.2282 13.8931 10.8504L10.3995 6.44182ZM7.44615 10.977C6.97334 12.7642 7.0769 14.6625 7.74423 16.3865L12.99 14.356C12.7524 13.7423 12.714 13.0584 12.8841 12.4157L7.44615 10.977ZM7.74423 16.3865C8.412 18.1117 9.61459 19.5834 11.1892 20.5583L14.1501 15.7756C13.6424 15.4613 13.2271 14.9687 12.99 14.356L7.74423 16.3865ZM11.7657 15.5036C8.9693 16.4528 6.62624 18.4422 5.13262 21.1284L10.0488 23.8619C10.896 22.3382 12.1602 21.3099 13.5736 20.8302L11.7657 15.5036ZM5.16813 21.0665C4.93817 21.4564 4.78861 21.8849 4.72405 22.3266L10.2899 23.1401C10.25 23.4129 10.1574 23.6795 10.0133 23.9239L5.16813 21.0665ZM4.72405 22.3266C4.65951 22.7681 4.68051 23.2187 4.78649 23.6531L10.2513 22.3201C10.3169 22.5891 10.3298 22.8674 10.2899 23.1401L4.72405 22.3266ZM4.78649 23.6531C4.8925 24.0877 5.08252 24.5018 5.35026 24.8698L9.89877 21.5605C10.0674 21.7923 10.1856 22.051 10.2513 22.3201L4.78649 23.6531ZM5.35026 24.8698C5.61818 25.2381 5.95969 25.5541 6.35908 25.794L9.2555 20.972C9.51271 21.1265 9.72993 21.3284 9.89877 21.5605L5.35026 24.8698ZM6.35908 25.794C6.7588 26.0341 7.20635 26.1917 7.67543 26.2528L8.40145 20.6748C8.7076 20.7147 8.99796 20.8174 9.2555 20.972L6.35908 25.794ZM7.67543 26.2528C8.14463 26.3138 8.62033 26.2763 9.07278 26.1437L7.49041 20.7458C7.78482 20.6595 8.09517 20.635 8.40145 20.6748L7.67543 26.2528ZM9.07278 26.1437C9.52497 26.0111 9.94018 25.7877 10.2957 25.4923L6.7013 21.1656C6.92857 20.9768 7.19626 20.8321 7.49041 20.7458L9.07278 26.1437ZM10.2957 25.4923C10.651 25.1971 10.9391 24.8367 11.1481 24.4363L6.16199 21.8327C6.29272 21.5823 6.4743 21.3541 6.7013 21.1656L10.2957 25.4923ZM11.1127 24.502C12.0945 22.7376 13.7433 21.7914 15.5 21.7914V16.1664C11.5806 16.1664 8.11134 18.3272 6.1974 21.767L11.1127 24.502ZM15.5 21.7914C17.2567 21.7914 18.9055 22.7376 19.8873 24.502L24.8026 21.767C22.8887 18.3272 19.4194 16.1664 15.5 16.1664V21.7914ZM19.8519 24.4363C20.0609 24.8367 20.349 25.1971 20.7043 25.4923L24.2987 21.1656C24.5257 21.3541 24.7073 21.5823 24.838 21.8327L19.8519 24.4363ZM20.7043 25.4923C21.0598 25.7877 21.475 26.0111 21.9272 26.1437L23.5096 20.7458C23.8038 20.8321 24.0714 20.9768 24.2987 21.1656L20.7043 25.4923ZM21.9272 26.1437C22.3797 26.2763 22.8554 26.3138 23.3246 26.2528L22.5985 20.6748C22.9048 20.635 23.2152 20.6595 23.5096 20.7458L21.9272 26.1437ZM23.3246 26.2528C23.7936 26.1917 24.2412 26.0341 24.6409 25.794L21.7445 20.972C22.002 20.8174 22.2924 20.7147 22.5985 20.6748L23.3246 26.2528ZM24.6409 25.794C25.0403 25.5541 25.3818 25.2381 25.6497 24.8698L21.1012 21.5605C21.2701 21.3284 21.4873 21.1265 21.7445 20.972L24.6409 25.794ZM25.6497 24.8698C25.9175 24.5018 26.1075 24.0877 26.2135 23.6531L20.7487 22.3201C20.8144 22.051 20.9325 21.7923 21.1012 21.5605L25.6497 24.8698ZM26.2135 23.6531C26.3195 23.2187 26.3405 22.7681 26.2759 22.3266L20.7101 23.1401C20.6702 22.8674 20.6831 22.5891 20.7487 22.3201L26.2135 23.6531ZM26.2759 22.3266C26.2114 21.8849 26.0618 21.4564 25.8319 21.0665L20.9867 23.9239C20.8426 23.6795 20.75 23.4129 20.7101 23.1401L26.2759 22.3266ZM14.009 13.2249C14.009 12.8721 14.1101 12.5357 14.2879 12.2589L9.55557 9.21821C8.78765 10.4134 8.38396 11.8074 8.38396 13.2249H14.009ZM14.2879 12.2589C14.465 11.9832 14.7054 11.7854 14.9657 11.6733L12.7405 6.50719C11.428 7.07251 10.3242 8.02198 9.55557 9.21821L14.2879 12.2589ZM14.9657 11.6733C15.2247 11.5618 15.5028 11.5345 15.7699 11.5898L16.9093 6.08138C15.5068 5.79127 14.0543 5.94126 12.7405 6.50719L14.9657 11.6733ZM15.7699 11.5898C16.0378 11.6452 16.2996 11.785 16.5158 12.0098L20.5703 8.11092C19.5828 7.08394 18.3109 6.37132 16.9093 6.08138L15.7699 11.5898ZM16.5158 12.0098C16.7331 12.2358 16.8927 12.5368 16.9584 12.8802L22.4833 11.8234C22.2168 10.4306 21.5568 9.13672 20.5703 8.11092L16.5158 12.0098ZM16.9584 12.8802C17.0242 13.224 16.9896 13.5793 16.8631 13.8968L22.0888 15.9783C22.6138 14.6602 22.7496 13.2158 22.4833 11.8234L16.9584 12.8802ZM16.8631 13.8968C16.7369 14.2135 16.5304 14.4666 16.286 14.6363L19.4958 19.2556C20.6669 18.4419 21.5635 17.2971 22.0888 15.9783L16.8631 13.8968ZM16.286 14.6363C16.0432 14.8051 15.7698 14.8877 15.5 14.8877V20.5127C16.9325 20.5127 18.3232 20.0704 19.4958 19.2556L16.286 14.6363ZM15.5031 14.8877C15.1432 14.8873 14.7749 14.7394 14.4855 14.4386L10.431 18.3375C11.7553 19.7146 13.5748 20.5106 15.4969 20.5127L15.5031 14.8877ZM14.4855 14.4386C14.1926 14.134 14.0094 13.6983 14.009 13.222L8.38396 13.2278C8.38591 15.1245 9.11033 16.9641 10.431 18.3375L14.4855 14.4386Z"
                      fill="black"
                      mask="url(#path-2-inside-1_1709_160)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1709_160">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(7.0625 7.03125)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Virtual Solar Advisor
              </p>

              <p className="font-light">
                Our virtual solar advisor is always available to answer any
                queries. We monitor and report every installation and
                maintenance activity.
              </p>
            </div>
          </div>
        </div>
        <OurApproach />
        <div className="w-full py-24 md:space-y-16 bg-[#f0f0f0]">
          <h1 className="text-[3rem] font-medium text-center leading-none">
            Why choose Offgrid for your <br /> solar installation
          </h1>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 py-25 px-20 text-center">
              <div className="py-9 px-28 bg-secondary rounded-3xl flex flex-col gap-5 items-center">
                <Image
                  src={"/assets/lander/solar-panel.svg"}
                  width={312}
                  height={382}
                  alt="solar panel image"
                />
                <h1 className="text-3xl">
                  Fixed price solar, with <br /> everything included
                </h1>
                <p className="font-normal text-center">
                  Our solar installations come with everything you need, plus
                  more. From panels to inverters, and mounting structure to
                  paperwork - we’ve got it covered.
                </p>
              </div>
              <div className="flex flex-col gap-5 rounded-2xl">
                <div className="py-9 px-28 bg-secondary rounded-3xl flex flex-col gap-10">
                  <h1 className="text-3xl">Up-to 36 months 0% interest rate</h1>
                  <p className="font-normal text-center">
                    from our NBFC partner
                  </p>
                </div>
                <div className="py-9 px-9 bg-secondary rounded-3xl flex flex-col gap-5 items-center">
                  <h1 className="text-3xl">
                    Solar installation in <br /> 1 day
                  </h1>
                  <p className="font-normal text-center">
                    Book now, and we'll verify your details for DISCOM approval.
                    Once approved, your solar installation will be completed in
                    just one day.
                  </p>
                  <svg
                    width="140"
                    height="149"
                    viewBox="0 0 140 149"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M51.7061 19.809C51.9096 16.008 52.1101 12.2689 52.3419 7.9404C50.3161 7.9404 48.5243 8.00882 46.7395 7.92444C43.9166 7.79141 42.8686 7.02138 42.7301 5.16806C42.5832 3.20147 43.8232 1.96685 46.5261 1.57687C47.9552 1.39745 49.393 1.29601 50.8332 1.27288C61.5543 0.905961 72.2762 0.551286 82.9988 0.208697C83.649 0.184436 84.3001 0.239445 84.9366 0.37276C87.2317 0.86992 88.5322 2.34934 88.5123 4.35926C88.5031 5.34756 88.1321 6.29871 87.4688 7.03474C86.8048 7.77073 85.8936 8.24098 84.906 8.35767C83.1242 8.65186 81.2935 8.64957 79.2149 8.79857V19.1988C90.6307 20.3215 100.264 25.7112 109.98 32.1894C112.329 30.2798 114.819 28.4388 117.094 26.3681C123.69 20.3741 127.33 20.8025 132.15 27.4891C133.386 29.0064 134.724 30.438 136.156 31.7737C139.856 35.64 139.95 38.642 136.316 42.6512C133.872 45.3468 131.28 47.9106 128.683 50.6085C130.395 53.7032 132.126 56.7296 133.762 59.8068C143.09 77.3461 141.754 103.441 126.653 120.435C114.078 134.587 98.6474 143.128 80.1536 146.586C62.6177 149.864 45.7956 147.291 29.5647 140.307C18.2584 135.442 10.4834 126.842 6.21531 115.682C-2.37289 93.2255 -0.955322 71.1306 10.478 49.8098C14.8593 41.6401 21.7078 35.8223 29.2212 30.7481C33.5642 27.8622 38.0835 25.2473 42.753 22.9184C45.4948 21.5288 48.5978 20.8588 51.7061 19.809ZM12.5467 87.7446C12.5361 94.8591 13.6743 101.93 15.9182 108.686C19.9154 120.469 27.2841 129.032 39.4649 132.929C66.8253 141.683 91.7055 137.451 113.264 118.167C129.294 103.828 132.578 82.583 122.076 63.9036C113.678 48.9645 101.011 38.9155 84.8585 33.2483C77.4171 30.6791 69.5284 29.6373 61.6699 30.1857C52.2952 30.7695 43.9212 34.3667 35.9856 39.0548C27.667 43.8755 21.2002 51.3106 17.6051 60.1876C14.0148 68.7769 12.9376 77.7049 12.5467 87.7446ZM60.7824 8.56291C60.9859 11.9837 61.181 15.2611 61.3753 18.5299H70.0691C70.5725 15.1752 71.0483 12.0073 71.5655 8.56291H60.7824ZM131.249 37.1298L125.23 30.4548L117.947 38.1379L122.807 43.4926L131.249 37.1298Z"
                      fill="black"
                    />
                    <path
                      d="M72.9994 80.4545C78.3446 80.5959 83.4191 80.7039 88.4912 80.881C90.0541 80.878 91.6133 81.046 93.1395 81.382C94.0545 81.5538 94.8807 82.035 95.4782 82.7435C96.0764 83.4527 96.4085 84.3451 96.4184 85.2703C96.4436 86.2585 96.1269 87.2247 95.5218 88.0092C94.9174 88.7937 94.0598 89.3487 93.0936 89.582C91.7188 90.0017 90.2844 90.194 88.8469 90.1522C81.7918 89.8063 74.743 89.3312 67.6917 88.9078C64.5903 88.7215 63.0907 87.4786 62.7473 84.4919C62.6299 83.0665 62.6655 81.6336 62.8536 80.2166C63.7416 71.5547 64.6596 62.8966 65.6078 54.2417C65.7807 52.8237 66.0428 51.4182 66.3927 50.0329C66.7966 48.3491 67.8355 47.2626 69.6723 47.2201C71.7379 47.1729 72.7859 48.4097 73.1348 50.2608C73.432 51.6579 73.5858 53.0813 73.5938 54.5093C73.4408 62.0465 73.2029 69.583 73.0017 77.1196C72.978 78.022 72.9994 78.9243 72.9994 80.4545Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col justify-center items-center px-20 gap-16">
              <div className="relative">
                <img
                  src={"/assets/lander/hero-image.png"}
                  alt="hero image"
                  width={"100%"}
                  height={"auto"}
                  className="rounded-3xl"
                />
                <div className="space-y-5 absolute left-1/3 top-1/2 text-center text-white font-extralight">
                  <h1 className="text-2xl font-normal">
                    Expert, local installers.
                  </h1>
                  <p>
                    All of our installations are carried out by trained
                    engineers. <br />
                    You're in safe hands.
                  </p>
                </div>
                <div className="absolute bottom-6 left-28 text-white font-light">
                  <p>
                    Are you a Solar Installer? <br />
                    Join Offgrid
                  </p>
                </div>
              </div>

              <Button> Get your quotation</Button>
            </div>
          </div>
        </div>
        <div className="w-full py-24 md:px-40">
          <h1 className="text-[3rem] font-medium text-center leading-none mb-20">
            Here&rsquo;s how your switch <br /> to solar would look like
          </h1>
          {/* step one */}
          <section className="flex gap-5 relative pb-40">
            <span
              className="absolute top-8 md:left-8 h-full w-0.5 bg-primary z-0"
              aria-hidden="true"
            />
            <div className="z-40">
              <span className="h-16 w-16 rounded-full flex items-center justify-center bg-primary ">
                <h1
                  className=" text-4xl text-black self-center flex"
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
              className="absolute top-8 md:left-8 h-full w-0.5 bg-primary z-0"
              aria-hidden="true"
            />
            <div className="z-40">
              <span className="h-16 w-16 rounded-full flex items-center justify-center bg-primary ">
                <h1
                  className=" text-4xl text-black self-center flex"
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
              className="absolute top-8 md:left-8 h-full w-0.5 bg-primary z-0"
              aria-hidden="true"
            />
            <div className="z-40">
              <span className="h-16 w-16 rounded-full flex items-center justify-center bg-primary ">
                <h1
                  className=" text-4xl text-black self-center flex"
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
              className="absolute top-8 md:left-8 h-full w-0.5 bg-primary z-0"
              aria-hidden="true"
            />
            <div className="z-40">
              <span className="h-16 w-16 rounded-full flex items-center justify-center bg-primary ">
                <h1
                  className=" text-4xl text-black self-center flex"
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
        <SolarAdviceSection />
      </div>
    </main>
  );
}
