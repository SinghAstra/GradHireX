"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import React, { useState } from "react";
import { Icons } from "../ui/Icons";

const MobileNavbar = () => {
  const isSignedIn = false;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex lg:hidden items-center justify-end">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          {!isOpen && (
            <span className={cn(buttonVariants({ variant: "ghost" }))}>
              <Icons.menu className="w-5 h-5 absolute " />
            </span>
          )}
        </SheetTrigger>
        <SheetContent className="w-screen" aria-describedby="Mobile Navbar">
          <SheetTitle>
            <VisuallyHidden.Root>Menu</VisuallyHidden.Root>
          </SheetTitle>
          <SheetHeader>
            <SheetDescription>
              <VisuallyHidden.Root>Description goes here</VisuallyHidden.Root>
            </SheetDescription>
          </SheetHeader>
          <SheetClose
            asChild
            className="absolute top-3 right-5 bg-background z-20 flex items-center justify-center"
          />
          <div className="flex flex-col items-start w-full py-2 mt-10">
            <div className="flex items-center justify-evenly w-full space-x-2">
              {isSignedIn ? (
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full",
                  })}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/auth/sign-in"
                    className={buttonVariants({
                      variant: "outline",
                      className: "w-full",
                    })}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/sign-in"
                    className={buttonVariants({ className: "w-full" })}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
