import Brands from "@/components/brands";
import Header from "@/components/header";
import Pills from "@/components/pills";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col items-center pt-20 gap-8">
      <button className="bg-[#ffcb00] px-8 py-2 rounded-3xl text-sm">
        Start Saving today!
      </button>
      <h1 className="text-5xl font-semibold text-center">
        Don't Overpay <br className="my-2" /> for solar
      </h1>
      <p>
        Generate your own electricity and save every month. <br />
      </p>
      <button className="bg-black text-white px-4 py-2 rounded-3xl ">
        Get your proposal now
      </button>
      <div className="my-4">
        <Image src={"/next.svg"} width={500} height={500} />
      </div>
      <p className="text-sm font-light text-center">Brands we work with</p>
      <div className="flex">
        <Brands />
      </div>
      <div className="text-center">
        <p className="text-2xl ">
          We'r an all inclusive <br />
          solar platform
        </p>
        <p className="font-thin text-slate-500">
          Get solar panels, plus a lot more, for a lot less
        </p>
      </div>
      <Pills />
    </main>
  );
}
