"use client";
import { getNameInitials } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
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

  return (
    <>
      {session.status === "loading" ? (
        <Skeleton className="h-8 w-8 rounded-full" />
      ) : session.status === "authenticated" ? (
        <>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full"
                aria-label="avatar"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={
                      session.data.user.image
                        ? session.data.user.image
                        : "hello"
                    }
                  />

                  <AvatarFallback>
                    {getNameInitials(session.data.user.name)}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem>
                <Icons.profile className="mr-2 h-4 w-4" />
                <Link
                  className="w-full"
                  href={"/profile/" + session.data.user.id}
                >
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  signOut();
                }}
              >
                <Icons.logout className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <div>
          <Button
            className="rounded-lg"
            size="sm"
            variant="default"
            onClick={() => {
              router.push("/sign-in");
            }}
            aria-label="login"
          >
            Login
          </Button>
        </div>
      )}
    </>
  );
}
