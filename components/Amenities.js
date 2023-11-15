import Flickity from "react-flickity-component";

function Carousel() {
  return (
    <Flickity>
      <div className="w-[300px] mx-2 rounded-xl bg-[#A18830] h-[250px] text-2xl font-bold flex items-center text-white justify-center">
        Table tennis
      </div>
      <div className="w-[300px] mx-2 rounded-xl bg-[#A18830] h-[250px] text-2xl font-bold flex items-center text-white justify-center">
        Beach
      </div>
      <div className="w-[300px] mx-2 rounded-xl bg-[#A18830] h-[250px] text-2xl font-bold flex items-center text-white justify-center">
        Volleyball court
      </div>
      <div className="w-[300px] mx-2 rounded-xl bg-[#A18830] h-[250px] text-2xl font-bold flex items-center text-white justify-center">
        Cenima
      </div>
      <div className="w-[300px] mx-2 rounded-xl bg-[#A18830] h-[250px] text-2xl font-bold flex items-center text-white justify-center">
        Paintball 
      </div>
      <div className="w-[300px] mx-2 rounded-xl bg-[#A18830] h-[250px] text-2xl font-bold flex items-center text-white justify-center">
        Table tennis
      </div>
      <div className="w-[300px] mx-2 rounded-xl bg-[#A18830] h-[250px] text-2xl font-bold flex items-center text-white justify-center">
        Rugby 
      </div>
      <div className="w-[300px] mx-2 rounded-xl bg-[#A18830] h-[250px] text-2xl font-bold flex items-center text-white justify-center">
       Lawn tennis
      </div>
    </Flickity>
  );
}

function Amenities() {
  return (
    <div className="my-10">
      <Carousel />
    </div>
  );
}

export default Amenities
