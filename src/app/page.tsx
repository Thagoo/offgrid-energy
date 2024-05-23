import Button from "@/components/common/button";
import Card from "@/components/common/card";
import CardOverlay from "@/components/landing-page/card-overlay";
import DrawDemo from "@/components/landing-page/draw-demo";
import OurApproach from "@/components/landing-page/our-approach";

import Pills from "@/components/landing-page/pills";
import Ticker from "@/components/landing-page/ticker";

import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-4">
      <Navbar />
      <div className="flex flex-col items-center pt-10 mt-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="bg-[#D9D8D6] px-4 py-2 rounded-3xl text-sm">
            Start Saving today!
          </span>
          <h1 className="text-7xl font-medium text-center">
            Don't overpay <br className="my-2" /> for Solar
          </h1>
          <p className=" text-[#868687] text-lg text-center font-light leading-6">
            Get fixed price for your solar panels all online. <br /> Offgrid
            install solar in all new way.
          </p>
        </div>

        <Button className="text-1xl font-normal"> Get your proposal now</Button>

        <div className="relative">
          <CardOverlay />
          <Image
            alt="hero"
            src={"/assets/lander/banner/hero.svg"}
            width={780}
            height={477}
          />
        </div>
        <p className="text-lg text-gray-600 font-normal text-center mt-[108px]">
          Brands we work with
        </p>
        <div className="flex">
          <Ticker />
        </div>
        <div className="text-center h-screen w-full flex flex-col items-center justify-center gap-4 bg-[#f0f0f0] bg-[url('/assets/lander/banner/bg-lines.svg')]">
          <p className="text-5xl leading-none">
            We're an <span className="text-[#636363]">all inclusive</span>{" "}
            <br />
            solar platform
          </p>
          <p className="text-[#868687] font-normal text-xl ">
            Get solar panels, plus a lot more, for a lot less
          </p>
          <Pills />
        </div>
        <div className="relative h-screen flex items-center">
          <DrawDemo />
        </div>
        <div className="h-screen bg-[#F0F0F0] w-full pt-16 flex text-center flex-col justify-center items-center">
          <h4 className="text-4xl font-normal">
            High quality & standards <br /> for your installations
          </h4>
          <Card className="flex">
            <div className="flex flex-col">
              <h1 className="text-xl font-medium">Advanced Technology</h1>
              <p className="font-light">
                We use cutting edge <br /> hardware and software to <br />
                design your plant.
              </p>
            </div>
            <div className="border border-r-2 border-[#636363] mx-20"></div>
            <div className="flex flex-col">
              <h1 className="text-xl font-medium">Expert Installers</h1>
              <p className="font-light">
                Our professionals are highly <br /> qualified and recieve <br />
                continuous training from us.
              </p>
            </div>
          </Card>
        </div>
        <div className="bg-[#FFCB00] h-screen w-full  flex items-center px-24 justify-center gap-6">
          <Image
            src={"/assets/lander/icons/group-card.svg"}
            width={350}
            height={350}
            alt="logo"
          />
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-medium">
              Your trusted ally throughout the life of <br />
              your system
            </h1>
            <div className="gap-2">
              <p className="text-xl">24/7 Active Monitoring</p>
              <p className="font-light">
                We guarantee continuous perfomance with constant supervision.
              </p>
            </div>{" "}
            <div className="gap-2">
              <p className="text-xl">Niko Care</p>

              <p className="font-light">
                Forget about paying for maintenance and cleaning; with our
                NikoCare <br />
                subscription. Leave everything in our hands to enjoy without
                worries.{" "}
              </p>
            </div>
          </div>
        </div>
        <OurApproach />
      </div>
    </main>
  );
}
