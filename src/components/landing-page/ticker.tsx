"use client";
import Image from "next/image";

export default function Ticker() {
  const brands = [
    "image-1",
    "image-2",
    "image-3",
    "image-4",
    "image-5",
    "image-6",
    "image-7",
  ];

  return (
    <div className="md:w-full w-screen overflow-hidden">
      <div className="ticker">
        {brands.concat(brands).map((brand, index) => (
          <Image
            key={index}
            alt="brands"
            src={`/assets/lander/brands/${brand}.webp`}
            width={100}
            height={100}
            className="inline-block md:mr-20 mr-8 h-auto w-[15%] md:w-[5%]"
            objectFit="fill"
          />
        ))}
      </div>
    </div>
  );
  // const renderItem = (item) => {
  //   return (
  //     <>
  //       <Image
  //         alt="brands"
  //         src={`/assets/lander/brands/${item}.svg`}
  //         width={100}
  //         height={100}
  //         className="mr-20"
  //       />
  //     </>
  //   );
  // };
  // return (
  //   <div className="flex justify-center items-center w-screen">
  //     <ReactTicker
  //       data={brands}
  //       component={renderItem}
  //       speed={100}
  //       keyName="_id"
  //       tickerStyle={{
  //         display: 'flex',

  //       }}
  //       delay={0}
  //       loop={false}
  //       tickerClassName="news-ticker"
  //     />
  //   </div>
  // );
}
