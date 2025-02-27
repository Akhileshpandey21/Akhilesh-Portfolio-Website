import { data } from "autoprefixer";
import { NextResponse } from "next/server";



import nodemailer from "nodemailer";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, subject, message } =await req.json();

  // Transporter setup (Use your email provider's SMTP settings)
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can change this (e.g., Outlook, Yahoo)
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // App password (not your actual password)
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // Replace with the recipient's email
    subject: `New message from ${email}: ${subject}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(error);
  }
}
