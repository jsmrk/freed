import React from "react";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { SignedIn } from "@clerk/nextjs";
import { NavLinks } from "@/constants/NavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <div className='lg:hidden'>
      <Sheet>
        <SheetTrigger>
          <Image
            src={
              theme === "light"
                ? "/navbar/menu-light.svg"
                : "/navbar/menu-dark.svg"
            }
            alt='Menu'
            height={25}
            width={25}
          />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <Link href={"/"} className='flex justify-center py-11'>
            <Image
              src={
                theme === "light"
                  ? "/welcome/logo_light.svg"
                  : "/welcome/logo_dark.svg"
              }
              alt='Freed Logo'
              height={150}
              width={150}
            />
          </Link>
          <SignedIn>
            {NavLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "bg-gradient-to-t from-start to-end"
                    : ""
                } py-5 pl-7 rounded-2xl flex flex-col mt-5`}
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
                  <p className='text-white font-bold'>{item.title}</p>
                </div>
              </Link>
            ))}
          </SignedIn>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
