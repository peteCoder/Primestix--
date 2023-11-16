"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Flickity from "react-flickity-component";
import "./flicky.css";
import Amenities from "./Amenities";
import Maps from "./Maps";

import useOpenController from "./useOpenController";

export const Accordion = ({ section, key }) => {
  const { isOpen, toggle } = useOpenController(false);
  // console.log(section);
  return (
    <div className="accordion-container font-raleway">
      <ExpendableColumn
        question={section.question}
        isOpen={isOpen}
        toggle={toggle}
      />
      {isOpen && <TextSection text={section.answer} />}
      <div className="underline"></div>
    </div>
  );
};

const ExpendableColumn = ({ question, isOpen, toggle }) => {
  return (
    <div className="flex flex-row w-full justify-between" onClick={toggle}>
      <div className="text-2xl py-5 font-semibold">{question}</div>
      <button className="expendable-button">
        <span
          class="material-symbols-outlined"
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
            transition: "all 0.25s",
          }}
        >
          expand_more
        </span>
      </button>
    </div>
  );
};

const TextSection = ({ text }) => {
  return (
    <div className="text-xl">
      <div>{text}</div>
    </div>
  );
};

const flickityOptions = {
  initialIndex: 1,
};

function Carousel({ gallery }) {
  return (
    <>
      {gallery?.length !== 0 && (
        <Flickity
          className={"carousel"}
          elementType={"div"}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          {gallery?.map((image) => (
            <img
              alt="gallery-image"
              key={image._id}
              className="relative w-[600px] px-5 h-auto"
              src={image.ImageUrl.asset.url}
            />
          ))}
        </Flickity>
      )}
    </>
  );
}

const ProjectDetailClient = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // This is a client data fetching for the detail view.
  // Like I said, you can use server fetching if you like!

  useEffect(() => {
    const fetchDetailProject = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/project/${projectId}`);
        const data = await response.json();

        setProject(data);
      } catch (error) {
        setIsLoading(false);
        // console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetailProject();
  }, [projectId]);

  console.log(project);

  return (
    <main className="h-full mt-20">
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <BeatLoader color="#e8d5a1b8" />
        </div>
      ) : (
        <div className="w-full">
          <div className="max-w-[1100px] mx-auto w-full md:px-0 px-10">
            {/* ---banner image ---- */}
            <div
              className="h-[500px] w-full"
              style={{
                backgroundImage: `url(${project?.bannerImage?.asset?.url})`,
                backgroundPosition: "50% center",
              }}
            />

            {/* ---banner title--- */}
            <h1 className="text-5xl font-bold py-5">{project.name}</h1>
            <p className="text-xl font-[500]">{project.description}</p>

            {/* this button takes them to the form */}
            <button className="bg-[#A18830] text-white py-3 px-10 my-5 uppercase font-semibold">
              Request a callback
            </button>

            {/* full long description */}
            <p className="my-10 text-md">{project.description}</p>
          </div>

          <div className="bg-black">
            <div className="max-w-[1100px] mx-auto w-full py-10 md:px-0 px-10">
              {" "}
              <h1 className="text-5xl font-bold py-5 text-white ">Gallery</h1>
              <div className="max-w-[1100px] mx-auto w-full overflow-hidden">
                {project.gallery && <Carousel gallery={project.gallery} />}
              </div>
            </div>
          </div>

          <div className="max-w-[1100px] mx-auto w-full py-10  px-10 md:px-0">
            <h1 className="text-5xl font-bold py-5 text-black">Nearby.</h1>
            <ul className="md:ml-10 ml-3 flex flex-col gap-3">
              {project?.landmarks?.map((landmark) => (
                <li key={landmark._id}>
                  <h1 className="text-3xl font-semibold text-[#A18830]">
                    {landmark.title}
                  </h1>
                  <span>{landmark.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-[1100px] mx-auto w-full py-10 md:px-0 px-10">
            {project?.community && (
              <>
                <h1 className="text-5xl font-bold py-5 text-black">
                  The Community.
                </h1>
                <p className="my-10 text-md ">
                  {project?.community?.description}
                </p>
              </>
            )}
          </div>

          <div className="max-w-[1100px] mx-auto w-full py-10  px-10 md:px-0">
            <h1 className="text-5xl font-bold py-5 text-black">
              Amenities and Advantages.
            </h1>
            <p className="font-[500] text-xl">
              Where leisure and fun come together
            </p>

            <div>
              <Amenities data={project?.amenities} />
            </div>

            {/* <Maps/> */}

            {/* accordion */}
            <MainAccordion data={project?.faqs} />
          </div>
          

          <div>
            <div className="max-w-[1100px] mx-auto w-full mb-10">
            <div className="">
        <div className="max-w-screen-xl px-8 flex flex-col py-10 mx-auto text-gray-900 rounded-lg">
          <div className="flex flex-col justify-center items-center px-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lets talk about everything!
              </h2>
            </div>
            <div className="mt-8 text-center"></div>
          </div>
          <div className="">
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
          </div>
          
        </div>
      )}
    </main>
  );
};

const MainAccordion = ({ data }) => {
  return (
    <div>
      <div>
        <h3 className="text-4xl capitalize font-bold py-10">
          Frequently asked questions
        </h3>
        <h3 className="text-4xl capitalize font-raleway font-bold py-10">Frequently asked questions</h3>
        <div className="main-title-underline"></div>
        {data?.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailClient;
