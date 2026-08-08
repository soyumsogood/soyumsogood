import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      console.error("Contact form environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Contact service is temporarily unavailable.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();

    const {
      name,
      email,
      phone,
      organization,
      enquiryType,
      message,
    } = body;

    if (!name || !email || !enquiryType || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "So Yum! So Good! Website <website@soyumsogood.com>",
      to: toEmail,
      replyTo: email,
      subject: `[Website] ${enquiryType} – ${name}`,
      text: `
New website enquiry

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Organization: ${organization || "Not provided"}
Enquiry Type: ${enquiryType}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your enquiry right now.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}