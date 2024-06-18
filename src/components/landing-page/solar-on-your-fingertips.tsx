import Image from "next/image";

export default function SolarOnYourFingertips() {
  return (
    <>
      <div className="h-auto w-full md:pt-0 pt-16 py-8 md:py-16 md:grid grid-cols-2 gap-3 px-7 md:px-20">
        <div className="block md:py-40">
          <div className=" md:sticky md:top-40 text-2xl text-center md:text-left md:text-7xl  font-medium">
            {" "}
            Solar on your finger tips
          </div>
        </div>
        <div className="py-6 pt-2 md:py-16 flex flex-col gap-y-4 md:gap-y-32 ">
          <div className="block py-6 md:pt-96 justify-start space-y-4 md:space-y-8">
            <div>
              <Image
                src={"/assets/lander/solar-on-your-fingertips/image-1.webp"}
                width={700}
                height={700}
                alt="Solar installer"
              ></Image>
            </div>
            <div className="flex flex-col justify-start gap-2">
              <h1 className="text-2xl md:text-[3rem] font-medium leading-none">
                Expertise at each step
              </h1>
              <p className="md:text-base text-xs font-normal">
                We work the best in energy, from system designers to
                highly-vetted and certified electricians.
              </p>
            </div>
          </div>
          <div className="block py-6  justify-start space-y-4 md:space-y-8">
            <div>
              <Image
                src={"/assets/lander/solar-on-your-fingertips/image-2.webp"}
                width={700}
                height={700}
                alt="Solar installer"
              ></Image>
            </div>
            <div className="flex flex-col justify-start gap-2">
              <h1 className="text-2xl md:text-[3rem] font-medium leading-none">
                Inventory on demand
              </h1>
              <p className="md:text-base text-xs font-normal">
                Secure top- rated solar and battery hardware without the wait
                and a seamless, stress-free installation
              </p>
            </div>
          </div>
          <div className="block py-6  justify-start space-y-4 md:space-y-8">
            <div>
              <Image
                src={"/assets/lander/solar-on-your-fingertips/image-3.svg"}
                width={700}
                height={700}
                alt="Solar installer"
              ></Image>
            </div>
            <div className="flex flex-col justify-start gap-2">
              <h1 className="text-2xl md:text-[3rem] font-medium leading-none">
                Responsive service
              </h1>
              <p className="md:text-base text-xs font-normal">
                Get a dedicated project manager to deliver detailed updates on
                your install and ongoing system support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
