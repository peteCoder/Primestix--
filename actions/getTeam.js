import { sanityClient } from "@/lib/sanityClient";

export const getTeam = async () => {
  const query = `*[_type == 'team']{
        name,
        bio,
        position,
        coverImage{
            asset->{
                url
            }
        }
    }`;

  const data = await sanityClient.fetch(query);

  return data;
};
