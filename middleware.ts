import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const PublicRoute = createRouteMatcher([
  "/",
  "/welcome(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks",
]);

export default clerkMiddleware((auth, request) => {
  if (!PublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
