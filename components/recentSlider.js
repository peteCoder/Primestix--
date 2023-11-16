import React from "react";
import { AiFillAndroid } from "react-icons/ai";
import { FaBath, FaWifi } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

// import data
import { newInStore } from "./data";

const RecentSlider = ({ data }) => {
  // console.log(data);
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className="text-white"
    >
      {data?.map((project, index) => {
        return (
          <SwiperSlide key={index} className=" h-[400px]">
            <div className="h-full w-full relative">
              <Image
                src={project?.bannerImage?.asset?.url}
                width={500}
                height={500}
                className="rounded-xl h-[300px] md:h-[400px] w-[300px] object-cover"
                alt=""
              />
              <div className="capitalize py-5 flex items-center gap-2"></div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default RecentSlider;

// import React from 'react';
// import { AiFillAndroid } from "react-icons/ai"
// import { FaBath, FaWifi } from "react-icons/fa"
// import {MdElectricBolt } from "react-icons/md"
// import {GrLocation } from "react-icons/gr"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Image from 'next/image';

// import 'swiper/css';
// import 'swiper/css/pagination';

// // import data
// import { newInStore } from './data';

// const RecentSlider = () => {
//   return (
//  <Swiper grabCursor={true} breakpoints={{
//     320: {
//         slidesPerView: 1,
//         spaceBetween: 18,
//     },
//     768: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//     }
//  }} className='text-white'>
//     {newInStore.products.map((product, index) => {
//       return <SwiperSlide key={index} className='max-w-[290px] h-[400px]'>
//         <div className='h-full w-full relative'>
//             <Image src={product.image} width={500} height={500} className='rounded-xl h-[300px] md:h-[400px] w-[300px] object-cover' alt="" />
//             <div className='capitalize py-5 flex items-center gap-2'>
//             </div>
//         </div>
//       </SwiperSlide>
//     })}
//   </Swiper>
//   )
// };

// export default RecentSlider;
