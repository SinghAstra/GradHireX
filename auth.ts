import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./lib/db";
import { ErrorHandler } from "./lib/error";
import { SignInSchema } from "./lib/validators/auth.validator";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
    signUp: "/sign-up",
    error: "/auth/error",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        name: { label: "Name", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const result = SignInSchema.safeParse(credentials);

        console.log("result --safeParse --auth.ts is ", result);

        if (!result.success) {
          throw new ErrorHandler(
            "Input Validation failed",
            "VALIDATION_ERROR",
            {
              fieldErrors: result.error.flatten().fieldErrors,
            }
          );
        }

        const { email, password } = result.data;
        const user = await prisma.user.findUnique({
          where: {
            email: email,
            //   emailVerified: { not: null },
            //   blockedByAdmin: null,
          },
          select: {
            id: true,
            name: true,
            password: true,
            role: true,
            emailVerified: true,
            //   onBoard: true,
          },
        });

        if (!user || !user.password)
          throw new ErrorHandler(
            "Email or password is incorrect",
            "AUTHENTICATION_FAILED"
          );

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
          throw new ErrorHandler(
            "Email or password is incorrect",
            "AUTHENTICATION_FAILED"
          );
        }

        return {
          id: user.id,
          name: user.name,
          email: email,
          isVerified: !!user.emailVerified,
          role: user.role,
          // onBoard: user.onBoard,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
        // You can add additional user data to the token here
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        // Add any additional user data to the session here
      }
      return session;
    },
  },
};

// Type declarations to extend next-auth types
// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       name: string;
//       email: string;
//       image?: string;
//     };
//   }

//   interface User {
//     id: string;
//     name: string;
//     email: string;
//     image?: string;
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string;
//   }
// }
