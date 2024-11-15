"use server";
import {
  PASSWORD_HASH_SALT_ROUNDS,
  PENDING_EMAIL_VERIFICATION_USER_ID,
} from "@/config/auth.config";
import APP_PATHS from "@/config/path.config";
import { prisma } from "@/lib/db";
import { ErrorHandler } from "@/lib/error";
import { sendConfirmationEmail } from "@/lib/sendConfirmationEmail";
import {
  SignUpSchema,
  SignUpSchemaType,
} from "@/lib/validators/auth.validator";
import bcryptjs from "bcryptjs";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

export const signUpAction = async (_data: SignUpSchemaType) => {
  const data = SignUpSchema.parse(_data);

  console.log("data is ", data);

  const userExist = await prisma.user.findFirst({
    where: { email: data.email },
  });

  if (userExist)
    throw new ErrorHandler("User with this email already exist", "BAD_REQUEST");

  const hashedPassword = await bcryptjs.hash(
    data.password,
    PASSWORD_HASH_SALT_ROUNDS
  );

  try {
    await prisma.$transaction(
      async (txn) => {
        const user = await txn.user.create({
          data: { ...data, password: hashedPassword },
        });

        const verificationToken = await txn.verificationToken.create({
          data: {
            identifier: user.id,
            token: uuidv4(),
            type: "EMAIL_VERIFICATION",
          },
        });

        const confirmationLink = `${process.env.NEXT_AUTH_URL}${APP_PATHS.VERIFY_EMAIL}/${verificationToken.token}`;
        await sendConfirmationEmail(
          data.email,
          confirmationLink,
          "EMAIL_VERIFICATION"
        );

        cookies().set(PENDING_EMAIL_VERIFICATION_USER_ID, user.id, {
          maxAge: 5 * 60,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        });

        return user;
      },
      {
        maxWait: 5000,
        timeout: 20000,
      }
    );
    return {
      status: false,
      message:
        "User registered successfully. A verification link has been sent to your email.",
      code: 201,
      name: "ServerError",
    };
  } catch (error) {
    console.log("Signup error:", error);
    return {
      status: false,
      message: "Registration failed, please try again",
      code: 500,
      name: "ServerError",
    };
  }
};
