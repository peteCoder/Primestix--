"use client";

import Divider from "@/components/Divider";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getFoundersMessage } from "@/actions/getFoundersMessage";
import Link from "next/link";

const About = () => {
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
    <div className="mt-10">
      <div className="bg-black">
        <div className="flex flex-col font-raleway px-5 md:px-0 max-w-[1100px] w-full mx-auto py-20">
          <div className="text-white">
            <h1 className="text-4xl font-semibold">About PRIMESTIX</h1>
            <p className="capitalize text-2xl italic">Our story</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] w-full mx-auto px-5 md:px-0 font-raleway">
        <div className="grid grid-cols-12 my-16 gap-5 md:gap-0">
          <div className="md:col-span-6 col-span-12 flex flex-col">
            <p className="text-black font-raleway text-2xl">
              {founder?.description}
            </p>
          </div>
          <div className="md:col-span-6 my-10 md:my-0 col-span-12">
            <div>
              <p className="text-md font-semibold">
                {founder?.short_description}
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between text-xl font-bold">
              <div className="">
                <div className="text-5xl py-2 text-[#AD8F31]">
                  {founder?.numberOfHomesDelivered}
                </div>
                <Divider />
                <div className="uppercase font-semibold py-3">
                  homes delivered.
                </div>
              </div>
              <div>
                <div className="text-5xl py-2 text-[#AD8F31]">
                  {founder?.numberOfHomesInPlanning}
                </div>
                <Divider />
                <div className="uppercase font-semibold py-3">
                  in planning and progress
                </div>
              </div>
            </div>

            <div>
              <span className="text-md uppercase font-semibold">
                as of {founder?.timeOfDelivery}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ffe8a1] mt-52 px-5 md:px-0 h-[400px]">
        <div className="flex flex-col font-raleway max-w-[1100px] w-full mx-auto py-20 relative">
          <div className="grid grid-cols-12 gap-7">
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
                <h1 className="capitalize font-bold text-4xl">
                  Founder's Message
                </h1>

                <p className="mt-10 mb-5 text-xl relative">
                  {founder?.short_description}
                </p>
                <div className="h-[2px] w-full bg-black" />
                <div className="w-full font-raleway ">
                  <Link
                    href="/founder"
                    className="w-full flex items-center justify-between py-3 text-black font-bold"
                  >
                    <span className="uppercase">Read more</span>
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
        </div>
      </div>
    </div>
  );
};

export default About;
