import { sanityClient } from "@/lib/sanityClient";
import { NextResponse } from "next/server";

export async function GET(req) {
  // Fetching the team data here
  // This will return an array of team mates
  try {
    const queryTeam = `*[_type == 'team']{
        name,
        bio,
        position,
        coverImage{
            asset->{
                url
            }
        }
    }`;

    const teamData = await sanityClient.fetch(queryTeam);

    return NextResponse.json(teamData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
