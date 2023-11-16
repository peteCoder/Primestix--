import { sanityClient } from "@/lib/sanityClient";
import { NextResponse } from "next/server";

export async function GET(req, { params: { projectId } }) {
  try {
    // This is the sanity query that fetches a single
    // data based on the `projectId` parameter

    // GROQ ---- Sanity's Query Language similar to GraphQL,
    // although not entirely. 😊
    const query = `*[_type == 'project' && _id == $projectId]{
  _id,
  bannerImage {
    asset-> {
      url
    }
  },
  name,
  description,
  location,
  price,
  long,
  lat,
  faqs[] {
    question,
    answer
  },
  landmarks[] {
    title,
    description
  },
  amenities[] {
    description
  },
  gallery[] {
    ImageUrl {
      asset-> {
        url
      }
    }
  },
  community->{
    name,
    short_description,
    description
  }
}`;

    const project = await sanityClient.fetch(query, { projectId });

    return NextResponse.json(project[0], { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
