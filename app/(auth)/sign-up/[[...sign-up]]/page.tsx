import { SignUp } from "@clerk/nextjs";

import React from "react";

export default function page() {
  return <SignUp path='/sign-up' signInUrl='/sign-in' />;
}
