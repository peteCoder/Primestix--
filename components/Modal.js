import React from 'react'
import "./modal.css"

const Modal = ({closeModal}) => {
  return (
    <div className="modalBackground font-raleway">
      <div className="modalContainer z-[99999]">
        <div className="max-w-screen-xl px-8 grid gap-2 grid-cols-1 md:grid-cols-2 py-10 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center px-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lets talk about everything!
              </h2>
              <div className="text-gray-700 mt-8  pb-5">
                Hate forms? Send us an <span className="underline">email</span>{" "}
                instead.
              </div>
              <div className='h-[400px] w-full rounded-xl box'></div>
            </div>
            <div className="mt-8 text-center"></div>
          </div>
          <div className="">
          <div className='w-full flex justify-end items-end'>
                     <button className='py-1 px-3 font-bold border-2 border-gray-500'  onClick={() => closeModal(false)}>
                     <i class="ri-close-fill"></i>
                     </button>
                </div>
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                phone nummber
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="tel"
              />
            </div>

            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea className="w-full h-24 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mt-8">
              <button className="uppercase text-sm font-bold tracking-wide bg-[#A18830] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal