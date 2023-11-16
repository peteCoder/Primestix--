import CommunityDetailClient from "@/components/CommunityDetailClient";
import Filter from "@/components/Filter";
import { sanityClient } from "@/lib/sanityClient";
import React from "react";

const CommunityDetail = async ({ params: { communityId } }) => {
  // Here we fetch the community through the server
  const query = `*[_type == 'community' && _id == '${communityId}']`;

  const community = await sanityClient.fetch(query);

  const communityData = community[0];

  return (
    <main className="min-h-screen mt-20">
      <div className="caption-section text-white">
        <div className="max-w-[768px] lg:max-w-[1170px] mx-auto px-[15px] ">
          <h1 className="text-[53px] font-bold tracking-[2.06px] pt-[20px]">
            {communityData?.name}
          </h1>
          <h2 className="text-[17px] font-bold">Discover your dream community</h2>
        </div>
      </div>

      <Filter />

      <div>
        {/* Here we render the Project list client */}
        <CommunityDetailClient communityId={communityId} />
      </div>
    </main>
  );
};

export default CommunityDetail;
