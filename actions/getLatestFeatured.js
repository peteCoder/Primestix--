import { sanityClient } from "@/lib/sanityClient";

export const getLatestFeatured = async () => {
    const query = `*[_type == "featured"]{
        _id,
    name,
    description,
    country->{name},
    city->{name},
    bannerImage{
        asset->{url}
    },
    projects[]->{
        name,
        bannerImage{
            asset->{url}
        },
    }
  }`;

  const featured = await sanityClient.fetch(query);
  return featured;
};




/*
 
_id,
        name,
        description,
        country->{name},
        city->{name},
        bannerImage{
            asset->{
                url
            }
        },
        projects[]->{
            name,
            bannerImage{
            asset->{
                url
            }
        },


 */




/*

{
        _id,
        name,
        description,
        country,
        city,
        bannerImage{
            asset->{
                url
            }
        },
        projects[]{
            _id,
            bannerImage{
                asset->{
                    url
                }
            }
        },

        
    }`

*/
