import { sanityClient } from "@/lib/sanityClient";

export const getAllCities = async () => {
  const query = `*[_type == "city"]{
        _id,
        name,
    }`;

  const cities = await sanityClient.fetch(query);
  return cities;
};
