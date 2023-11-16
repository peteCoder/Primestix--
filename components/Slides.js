"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import "./swiper-slider.modules.css"
import Link from "next/link";
import "../styles/main.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
import Recents from "./Recents";
import { getLatestFeatured } from "@/actions/getLatestFeatured";
import { formatLocation } from "@/lib/helpers";

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const getFeaturedData = async () => {
      const data = await getLatestFeatured();
      // console.log(data)
      setFeatures(data);
    };

    getFeaturedData();
  }, []);
  return (
    <>
      {features && (
        <div className="flex flex-col items-center justify-ceneter mx-auto md:w-[1100px] h-full mb-5">
          <div className=" mx-auto px-5 uppercase four alt-four mb-3">
            <h1 className="second-heading font-bold font-raleway uppercase leading-[3rem]">
              Featured Housing
            </h1>
          </div>
          <span className="capitalize text-white my-5 font-semibold text-center text-xl font-raleway px-4 md:px-32">
            {features[0]?.description}
          </span>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            effect={"fade"}
            navigation={false}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            modules={[EffectFade, Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.id}>
                <div>
                  <Image
                    src={feature?.bannerImage?.asset?.url}
                    className="object-cover absolute top-0 left-0"
                    layout="fill"
                    alt=""
                  />
                  <div className="glass-bg2  absolute py-3 my-5 mx-5 px-5 top-0 right-0 text-white rounded-[50px]">
                    <Link
                      href="/projects"
                      className="flex items-center justify-between gap-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                      </svg>
                      <span>Take 3D Tour</span>
                    </Link>
                  </div>
                  <div className="absolute left-0 flex w-full items-end justify-start bottom-0 py-5 md:py-10 my-auto px-16 md:h-40 glass-bg2 text-white">
                    <div className="flex justify-between gap-3 md:gap-0 flex-col w-full ">
                      <div className="font-raleway flex flex-col gap-2 items-start justify-between">
                        <span className="font-bold md:text-4xl text-2xl capitalize">
                          {feature?.name}
                        </span>
                        <span className="capitalize gap-2 flex items-center justify-center md:text-xl text-md font-semibold">
                          <span className="hidden md:flex">
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
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                              />
                            </svg>
                          </span>
                          <span>
                            {formatLocation(feature?.city?.name, feature?.country?.name)}
                          </span>
                        </span>
                      </div>
                      <div>
                        <Link
                          href="/page"
                          className="w-full flex items-center md:justify-start justify-center gap-3 my-2 hover:gap-6 font-bold font-raleway transition-all duration-300 text-sm text-white"
                        >
                          <span className="capitalize">Learn more</span>
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
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                              />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>

          <Recents data={features[0]} />
        </div>
      )}
    </>
  );
}
