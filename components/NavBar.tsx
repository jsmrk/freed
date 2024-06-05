"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";

const NavBar = () => {
  const { theme } = useTheme();
  return (
    <div className='sticky top-0 z-50 flex justify-between bg-secondaryBackground py-3 px-5 md:px-11'>
      <Link href={"/"}>
        <Image
          src={theme === "light" ? "/logo-2-light.svg" : "/logo-2-dark.svg"}
          alt='Freed Logo'
          height={120}
          width={120}
        />
      </Link>

      <div className='flex gap-5'>
        <ThemeToggle />
        <SignedOut>
          <Link href={"/sign-in"}>
            <Button>Sign In</Button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton signInUrl='/welcome' />
        </SignedIn>
      </div>
    </div>
  );
};

export default NavBar;
