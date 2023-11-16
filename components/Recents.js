import React from "react";
import { newInStore } from "./data";
import RecentSlider from "./recentSlider";
import { formatLocation } from "@/lib/helpers";

const New = ({ data }) => {
  // Add format location function here
  // new in store
  const { title, subtitle, link, icon } = newInStore;
  return (
    <div className="container mt-10 font-raleway text-white overflow-x-hidden max-w-[1100px] mx-auto px-5">
      <div className="flex flex-col lg:flex-row">
        {/* text */}
        <div className="flex flex-col md:items-baseline md:gap-x-6 mb-6 lg:mb-0 md:text-left text-left justify-center items-start">
          <h1 className="title text-5xl font-bold max-w-[245px] lg:mt-[30px] lg:mb-[29px]">
            {title}
          </h1>
          <p className="max-w-[445px] text-2xl lg:mb-5 font-semibold">
            {/* Add format location function here */}
            in {formatLocation(data?.city?.name, data?.country?.name)}
          </p>
          <div className="md:my-0 my-5 flex items-center ">
            <a
              className="hover:border-b border-black lg:items-center font-medium text-xl transition-all"
              href="#"
            >
              {link}
            </a>
            <span className="text-2xl">{icon}</span>
          </div>
        </div>

        {/* slider */}
        <div className="lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24 ">
          <RecentSlider data={data?.projects} />
        </div>
      </div>
    </div>
  );
};

export default New;
