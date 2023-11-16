import { sanityClient } from "@/lib/sanityClient";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // Here we get our URL (req.url) in a readable browser url format like
    // `/api/project?search=foo&country=bar&project_name=foo&orderOfItems=price%20asc`
    const searchURL = new URL(req.url);

    const { searchParams } = searchURL;

    // These are the search query parameters gotten from the URL
    // The searchParams.get() method will return an empty string if
    // the user sends nothing.

    const searchTerm = searchParams.get("search");
    const country = searchParams.get("country");
    const projectType = searchParams.get("project_type");
    const orderOfItems = searchParams.get("orderOfItems");
    const selectedCity = searchParams.get("city");

    // This is the complex sanity query that fetches an array of objects
    // based on some provided search parameters.
    // That is how the filtering magic happens!
    // Oh sorry, I meant logic! 😊

    // GROQ ---- Sanity's Query Language similar to GraphQL,
    // although not entirely 😊

    const querySearch = `*[_type == 'project' && 
      (name match $searchTerm || 
      description match $searchTerm || 
      location match $searchTerm)${
        country ? ` && country->name match $country` : ""
      }${projectType ? ` && projectType match $projectType` : ""}${
      selectedCity ? ` && city->name match $selectedCity` : ""
    }] | order(${orderOfItems})  {
      _id,
      name,
      city->{name},
      price,
      description,
      location,
      projectType,
      country->{name},
      long,
      lat,
      faqs[]{question, answer},
      landmarks[]{title, description},
      amenities[]{description},
      gallery[]{ImageUrl {asset->{
        url
      }}},
      createdAt
    }`;

    const projects = await sanityClient.fetch(querySearch, {
      searchTerm: `${searchTerm}*`,
      country: `${country}*`,
      projectType: `${projectType}*`,
      selectedCity: `${selectedCity}*`,
    });

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
