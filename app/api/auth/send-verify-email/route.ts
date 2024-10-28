import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

console.log("transporter --send-verify-email is ", transporter);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    console.log("email --send-verify-email is ", email);

    const token = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const createdEmailVerificationRow = await prisma.emailVerification.create({
      data: {
        email,
        token,
        expiresAt,
      },
    });

    console.log(
      "createdEmailVerificationRow --send-verify-email is ",
      createdEmailVerificationRow
    );

    const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/verify-email?token=${token}`;

    console.log("verificationUrl --send-verify-email is ", verificationUrl);

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Verify your email",
      html: `
        <h1>Verify your email</h1>
        <p>Click the link below to verify your email address:</p>
        <a href="${verificationUrl}">${verificationUrl}</a>
        <p>This link will expire in 24 hours.</p>
      `,
    });

    return NextResponse.json({ message: "Verification email sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send verification email" },
      { status: 500 }
    );
  }
}
