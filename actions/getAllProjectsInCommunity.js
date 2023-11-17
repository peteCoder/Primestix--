const { sanityClient } = require("@/lib/sanityClient");

export const getAllCommunityProjects = async (communityId) => {
  const query = `*[_type == 'project' && community->_id == '${communityId}']{
      _id,
      name,
      city->{name},
      price,
      description,
      bannerImage {
        asset->{
          url
        }
      },
      location,
      projectType,
      country->{name},
      long,
      lat,
      faqs[]{question, answer},
      landmarks[]{title, description},
      amenities[]{description},
      gallery[]->{
        imageUrl{
          asset->{
            url
          }
        }
      },
      _createdAt

    }`;

  const projects = await sanityClient.fetch(query);
  return projects;
};
