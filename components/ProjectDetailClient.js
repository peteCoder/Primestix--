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
  console.log(section);
  return (
    <div className="accordion-container">
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




const data = [
  {
    id: 1,
    question: "What is the status of the project?",
    info: "Park Greens is an off-plan project that offers ample space both indoors and outdoors, allowing you to curate it according to your preferences."
  },
  {
    id: 2,
    question: "What are the offered unit types?",
    answer: "Park Greens offers 5-bedroom twin villas surrounded by an abundance of nature and amenities in DAMAC Hills 2."
  },
  {
    id: 3,
    question: "What are the things to do in the neighbourhood?",
    answer: "Park Greens allows residents access to over 30 world-class attractions and experiences at DAMAC Hills 2, including stables, a yoga retreat and a hydroponic farm. The community is also within minutes of Motor City, Sports City, Global Village, IMG Worlds of Adventure and other attractions."
  },
  {
    id: 4,
    question: "Which are the closest shopping malls?",
    answer: "DAMAC Hills 2 has a community mall of its own with a selection of retail stores, restaurants and a Carrefour supermarket. Away from DAMAC Hills 2, the closest shopping malls are Dubai Outlet Mall (15 mins), First Avenue Mall – Motor City (15 mins), City Centre Me'aisem (20 mins), Cityland Mall – Global Village (20 mins) and Mall of the Emirates (30 mins)."
  },
]



const flickityOptions = {
  initialIndex: 1,
};

function Carousel() {
  return (
    <Flickity
      className={"carousel"}
      elementType={"div"}
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
      <img
        className="relative w-[600px] px-5 h-auto"
        src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <img
        className="relative w-[600px] px-5 h-auto"
        src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <img
        className="relative w-[600px] px-5 h-auto"
        src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </Flickity>
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
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetailProject();
  }, [projectId]);

  return (
    <main className="h-full">
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
                backgroundImage: `url(https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundPosition: "50% center",
              }}
            />

            {/* ---banner title--- */}
            <h1 className="text-5xl font-bold py-5">Park Greens.</h1>
            <p className="text-xl font-[500]">Twin villas in DAMAC Hills 2.</p>

            {/* this button takes them to the form */}
            <button className="bg-[#A18830] text-white py-3 px-10 my-5 uppercase font-semibold">
              Request a callback
            </button>

            {/* full long description */}
            <p className="my-10 text-md">
              At the heart of DAMAC Hills 2 is Park Greens, luxurious modern
              villas that open out into a lush sanctuary - a sprawling 5.1
              million sq. ft. parkland that becomes your backyard. Life here
              blends seamlessly with nature. Experience spacious community
              living, awe-inspiring balconies and terraces overlooking manicured
              landscaping, as well as large floor-to-ceiling windows that invite
              plenty of natural light into your home. Park Greens’ five-bedroom
              twin villas are versatile with four dedicated bedrooms and an
              additional room to customise as you please. Enjoy the luxury of
              space, inside and out. While the park serves as a canvas for
              leisure and play, the community amenities offer you and your
              family a day full of adventure with its water and sports
              attractions. Here, you also enjoy the ease of commute in a
              community that has it all with access to four major highways that
              keep you well connected. Park Greens in DAMAC Hills 2. It’s where
              life, quite literally, is a walk in the park.
            </p>
          </div>

          <div className="bg-black">
            <div className="max-w-[1100px] mx-auto w-full py-10 md:px-0 px-10">
              {" "}
              <h1 className="text-5xl font-bold py-5 text-white ">Gallery</h1>
              <div className="max-w-[1100px] mx-auto w-full overflow-hidden">
                <Carousel />
              </div>
            </div>
          </div>

          
          <div className="max-w-[1100px] mx-auto w-full py-10  px-10 md:px-0">
            <h1 className="text-5xl font-bold py-5 text-black">
              Nearby.
            </h1>
            <ul className="md:ml-10 ml-3 flex flex-col gap-3">
              <li>
               <h1 className="text-3xl font-semibold text-[#A18830]">INTERNATIONAL AIRPORTS</h1> 
               <span>One the the World's best connected hubs for international travels</span>
              </li>
              <li>
              <h1 className="text-3xl font-semibold text-[#A18830]">THE SEVEN STADIUMS </h1> 
               <span>Global Sports and Entertainment venue</span>
              </li>
              <li>
              <h1 className="text-3xl font-semibold text-[#A18830]">THE SEVEN STADIUMS </h1> 
               <span>Global Sports and Entertainment venue</span>
              </li>
              <li>
              <h1 className="text-3xl font-semibold text-[#A18830]">OUTLET MALLS</h1> 
               <span>High street retail theraphy at low prices</span>
              </li>
              <li>
              <h1 className="text-3xl font-semibold text-[#A18830]">HEALTH CARE CENTERS</h1> 
               <span>Quality Healthcares, with choices of clinics and health centers</span>
              </li>
            </ul>
          </div>

          <div className="max-w-[1100px] mx-auto w-full py-10 md:px-0 px-10">
            <h1 className="text-5xl font-bold py-5 text-black">
              The Community.
            </h1>
            <p className="my-10 text-md ">
              DAMAC Hills 2 is a master community that curates a one-of-a-kind
              living experience – inspired by water, sports and fun for all
              ages. Previously known as AKOYA, DAMAC Hills 2 features clusters
              of thoughtfully-designed apartments, townhouses and villas
              surrounded by sports fields, a paintball arcade, an outdoor cinema
              and among other several attractions, the new wave pool - Malibu
              Beach. Completely self-contained and ever-growing, DAMAC Hills 2
              balances tranquil with active, away from the bustle of the city
              and yet with easy access to its business and leisure hubs. In
              addition to the new and exciting upcoming features, the community
              plays host to a mall with a supermarket, health clinic, outdoor
              gymnasium, food trucks and more.
            </p>
          </div>

          <div className="max-w-[1100px] mx-auto w-full py-10  px-10 md:px-0">
            <h1 className="text-5xl font-bold py-5 text-black">
              Amenities and Advantages.
            </h1>
            <p className="font-[500] text-xl">
              Where leisure and fun come together
            </p>

            <div>
              <Amenities />
            </div>

            {/* <Maps/> */}


            {/* accordion */}
              <MainAccordion/>
          </div>
        </div>
      )}
    </main>
  );
};

const MainAccordion = () => {
  return (
    <div>
      <div>
        <h3 className="text-4xl capitalize font-bold py-10">Frequently asked questions</h3>
        <div className="main-title-underline"></div>
        {data.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailClient;
