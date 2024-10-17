import { prisma } from "@/lib/db";
import bcrypt from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    res
      .status(201)
      .json({ message: "User created successfully", userId: user.id });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
