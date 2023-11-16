import { sanityClient } from "@/lib/sanityClient";

export const getAllNews = async () => {
  const query = `*[_type == "newsBlog"]{
        _id,
        title,
        body, 
        bannerImage{
            asset->{
                url
            }
        },
    }`;

  const news = await sanityClient.fetch(query);
  return news;
};
