import { authOptions } from "@/auth.config";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await getServerSession(authOptions);

  if (auth) redirect(`/`);

  return children;
}
