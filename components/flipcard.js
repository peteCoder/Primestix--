import Image from "next/image";
import React from "react";

const Flipcard = ({ data }) => {
  

  // console.log(data)

  let formattedData = data;
  

  return (
    <div className="max-w-[1100px] mx-auto w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-12 gap-3">
        <div className="hidden md:col-span-4">
          <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
              <div className="absolute border-2 w-full h-full">
                <Image
                  alt=""
                  src={data?.coverImage?.asset?.url}
                  width={500}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="w-full flex items-center justify-center">
                  <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                    <span>{data?.name}</span>
                    <span className="text-xs italic">
                      {data?.position}
                    </span>
                  </button>
                </div>
              </div>
              <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                <div className="text-center flex flex-col items-center justify-center h-full">
                  <Image
                    alt=""
                    src={data?.coverImage?.asset?.url}
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                    <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>{data?.name}</span>
                      <span className="text-xs italic">
                        {data?.position}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:col-span-4">
          {" "}
          <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
              <div className="absolute border-2 w-full h-full">
                <Image
                  alt=""
                  src={data?.coverImage?.asset?.url}
                  width={500}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="w-full flex items-center justify-center">
                  <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                    <span>{data?.name}</span>
                    <span className="text-xs italic">
                      {data?.position}
                    </span>
                  </button>
                </div>
              </div>
              <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                <div className="text-center flex flex-col items-center justify-center h-full">
                  <Image
                    alt=""
                    src={data?.coverImage?.asset?.url}
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                    <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>{data?.name}</span>
                      <span className="text-xs italic">
                        {data?.position}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          {" "}
          <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
              <div className="absolute border-2 w-full h-full">
                <Image
                  alt=""
                  src={data?.coverImage?.asset?.url}
                  width={500}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="w-full flex items-center justify-center">
                  <button className="absolute bottom-10 py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col w-auto rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                    <span>{data?.name}</span>
                    <span className="text-xs italic">
                      {data?.position}
                    </span>
                  </button>
                </div>
              </div>
              <div className="absolute overflow-hidden  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
                <div className="text-center flex flex-col items-center justify-center h-full">
                  <Image
                    alt=""
                    src={data?.coverImage?.asset?.url}
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 text-white">
                    <button className=" py-2 shadow-xl capitalize font-semibold px-4 flex  flex-col rounded-[50px] items-center justify-center bg-white text-[#A18830]">
                      <span>{data?.name}</span>
                      <span className="text-xs italic">
                        {data?.position}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipcard;

