"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FeaturedImages from "./FeaturedImages";

const Featured = () => {
  return (
    <div className=" md:px-0 overflow-hidden">
      <div className="w-full h-full relative">
        <div className="absolute top-0 w-full h-full">
            <Image alt="" src="/pic-2.jpg"  className="absolute md:-right-[10rem] top-0 z-[-999] object-cover " width={1000} height={1000} />
            <div className="cloud"></div>
        </div>
      <div className="py-32 max-w-[600px] mx-auto w-full overflow-hidden flex flex-col justify-center leading-7 items-center gap-3 two alt-two px-5">
        <h1 className="primary-heading text-center capitalize font-[600] leading-8">
          The premier luxury
          <span className="leading-3">property developer in Dubai</span>
        </h1>
        <h2 className="text-center text-white z-[999] font- md:text-xl text-sm leading-6 font-raleway">
          DAMAC Properties is part of DAMAC Group that has been shaping the
          Middle East's luxury real estate market since 1982, delivering iconic
          residential, commercial and leisure properties for sale across the
          region and beyond.
        </h2>
      </div>
      </div>
      {/* <FeaturedSlider/> */}
      <FeaturedImages/>
    </div>
  );
};

export default Featured;
