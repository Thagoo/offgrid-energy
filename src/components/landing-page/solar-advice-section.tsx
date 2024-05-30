import Image from "next/image";
import React from "react";

export default function SolarAdviceSection() {
  return (
    <div className="w-full py-24 md:px-40 bg-[#f0f0f0]">
      <h1 className="text-[3rem] font-medium text-center leading-none mb-20">
        Solar Advice
      </h1>
      <div className="flex gap-20 overflow-x-auto hide-scrollbar w-full">
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

function BlogCard({ image, date, tag1, tag2, title }) {
  return (
    <div className="flex flex-col justify-between w-[740px] gap-8">
      <Image src={image} width={540} height={416} alt="blog" />
      <div className="flex items-center gap-1">
        <h1 className="font-medium">{date}</h1>
        <div className="flex">
          <span className="rounded-3xl px-6 py-3 text-white bg-[#636363]">
            {tag1}
          </span>
          <span className="rounded-3xl px-6 py-3 text-white bg-[#1D7739]">
            {tag2}
          </span>
        </div>
      </div>
      <h1 className="text-3xl">{title}</h1>
    </div>
  );
}
