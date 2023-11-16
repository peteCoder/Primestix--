"use client";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import qs from "query-string";

import BeatLoader from "react-spinners/BeatLoader";

// import next image
import Image from "next/image";
import "../styles/main.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Button from "./Button";

// import './styles.css';

// import required modules
import {
  FreeMode,
  Autoplay,
  Thumbs,
  EffectFade,
  Navigation,
} from "swiper/modules";
import { useFilter } from "@/hooks/useFilter";
import { getAllProjects } from "@/actions/getAllProjects";
// const mySwiper = {
//   height: '20%', // Note: You should use quotes for the value
//   boxSizing: 'border-box', // CSS properties use camelCase in JavaScript
//   padding: '10px 0',
//   position: 'absolute',
//   top: '-11rem',
//   left: '10%',
// };

export default function ImageSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [projects, setProjects] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        setIsLoading(true);
        let data = await getAllProjects();
        data = data.slice(0, 4);
        setProjects(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-full w-full flex justify-center items-center">
          <BeatLoader color="#e8d5a1b8" />
        </div>
      ) : (
        <>
          <Swiper
            spaceBetween={10}
            navigation={false}
            effect={"fade"}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, FreeMode, Autoplay, Thumbs, Navigation]}
            className="mySwiper2"
          >
            {projects.map((project) => (
              <SwiperSlide key={project._id}>
                <Image
                  className="slightly-zoomed-image"
                  layout="fill"
                  src={project.bannerImage.asset.url}
                  alt="project"
                />
                <div className="absolute text-white top-0 z-10 flex flex-col md:grid grid-cols-12 justify-center md:items-center w-full h-full left-[10%]">
                  <div className="flex md:gap-5 gap-3 flex-col md:col-span-6 col-span-12 md:items-start items-start font-raleway ">
                    <h1 className="uppercase font-bold text-5xl">
                      {project.name}
                    </h1>
                    <p className="md:text-2xl capitalize ">
                      {project.description}
                    </p>
                    <Button href={`/projects/${project._id}`} />
                  </div>

                  {/*description  */}
                  <div className="font-raleway  md:col-span-6 hidden md:flex">
                    <p className="text-left w-full md:w-2/4 text-md p-10 glass-bg">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                          />
                        </svg>
                      </span>
                      Experience opulent living in our luxurious apartments
                      located in the heart of Nigeria.
                    </p>
                  </div>
                </div>
                <div className="home__shadow"></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Autoplay, Thumbs]}
            className="mySwiper-first"
          >
            {projects.map((project) => (
              <SwiperSlide key={project._id}>
                <Image
                  layout="fill"
                  src={project.bannerImage.asset.url}
                  alt="project"
                />
                <div className="home__card-shadow"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </>
  );
}
