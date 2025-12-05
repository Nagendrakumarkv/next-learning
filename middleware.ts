import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("next-auth.session-token")?.value ||
                req.cookies.get("__Secure-next-auth.session-token")?.value;

  if (!token && req.nextUrl.pathname.startsWith("/posts")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
  return NextResponse.redirect(new URL("/", req.url));
}

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/posts/:path*"],
};
