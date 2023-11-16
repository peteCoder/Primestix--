const { sanityClient } = require("@/lib/sanityClient");

export const getAllCommunityProjects = async (communityId) => {
  const query = `*[_type == 'project' && community->_id == '${communityId}']{
      _id,
      name,
      price,
      description,
      bannerImage{
        asset->{
            url
        }
      },
      location,
      projectType,
      country,
      long,
      lat,
      faqs[],
      landmarks[]{title, description},
      amenities[]{description},
      gallery[]{ImageUrl {asset->{
        url
      }}},
      createdAt

    }`;

  const projects = await sanityClient.fetch(query);
  return projects;
};
