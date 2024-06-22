import { blogs } from "@/lib/blogs";
import { formatTitleToURL } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Blog({ params }: { params: any }) {
  const blog = blogs.find(
    (item) => formatTitleToURL(item.title) == params.slug
  );

  if (!blog) {
    return (
      <div className="h-dvh w-screen flex justify-center items-center">
        <h1>We are still working on it :{")"}</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center pt-4  md:px-20 px-5">
      <div className="flex flex-col items-center pt-16 md:pt-28 md:px-28 px-5 gap-4 md:gap-10">
        <div className="flex flex-col items-center gap-3 md:gap-6 md:w-3/4">
          <h1 className="text-2xl md:text-5xl flex-grow text-nowrap">
            The Power of the Sunlight
          </h1>
          <h4 className=" md:text-3xl text-center">{blog.title}</h4>
          <p className="text-xs md:text-base">01 June 2024</p>
        </div>
      </div>
      <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
      <div className="pb-10 md:pb-20 flex flex-col items-center w-[80vw] md:w-[70vw]">
        <Image
          src={blog.image}
          width={0}
          height={0}
          sizes="100vw"
          alt="blog"
          loading="eager"
          className="w-[80vw] md:w-[70vw] h-auto"
        />
        {blog.blogContent}
      </div>
    </div>
  );
}
