import Image from "next/image";

export default function Brands() {
  const brands = ["vercel", "vercel", "vercel", "vercel", "vercel", "vercel"];
  return (
    <div className="flex gap-4 justify-center items-start">
      {brands.map((brand, i) => (
        <img src={`${brand}.svg`} width={100} height={100} />
      ))}
    </div>
  );
}
