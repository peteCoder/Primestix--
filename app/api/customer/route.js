import { sanityClient } from "@/lib/sanityClient";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const GET = async (res) => {
  return NextResponse.json({ message: "Working o" }, { status: 200 });
};

export const POST = async (res) => {
  // ykprzvmzeippmdta
  const {
    initials,
    firstName,
    lastName,
    phone,
    email,
    newsletterConfirmation, // Boolean
    message,
    subject,
  } = await res.json();

  const doc = {
    _type: "customer",
    initials,
    firstName,
    lastName,
    phone,
    email,
    newsletterConfirmation, // Boolean
    message,
    subject,
  };

  const response = await sanityClient.create(doc);

  const { _id } = response;

  // nodemailer transporter instantiation
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "talk2peteresezobor@gmail.com",
      pass: "ykprzvmzeippmdta",
    },
  });

  // Mail Options
  const mailOptions = {
    from: email,
    to: "peteresezoborcode@gmail.com",
    subject: subject,
    text: message,
  };

  if (_id) {
    // Send mail if the
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    return NextResponse.json(
      { message: "Message was sent successful." },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "Message was not submitted successful. Try again." },
      { status: 400 }
    );
  }
};
