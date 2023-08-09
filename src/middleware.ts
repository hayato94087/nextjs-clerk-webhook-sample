import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  beforeAuth(req) {
    // todo : do something
  },
  ignoredRoutes: ["/api/public/webhook"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
