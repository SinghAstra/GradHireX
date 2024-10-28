"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { VerticalAnimationContainer } from "../global/animation-container";
import MaxWidthWrapper from "../global/max-width-wrapper";
import { Icons } from "../ui/Icons";
import { UserAvatar } from "../user-avatar";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const session = useSession();
  const isAuthenticated = session.status === "authenticated" ? true : false;
  const isAuthenticating = session.status === "loading" ? true : false;

  const handleScroll = () => {
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 inset-x-0 h-14 w-full border-b border-transparent z-[99999] select-none",
        scroll && "border-background/80 bg-background/40 backdrop-blur-md"
      )}
    >
      <VerticalAnimationContainer reverse delay={0.1} className="size-full">
        <MaxWidthWrapper className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link href="/">
              <span className="text-lg font-medium  !leading-none">
                {siteConfig.name}
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            {isAuthenticating ? (
              <Button variant="outline">
                <Icons.spinner className="animate-spin mr-2" />
                Wait...
              </Button>
            ) : isAuthenticated ? (
              <div className="flex items-center gap-1 md:gap-1 lg:gap-4">
                <UserAvatar />
              </div>
            ) : (
              <div className="flex">
                <div className="flex items-center gap-x-4">
                  <Link
                    href="/sign-in"
                    className={buttonVariants({ size: "sm", variant: "ghost" })}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-in"
                    className={buttonVariants({
                      size: "sm",
                      className: "bg-white",
                    })}
                  >
                    Get Started
                    <Icons.zap className="size-4 ml-1.5 text-orange-500 fill-orange-500" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <MobileNavbar />
        </MaxWidthWrapper>
      </VerticalAnimationContainer>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2 text-neutral-300">
            <Icon className="h-4 w-4" />
            <h6 className="text-sm font-medium !leading-none">{title}</h6>
          </div>
          <p
            title={children! as string}
            className="line-clamp-1 text-sm leading-snug text-muted-foreground"
          >
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
