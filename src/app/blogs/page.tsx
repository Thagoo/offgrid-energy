import { BlogCard } from "@/components/landing-page/solar-advice-section";
import Navbar from "@/components/navbar";
import { blogs } from "@/lib/blogs";
import { formatTitleToURL } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Blogs() {
  return (
    <div className="flex justify-center pt-4 ">
      <div className="flex flex-col items-center pt-16 md:pt-28 md:px-28 px-5">
        <div className="flex justify-center items-center w-full">
          <div className="flex-grow"></div>
          <h1 className="text-2xl md:text-4xl flex-grow">Solar Advice</h1>
          <p className="text-sm md:text-base">
            <Link href={"/"} className="hover:underline">
              Home
            </Link>
            / <span className="text-[#636363]">Blogs</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 md:py-16 py-4">
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
        </div>
      </div>
    </div>
  );
}
