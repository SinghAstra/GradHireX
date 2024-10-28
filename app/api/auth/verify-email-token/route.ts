import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    console.log("token --verify-email-token is ", token);

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 });
    }

    const emailVerification = await prisma.emailVerification.findUnique({
      where: { token },
    });

    console.log("token --verify-email-token is ", token);
    console.log(
      "emailVerification --verify-email-token is ",
      emailVerification
    );

    // If the token has expired delete it.

    if (!emailVerification || emailVerification.expiresAt < new Date()) {
      if (emailVerification) {
        await prisma.emailVerification.delete({
          where: { token },
        });
      }
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    // I want to update the user model but user model is not created yet
    // await prisma.user.update({
    //   where: { email: emailVerification.email },
    //   data: { emailVerified: true },
    // });

    if (emailVerification) {
      await prisma.emailVerification.delete({
        where: { token },
      });
    }

    return NextResponse.json({ message: "Email verified successfully" });
  } catch (error) {
    console.log("error --send-verify-email", error);
    return NextResponse.json(
      { error: "Failed to verify email" },
      { status: 500 }
    );
  }
}
