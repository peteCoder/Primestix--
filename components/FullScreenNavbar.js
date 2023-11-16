"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "./Modal";
import { getAllCommunities } from "@/actions/getAllCommunities";
import { getAllProjects } from "@/actions/getAllProjects";

// mobile view
function MobileView({ open, setOpen }) {

  const [communities, setCommunities] = useState([]);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchCommunities = async () => {
      let data = await getAllCommunities();
      data = data.splice(0, 3);
      setCommunities(data);
    };

    const fetchAllProducts = async () => {
      let data = await getAllProjects();
      data = data?.splice(0, 4).map((datum) => datum);
      setProjects(data);
    };

    fetchCommunities();
    fetchAllProducts();
  }, []);



  return (
    <div
      className={`z-[9999] absolute top-0 left-0 w-screen md:pb-0 pb-4 md:h-[100vh] overflow-x-hidden bg-white transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter font-raleway`}
    >
      <div className="flex flex-col justify-center mt-10 md:mt-32 pl-[2rem] md:pl-[5rem] items-center">
        <div className="grid grid-cols-12 w-full h-full relative">
          <div className="md:col-span-6 col-span-12">
            <div>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <Link href="/" className="mobile-headings">
                    <span>
                      <i class="ri-community-line"></i>
                    </span>
                    <span>communities</span>
                  </Link>
                  <ul className="mobile-list flex flex-col gap-2">
                    {communities?.map((community) => (
                      <li key={community?._id}>
                        <Link href="/" className="link-item">
                          {community?.name}
                        </Link>
                      </li>
                    ))}

                    
                  </ul>
                </div>
                <div className="mr-16">
                  <Link href="/" className="mobile-headings">
                    <span>
                      <i class="ri-question-line"></i>
                    </span>
                    <span>Why Damic?</span>
                  </Link>
                  <ul className="mobile-list flex flex-col gap-2">
                    <li>
                      <Link
                        href="/about"
                        onClick={() => {
                          setOpen(!open);
                        }}
                        className="link-item"
                      >
                        About Damic
                      </Link>
                    </li>
                    <li>
                      <Link href="/founder" className="link-item">
                        Founder's Message
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="link-item">
                        Investor relations
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="link-item">
                        Csr
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="link-item">
                        hotels & resorts
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex flex-col md:flex-row justify-between w-full pr-16">
                  <div>
                    <Link href="/" className="mobile-headings">
                      <span>
                        <i class="ri-building-2-line"></i>
                      </span>
                      <span>projects</span>
                    </Link>
                    <ul className="mobile-list flex gap-2 flex-col">
                      <li>
                        <Link href="/projects" className="link-item">
                          all projects
                        </Link>
                      </li>
                      <li>
                        <Link href="/projects" className="link-item">
                          find properties
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-start items-start mt-5 mr-16">
                    <Link href="/" className="mobile-headings">
                      <span>
                        <i class="ri-price-tag-3-line"></i>
                      </span>
                      <span>offers</span>
                    </Link>
                    <Link href="/" className="mobile-headings">
                      <span>
                        <i class="ri-camera-lens-line"></i>
                      </span>
                      <span>3d tour</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:hidden flex my-5">
              <button className="flex items-center openModalBtn text-2xl" onClick={() => {
                  setOpenModal(true)
                }}>
                  <i class="ri-calendar-2-line"></i>
                  &nbsp;
                  <span className="uppercase font-[500]">schedule a call</span>
                </button>
              </div>

              <div className="hidden md:flex flex-col md:flex-row mt-5  md:items-center gap-3 md:gap-6 w-full justify-center">
                <div>
                  <h1 className="uppercase md:text-3xl font-bold">
                    <span className="">Making</span> things happen
                  </h1>
                  <p className="font-semibold md:text-xl text-[#A18830]">
                    The next big idea might be yours.
                  </p>
                </div>
                <button className="uppercase border-2 border-[#A18830] shadow-lg py-2 md:py-4 px-2 md:px-3 font-semibold text-white hover:text-black bg-[#A18830] hover:bg-white transition-all md:w-auto w-2/4 duration-300 ease-in-out">
                  Send your idea
                </button>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-0 h-full relative">
            <div className="h-full w-full absolute md:flex hidden items-center justify-center -top-[0rem] left-0">
              <Image
                src="/home-5.jpg"
                width={1000}
                height={1000}
                className="w-full h-[70vh]"
                alt=""
              />
            </div>
            <div className="absolute top-0 left-0 md:flex hidden items-center justify-center h-full w-full">
              <div className="glass-bg text-white w-3/4 flex flex-col gap-3 py-10 px-7">
                <h1 className="font-bold text-xl">
                  THE PREMIER LUXURY PROPERTY DEVELOPER IN DUBAI
                </h1>
                <p className="text-sm font-semibold">
                  DAMAC Properties has been shaping the Middle East’s luxury
                  real estate market since 2002, delivering iconic residential,
                  commercial and leisure properties for sale in Dubai, across
                  the region and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FullScreenNavbar = () => {
  const [openModal, setOpenModal] = useState(false)
  const [open, setOpen] = useState(false);
  const [ isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <MobileView open={open} setOpen={setOpen} />
      <div className="w-full max-w-[1100px] flex justify-between items-center mx-auto py-5 font-raleway md:px-0 px-5">
        <div className="flex items-center justify-center gap-4">
          <div
            className="group z-[9999] relative w-6 h-4  cursor-pointer flex-col justify-between items-center md:flex hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span
              className={`h-[1px] w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`h-[1px] w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "hidden w-0" : "w-full"
              }`}
            />
            <span
              className={`h-[1px] w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>
          <Link href="/" className="uppercase font-[500]">
            <Image src="/horizontal-logo.png" width={100} height={50}  alt="logo"/>
          </Link>
        </div>

        <div className="relative">
          <div class="border rounded overflow-hidden hidden md:flex">
            <input type="text" className="px-4 py-2" placeholder="Search..." />
            <button class="flex items-center justify-center px-4 border-l">
              <svg
                class="h-4 w-4 text-grey-dark"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="">
            <ul className="flex items-center justify-center gap-4">
              <li className="md:flex items-center justify-center hidden">
                <button className="flex items-center openModalBtn" onClick={() => {
                  setOpenModal(true)
                }}>
                  <i class="ri-calendar-2-line"></i>
                  &nbsp;
                  <span className="uppercase font-[500]">schedule a call</span>
                </button>
              </li>

              <li className="hidden items-center md:flex justify-center">
                <span className="divider text-xs">|</span>
              </li>
              <li>
                <Link href="home" className="md:flex hidden items-center">
                  <i class="ri-mail-line"></i>
                  &nbsp;
                  <span className="uppercase font-[500]">Enquire</span>
                </Link>
              </li>

              <li className="items-center md:flex hidden justify-center">
                <span className="divider text-xs">|</span>
              </li>

              <li>
                <button
                  className="md:flex hidden items-center hover:text-red-500" onClick={() => setIsOpen((prev) => !prev)}
                >
                  <span className="">
                    <i class="ri-translate-2"></i>
                  </span>
                  <span className="">
                  {!isOpen ? (
                     <i class="ri-arrow-drop-down-fill"></i>
                ):(
                    <i class="ri-arrow-drop-up-fill"></i>
                )}
                  </span>
                </button>

                {/* dropdown when the language column is open */}
                {isOpen && <div className="mt-4 bg-gray-200 absolute font-semibold">
                    <ul className="flex flex-col">
                        <li className="py-4 px-5 border-b-2 hover:bg-white transition-all duration-300 ease-in-out border-gray-500">
                            <button>
                            English
                            </button>
                        </li>
                        <li  className="py-4 px-5 hover:bg-white transition-all duration-300 ease-in-out ">
                            <button>
                            اللغة العربية
                            </button>
                        </li>
                    </ul>    
                </div>}
              </li>
            </ul>
          </div>

          <div
            className="group z-[9999] relative w-6 h-4  cursor-pointer flex-col justify-between items-center flex md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span
              className={`h-[1px] w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`h-[1px] w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "hidden w-0" : "w-full"
              }`}
            />
            <span
              className={`h-[1px] w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>
        </div>
      </div>
      { openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  );
};

export default FullScreenNavbar;
