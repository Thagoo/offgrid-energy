import Image from "next/image";
import React from "react";

export default function SolarAdviceSection() {
  return (
    <div className="w-screen md:py-20 py-16 bg-[#f0f0f0] space-y-4 md:space-y-16">
      <h1 className="text-3xl md:text-[3rem] font-medium text-center leading-none">
        Solar Advice
      </h1>
      <div className="flex overflow-x-auto overflow-y-hidden gap-4 md:gap-20 py-2 px-5 md:px-20 hide-scrollbar">
        <BlogCard
          image="/assets/lander/blog/blog-1.png"
          date="01 Jun, 2024"
          tag1="Information"
          tag2="Solar"
          title="What is solar energy and how it works?"
        />

        <BlogCard
          image="/assets/lander/blog/blog-1.png"
          date="01 Jun, 2024"
          tag1="Information"
          tag2="Solar"
          title="What is solar energy and how it works?"
        />
        <BlogCard
          image="/assets/lander/blog/blog-1.png"
          date="01 Jun, 2024"
          tag1="Information"
          tag2="Solar"
          title="What is solar energy and how it works?"
        />
      </div>
    </div>
  );
}

function BlogCard({
  image,
  date,
  tag1,
  tag2,
  title,
}: {
  image: string;
  date: string;
  tag1: string;
  tag2: string;
  title: string;
}) {
  return (
    <div className="flex-shrink-0 flex flex-col justify-between w-[259px] md:w-[540px] gap-3 md:gap-8">
      <Image src={image} width={540} height={416} alt="blog" />
      <div className="flex items-center gap-2 w-full">
        <h1 className="font-medium md:text-base text-xs">{date}</h1>
        <div className="flex text-xs md:text-base relative">
          <span className="rounded-3xl py-2 px-4 md:px-6 md:py-3 text-white bg-[#636363] ">
            {tag1}
          </span>
          <span className="rounded-3xl py-2 px-4 md:px-6 md:py-3 text-white bg-[#1D7739] border-white border-[1px] absolute left-[90%]">
            {tag2}
          </span>
        </div>
      </div>
      <h1 className="text-sm md:text-3xl font-medium">{title}</h1>
    </div>
  );
}
