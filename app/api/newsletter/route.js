import { sanityClient } from "@/lib/sanityClient";
import { NextResponse } from "next/server";

// Only post method is allowed here

export const POST = async (res) => {
  const { email } = await res.json();

  const emailQuery = `*[_type == 'newsletter' && email == '${email}']`;
  const emailExists = await sanityClient.fetch(emailQuery);

  if (emailExists.length !== 0) {
    return NextResponse.json({
      message: "Thank you for submitting.",
      status: 200,
    });
  }

  const doc = {
    _type: "newsletter",
    email,
  };
  // The user will send his email here
  // The email will be added to the user's sanity NewLetter Document

  const response = await sanityClient.create(doc);

  const { _id } = response;

  if (_id) {
    return NextResponse.json(
      { message: "Newsletter Application successful.", status: 200 },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "Newasletter was not successful. Try again.", status: 400 },
      { status: 400 }
    );
  }
};
