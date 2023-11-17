import { sanityClient } from "@/lib/sanityClient";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const GET = async (res) => {
  return NextResponse.json({ message: "Working o" }, { status: 200 });
};

export const POST = async (res) => {
  const { firstName, lastName, phoneNumber, email, message } = await res.json();

  const doc = {
    _type: "customer",
    firstName,
    lastName,
    phone: phoneNumber,
    email,
    message,
    // subject,
  };

  const response = await sanityClient.create(doc);

  const { _id } = response;

  // nodemailer transporter instantiation
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_EMAIL_PROVIDER,
    auth: {
      user: process.env.SMTP_EMAIL_USER,
      pass: process.env.SMPT_EMAIL_PASSWORD,
    },
  });

  // Mail Options
  const mailOptions = {
    from: email,
    to: process.env.SMTP_EMAIL_RECEPIENT,
    subject: `Message from ${firstName} ${lastName}, a customer of Primestix.`,
    text: `Customer email: ${email}. \n\n Customer message: ${message}`,
  };

  if (_id) {
    // Send mail if the
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return NextResponse.json(
          {
            message: "Message was not submitted successful. Please try again.",
            status: 400,
          },
          { status: 400 }
        );
      } else {
        console.log("Email sent: " + info.response);
        return NextResponse.json(
          { message: "Message was sent successful.", status: 200 },
          { status: 200 }
        );
      }
    });
    return NextResponse.json(
      { message: "Message was sent successful.", status: 200 },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      {
        message: "Message was not submitted successful. Try again.",
        status: 400,
      },
      { status: 400 }
    );
  }
};
