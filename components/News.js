"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import "../styles/news-slider.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { getAllNews } from "@/actions/getAllNews";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getAllNews();
      setNews(data);
    };

    fetchNews();
  }, []);

  // console.log(news);

  return (
    <div className="relative">
      {news && (
        <>
          <div className="two alt-two">
            <h1 className="primary-heading" style={{ color: "white" }}>
              News
            </h1>
          </div>

          <span className="capitalize flex items-center justify-center text-white my-5 font-semibold text-center text-xl font-raleway px-32">
            Get updated with the latest news
          </span>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            navigation={false}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              750: {
                slidesPerView: 3,
              },
              1100: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper3 news-slider"
          >
            {news.map((n) => (
              <SwiperSlide
                key={n._id}
                className="news-slider__wrp swiper-wrapper"
              >
                <div className="news-slider__item swiper-slide">
                  <a href="#" className="news__item">
                    <div className="news-date">
                      <span className="news-date__title">24</span>
                      <span className="news-date__txt">May</span>
                    </div>
                    <div className="news__title">{n?.title}</div>

                    <p className="news__txt">{n.body}</p>

                    <div className="news__img object-cover">
                      <Image
                        src={n?.bannerImage?.asset?.url}
                        className="object-cover"
                        width={500}
                        height={100}
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default News;
