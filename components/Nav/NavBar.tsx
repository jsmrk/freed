"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";

import Link from "next/link";

import Image from "next/image";
import { useTheme } from "next-themes";
import { NavLinks } from "@/constants/NavLinks";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <div className='sticky top-0 z-50 flex justify-between items-center bg-secondaryBackground py-3 px-5 md:px-11'>
      <Link href={"/"}>
        <Image
          src={theme === "light" ? "/logo-2-light.svg" : "/logo-2-dark.svg"}
          alt='Freed Logo'
          height={120}
          width={120}
        />
      </Link>

      <SignedIn>
        <div className='hidden lg:flex gap-5 items-center'>
          {NavLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "bg-gradient-to-t from-start to-end"
                  : ""
              } py-3 px-11 rounded-2xl`}
            >
              <div className='flex items-center gap-5'>
                <Image
                  src={
                    pathname === item.href
                      ? item.whiteIcon
                      : theme === "light"
                      ? item.greyIcon
                      : item.whiteIcon
                  }
                  alt={`${item.title} icon`}
                  height={25}
                  width={25}
                />
                {pathname === item.href ? (
                  <p className='text-white font-bold'>{item.title}</p>
                ) : (
                  <></>
                )}
              </div>
            </Link>
          ))}
        </div>
      </SignedIn>

      <div className='flex gap-5 items-center'>
        <ThemeToggle />

        <SignedOut>
          <Link href={"/sign-in"}>
            <Button>Sign In</Button>
          </Link>
        </SignedOut>

        <SignedIn>
          <UserButton signInUrl='/welcome' />
          <MobileNav />
        </SignedIn>
      </div>
    </div>
  );
};

export default NavBar;
