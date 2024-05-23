"use client";
import Image from "next/image";

export default function Ticker() {
  const brands = [
    "panasonic",
    "tata",
    "canadian-solar",
    "adani",
    "havells",
    "waaree",
    "luminous",
  ];

  return (
    <div className="ticker-container py-6">
    <div className="ticker">
      {brands.concat(brands).map((brand, index) => (
        <Image
          key={index}
          alt="brands"
          src={`/assets/lander/brands/${brand}.svg`}
          width={100}
          height={100}
          className="ticker-item"
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
