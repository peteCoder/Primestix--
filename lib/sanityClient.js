import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// This is the sanity database configuration,
// but please ensure you store this securely in an environment variable file
// like .env

export const sanityClient = createClient({
  projectId: "smpp650j",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-11-10", // use current date (YYYY-MM-DD) to target the latest API version
  token:
    "sk4yNi3UFVs793yvmwhgGKOv0x4RFWCDxVmTcUC27OaRxbzRL0BGxPC0Yr6lXWb7dEpZ42spasxMHvBHgzhLlzNWG2IaSIXN4yhTRLMP8w09ulwSc5V1bgeYFHgWX8oxQnmscVJvDH3FRZf3VmfV7soSI1Uhqmx5UoAFRC17K9P6sMvpIYvO",
});

const builder = imageUrlBuilder(sanityClient);

// The urlfor is a sanity image url builder
// You can use it if you wish,
// although initially, I did not.
// Check `@/components/Project.js` file
export const urlFor = (source) => {
  return builder.image(source);
};
