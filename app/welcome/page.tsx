import React from "react";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";

function Page() {
  return (
    <div>
      <h1>WELCOME TO FREED</h1>
      <SignedOut>
        <Link href={"/sign-in"}>Sign In</Link>
        <Link href={"/sign-up"}>Sign Up</Link>
      </SignedOut>
    </div>
  );
}

export default Page;
