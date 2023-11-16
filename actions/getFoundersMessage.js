import { sanityClient } from "@/lib/sanityClient";

export const getFoundersMessage = async () => {
  const query = `*[_type == 'founder']{
        name,
        message,
        description,
        numberOfHomesDelivered,
        timeOfDelivery,
        numberOfHomesInPlanning,
        image{
            asset->{
                url
            }
        }

    }`;

  const data = await sanityClient.fetch(query);
  return data[0];
};
