// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth"; // Assuming your auth.ts is in the root

export async function middleware(request: NextRequest) {
  const session = await auth();
  const pathname = new URL(request.url).pathname;

  // Define the paths that require authentication
  const protectedPaths = ["/dashboard", "/profile"]; // Add more paths as needed

  if (
    protectedPaths.some((path) => !pathname.startsWith(path)) &&
    !session?.user
  ) {
    const url = new URL(`/signup`, request.url);
    url.searchParams.set("callbackUrl", pathname); // Redirect back after sign-in
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Allow the request to proceed
}

// Optionally, you can specify which paths this middleware should run for
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // Apply to all routes under /dashboard and /profile
  // matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'], // Apply to all routes except these
};
