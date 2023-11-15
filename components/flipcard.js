import Image from "next/image";
import React from "react";

const Flipcard = () => {
  return (
   <div className="max-w-[1100px] mx-auto w-full flex flex-col items-center justify-center">
    <div className="grid grid-cols-12 gap-3">
      <div className="hidden md:col-span-4"> 
      <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
        <div className="absolute border-2 w-full h-full">
          <Image
            src="/avatar1.jpg"
            width={500}
            height={400}
            className="object-cover w-full h-full"
          />
          <div className="w-full flex items-center justify-center">
            <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
              <span>Nnadi Johnson</span>
              <span className="text-xs italic">
                Chief Executive Officer
              </span>
            </button>
          </div>
        </div>
        <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
          <div className="text-center flex flex-col items-center justify-center h-full">
            <Image
              src="/avatar2.jpg"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
            <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
              <span>Nnadi Johnson</span>
              <span className="text-xs italic">
                Chief Executive Officer
              </span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div></div>
      <div className="hidden md:col-span-4"> <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
        <div className="absolute border-2 w-full h-full">
          <Image
            src="/avatar1.jpg"
            width={500}
            height={400}
            className="object-cover w-full h-full"
          />
          <div className="w-full flex items-center justify-center">
            <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
              <span>Nnadi Johnson</span>
              <span className="text-xs italic">
                Chief Executive Officer
              </span>
            </button>
          </div>
        </div>
        <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
          <div className="text-center flex flex-col items-center justify-center h-full">
            <Image
              src="/avatar2.jpg"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
            <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
              <span>Nnadi Johnson</span>
              <span className="text-xs italic">
                Chief Executive Officer
              </span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div></div>
      <div className="col-span-12 md:col-span-4"> <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
        <div className="absolute border-2 w-full h-full">
          <Image
            src="/avatar1.jpg"
            width={500}
            height={400}
            className="object-cover w-full h-full"
          />
          <div className="w-full flex items-center justify-center">
            <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
              <span>Nnadi Johnson</span>
              <span className="text-xs italic">
                Chief Executive Officer
              </span>
            </button>
          </div>
        </div>
        <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
          <div className="text-center flex flex-col items-center justify-center h-full">
            <Image
              src="/avatar2.jpg"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
            <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
              <span>Nnadi Johnson</span>
              <span className="text-xs italic">
                Chief Executive Officer
              </span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div></div>
    </div>
    


   </div>
  );
};

export default Flipcard;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';

// const Flipcard = () => {
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
//  }} className='w-[250px] h-[370px] perspective bg-transparent cursor-pointer group'>
//       return <SwiperSlide className=''>
//       <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
//         <div className="absolute border-2 w-full h-full">
//           <Image
//             src="/avatar1.jpg"
//             width={500}
//             height={400}
//             className="object-cover w-full h-full"
//           />
//           <div className="w-full flex items-center justify-center">
//             <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
//               Hover me
//             </button>
//           </div>
//         </div>
//         <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
//           <div className="text-center flex flex-col items-center justify-center h-full">
//             <Image
//               src="/avatar2.jpg"
//               width={500}
//               height={400}
//               className="object-cover w-full h-full"
//             />
//             <div className="absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125 text-white">
//               <h1 className="text-xl font-semibold">Lorem</h1>
//               <p className="my-2">4.0 ratings</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       </SwiperSlide>;
//   </Swiper>
//   )
// };

// export default Flipcard;

