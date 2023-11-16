import Flickity from "react-flickity-component";

function Carousel({ data }) {
  return (
    <Flickity>
      {data?.map((amenity) => (
        <div
          key={amenity?.description}
          className="w-[300px] mx-2 rounded-xl bg-[#A18830] h-[250px] text-2xl font-bold flex items-center text-white justify-center"
        >
          {amenity?.description}
        </div>
      ))}
    </Flickity>
  );
}

function Amenities({ data }) {
  return (
    <div className="my-10">
      <Carousel data={data} />
    </div>
  );
}

export default Amenities;
