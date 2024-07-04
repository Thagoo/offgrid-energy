"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Draggable from "../common/draggable";
import Link from "next/link";
import { blogs } from "@/lib/blogs";
import { formatTitleToURL } from "@/lib/utils";

export default function SolarAdviceSection() {
  const journalRef = useRef(null);
  return (
    <div
      className="w-full md:py-20 py-16 bg-[#f0f0f0] flex flex-col gap-4 md:gap-8"
      id="resources"
    >
      <h1 className="text-3xl md:text-[3rem] font-medium text-center leading-none w-full">
        Solar Advice
      </h1>
      <Draggable innerRef={journalRef} rootClass={"drag"}>
        <div
          ref={journalRef}
          className="w-screen flex overflow-x-auto overflow-y-hidden gap-4 md:gap-20 py-2 px-5 md:px-20 hide-scrollbar relative"
        >
          {blogs.map((blog, i) => (
            <BlogCard
              key={i}
              image={blog.image}
              date={blog.date}
              tag1="Information"
              tag2="Solar"
              title={blog.title}
              url={`/blogs/${formatTitleToURL(blog.title)}`}
            />
          ))}
          <div className="flex justify-start items-center text-nowrap h-40 md:h-96">
            <Link href={"/blogs"} className="underline">
              Explore more
            </Link>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export function BlogCard({
  image,
  date,
  tag1,
  tag2,
  title,
  url,
}: {
  image: string;
  date: string;
  tag1: string;
  tag2: string;
  title: string;
  url: string;
}) {
  return (
    <div className="flex-shrink-0 flex flex-col gap-1 md:gap-4 md:w-[34rem] w-80">
      <Link href={url}>
        <Image
          src={image}
          width={0}
          height={0}
          alt="blog"
          loading="eager"
          sizes="100vw"
          className="h-auto md:w-[34rem] w-80"
        />
      </Link>
      <div className="flex items-center gap-2 w-full">
        <h1 className=" md:text-base text-xs">{date}</h1>
        <div className="flex text-xs md:text-base relative">
          <span className="rounded-3xl py-1 px-3 md:px-6 md:py-2 text-white bg-[#636363] ">
            {tag1}
          </span>
          <span className="rounded-3xl py-1 px-3 md:px-6 md:py-2 text-white bg-[#1D7739] border-white border-[1px] absolute left-[90%]">
            {tag2}
          </span>
        </div>
      </div>
      <Link href={url}>
        <h1 className="text-sm md:text-3xl font-medium">{title}</h1>
      </Link>
    </div>
  );
}
