import { sanityClient } from "@/lib/sanityClient";

export const getAllCountries = async () => {
  const query = `*[_type == "country"]{
        _id,
        name,
    }`;

  const country = await sanityClient.fetch(query);
  return country;
};
