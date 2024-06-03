import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const NavBar = () => {
  return (
    <div className='sticky bg-red-500'>
      NavBar
      <SignedIn>
        <UserButton signInUrl='/welcome' />
      </SignedIn>
    </div>
  );
};

export default NavBar;
