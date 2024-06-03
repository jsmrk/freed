import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return <SignIn path='/sign-in' signUpUrl='/sign-up' />;
};

export default Page;
