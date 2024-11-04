"use client";
import { NavItem } from "@/components/NavItem";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/user-avatar";
import { ADMIN_ROLE, HR_ROLE } from "@/config/app.config";
import { siteConfig } from "@/config/site";
// import { MobileNav } from "@/layouts/mobile-nav";

import {
  adminNavbar,
  nonUserNavbar,
  userNavbar,
} from "@/lib/constant/app.constant";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export const CompanyLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={"/assets/images/favicon.ico"}
        alt={`${siteConfig.name} logo`}
        width={30}
        height={30}
        className="rounded"
        priority
      />
      <h3 className="text-xl font-bold">
        <span className="text-primary">{siteConfig.name}</span>
      </h3>
    </div>
  );
};

const Header = () => {
  const session = useSession();

  return (
    <>
      <nav className="fixed w-full z-50 backdrop-blur-lg border-b">
        <div className="flex h-[72px] w-full items-center justify-between lg:px-20 px-3 shadow-sm">
          <Link href="/" className="p-2.5">
            <CompanyLogo />
          </Link>
          <div className="flex items-center">
            <ul className="md:flex items-center gap-4 text-sm lg:gap-6 hidden mx-4">
              {session.status === "loading"
                ? nonUserNavbar.map((_, index) => (
                    <Skeleton className="h-4 w-[60px]" key={index} />
                  ))
                : session.data?.user
                ? session.data?.user.role === ADMIN_ROLE ||
                  session.data?.user.role === HR_ROLE
                  ? adminNavbar.map((item) => (
                      <NavItem {...item} key={item.id} />
                    ))
                  : userNavbar.map((item) => (
                      <NavItem {...item} key={item.id} />
                    ))
                : nonUserNavbar.map((item) => (
                    <NavItem {...item} key={item.id} />
                  ))}
            </ul>
            <div className="hidden md:block">
              <UserAvatar />
            </div>

            <div className="md:hidden flex justify-center ml-3">
              {/* <MobileNav /> */}
            </div>
          </div>
        </div>
      </nav>
      <div className="h-[72px] print:hidden"></div>
    </>
  );
};

export default Header;
