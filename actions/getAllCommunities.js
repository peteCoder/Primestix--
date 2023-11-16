import { sanityClient } from "@/lib/sanityClient";

export const getAllCommunities = async () => {
  const query = `*[_type == "community"]{
        _id,
        name,
        short_description,
        description,
        location,
        image
    }`;

  const communities = await sanityClient.fetch(query);
  return communities;
};
