import Filter from "@/components/Filter";
import ProjectList from "../components/ProjectListClient";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import News from "@/components/News";
import OurTeam from "@/components/OurTeam";
import Slider from "@/components/Slides";
import ImageSlider from "@/components/imageSlider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col relative">
      <div className="carousel">
        <ImageSlider />
      </div>
      <div className="w-full h-auto">
        <Featured />
      </div>
      <div className="relative w-full bg-pattern h-auto px-5 py-40">
        <Slider />
      </div>
      <div className="relative bg-[black] pt-52 ">
        <News />
      </div>
      <OurTeam />
      <Footer />
    </main>
  );
}

