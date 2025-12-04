import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // If no token and trying to access /dashboard...
  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Otherwise allow
  return NextResponse.next();
}

// Apply middleware only to /dashboard and its subpaths
export const config = {
  matcher: ["/dashboard/:path*"],
};
