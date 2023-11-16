import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
         <div className='bg-black mt-20'>
    <div className='flex flex-col font-raleway max-w-[1100px] w-full mx-auto px-5 md:px-0 py-20'>
        <div className='text-white'>
          <h1 className='text-4xl font-semibold'>Meet Our Team</h1>
          <p className='capitalize text-2xl italic'>Meet the diverse talents and expertise that form the heart of our team</p>
        </div>
      </div>

    </div>

          <div className="max-w-[1100px] mt-20 mx-auto w-full flex gap-7 mb-10 flex-col items-center justify-center">
    <div className="grid grid-cols-12 gap-3">
      <div className="md:col-span-4 col-span-12">
        {" "}
        <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
            <div className="absolute border-2 w-full h-full">
              <Image
                src="/staffs/ceo.jpg"
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
                  src="/staffs/ceo.jpg"
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
        </div>
      </div>
      <div className="md:col-span-4 col-span-12">
        {" "}
        <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
            <div className="absolute border-2 w-full h-full">
              <Image
                src="/staffs/director.jpg"
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
                  src="/staffs/director.jpg"
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
        </div>
      </div>
      <div className="md:col-span-4 col-span-12">
        {" "}
        <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
            <div className="absolute border-2 w-full h-full">
              <Image
                src="/staffs/frontdesk.jpg"
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
                  src="/staffs/frontdesk.jpg"
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
        </div>
      </div>
    </div>
    <div className="grid grid-cols-12 gap-3">
      <div className="md:col-span-4 col-span-12">
        {" "}
        <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
            <div className="absolute border-2 w-full h-full">
              <Image
                src="/staffs/IMG--2.jpg"
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
                  src="/staffs/IMG--2.jpg"
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
        </div>
      </div>
      <div className="md:col-span-4 col-span-12">
        {" "}
        <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
            <div className="absolute border-2 w-full h-full">
              <Image
                src="/staffs/IMG--3.jpg"
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
                  src="/staffs/IMG--3.jpg"
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
        </div>
      </div>
      <div className="md:col-span-4 col-span-12">
        {" "}
        <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
            <div className="absolute border-2 w-full h-full">
              <Image
                src="/staffs/IMG--4.jpg"
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
                  src="/staffs/IMG--4.jpg"
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
        </div>
      </div>
    </div>
    <div className="grid grid-cols-12 gap-3">
      <div className="md:col-span-4 col-span-12">
        {" "}
        <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
            <div className="absolute border-2 w-full h-full">
              <Image
                src="/staffs/IMG--5.jpg"
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
                  src="/staffs/IMG--5.jpg"
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
        </div>
      </div>
      <div className="md:col-span-4 col-span-12">
        {" "}
        <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
            <div className="absolute border-2 w-full h-full">
              <Image
                src="/staffs/IMG--6.jpg"
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
                  src="/staffs/IMG--6.jpg"
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
        </div>
      </div>
      <div className="md:col-span-4 col-span-12">
        {" "}
        <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
            <div className="absolute border-2 w-full h-full">
              <Image
                src="/staffs/IMG--7.jpg"
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
                  src="/staffs/IMG--7.jpg"
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
        </div>
      </div>
    </div>
    <div className="grid grid-cols-12 gap-3">
      <div className="md:col-span-4 col-span-12">
        {" "}
        <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
            <div className="absolute border-2 w-full h-full">
              <Image
                src="/staffs/IMG--8.jpg"
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
                  src="/staffs/IMG--8.jpg"
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
        </div>
      </div>
      <div className="md:col-span-4 col-span-12">
        {" "}
        <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
            <div className="absolute border-2 w-full h-full">
              <Image
                src="/staffs/IMG--9.jpg"
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
                  src="/staffs/IMG--9.jpg"
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
        </div>
      </div>
      <div className="md:col-span-4 col-span-12">
        {" "}
        <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
            <div className="absolute border-2 w-full h-full">
              <Image
                src="/staffs/IMG--10.jpg"
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
                  src="/staffs/IMG--10.jpg"
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
        </div>
      </div>
    </div>
    <div className="grid grid-cols-12 gap-3">
      <div className="md:col-span-4 col-span-12">
        {" "}
        <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
            <div className="absolute border-2 w-full h-full">
              <Image
                src="/staffs/IMG--11.jpg"
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
                  src="/staffs/IMG--11.jpg"
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
        </div>
      </div>
      <div className="md:col-span-4 col-span-12">
        {" "}
        <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
            <div className="absolute border-2 w-full h-full">
              <Image
                src="/staffs/IMG--12.jpg"
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
                  src="/staffs/IMG--12.jpg"
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
        </div>
      </div>
      <div className="md:col-span-4 col-span-12">
        {" "}
        <div className="w-[250px] h-[370px] perspective bg-transparent cursor-pointer group">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 shadow-xl">
            <div className="absolute border-2 w-full h-full">
              <Image
                src="/staffs/IMG--13.jpg"
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
                  src="/staffs/IMG--13.jpg"
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
        </div>
      </div>
    </div>
  </div>
    </div>
  
  )
}

export default page