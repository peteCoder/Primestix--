"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getFoundersMessage } from "@/actions/getFoundersMessage";

const Founder = () => {
  const [founder, setFounder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFounderMessage = async () => {
      try {
        setIsLoading(true);
        const data = await getFoundersMessage();
        setFounder(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFounderMessage();
  }, []);

  return (
    <>
      {isLoading ? (
        <>LOADING</>
      ) : (
        <>
          <div>
            <div className="bg-black mt-20">
              <div className="flex flex-col font-raleway max-w-[1100px] w-full mx-auto px-5 md:px-0 py-20">
                <div className="text-white">
                  <h1 className="text-4xl font-semibold">About PRIMESTIX</h1>
                  <p className="capitalize text-2xl italic">
                    Founder's message
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-raleway max-w-[1100px] md:mt-20 w-full mx-auto md:py-20 relative">
              <div className="grid grid-cols-12 md:gap-7">
                <div className="md:col-span-6 col-span-12">
                  <Image
                    className="w-[550px] relative md:absolute md:-top-[20%] left-0 h-auto"
                    src={founder?.image?.asset?.url}
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <div className="md:col-span-6 col-span-12 text-black">
                  <div>
                    <p className="mt-10 mb-5 pb-10  px-5 md:px-0 text-xl font-semibold relative">
                      {founder?.short_description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-raleway max-w-[1100px] w-full px-5 md:px-0 mx-auto py-5 font-[400] pb-20 text-xl text-md leading-8">
              <p>
                <br />
                {founder?.message}
                <br />
                <span className="text-slate-600 italic font-bold">
                  {founder?.name}
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Founder;
