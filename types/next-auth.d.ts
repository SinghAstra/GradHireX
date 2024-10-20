import NextAuth, { DefaultSession, DefaultUser } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string
      role: string
      // Add any other properties you want to include in the session
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    role: string
    // Add any other properties from your User model
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: string
    // Add any other properties you want to include in the JWT
  }
}