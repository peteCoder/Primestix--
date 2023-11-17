import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// This is the sanity database configuration,
// but please ensure you store this securely in an environment variable file
// like .env

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-11-10", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

// The urlfor is a sanity image url builder
// You can use it if you wish,
// although initially, I did not.
// Check `@/components/Project.js` file
export const urlFor = (source) => {
  return builder.image(source);
};
