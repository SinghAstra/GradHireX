import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  console.log("session is ", session);

  if (session) redirect(`/`);

  return children;
}
