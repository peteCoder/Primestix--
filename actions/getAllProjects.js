const { sanityClient } = require("@/lib/sanityClient");

export const getAllProjects = async () => {
  const query = `*[_type == 'project']{
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
