"use client";
import { getNameInitials } from "@/lib/utils";
import { User } from "@prisma/client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Icons from "./ui/Icons";
import { Skeleton } from "./ui/skeleton";

export function UserAvatar() {
  const session = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  console.log("session --user avatar is ", session);
  console.log("session.data.user is ", session?.data?.user);

  return <></>;
}
