import { sanityClient } from "@/lib/sanityClient";

export const getLatestFeatured = async () => {
  const query = `*[_type == "featured"]{
        _id,
        name,
        description, 
        bannerImage{
            asset->{
                url
            }
        },
        country,
        city,
        projects[]{
            _id,
            bannerImage{
                asset->{
                    url
                }
            }
        },

        }
    }`;

  const featured = await sanityClient.fetch(query);
  return featured;
};
