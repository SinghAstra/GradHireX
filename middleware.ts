import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { ADMIN_ROLE, HR_ROLE, USER_ROLE } from "./config/app.config";
import APP_PATHS from "./config/path.config";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET });
  console.log("token is ", token);
  const { pathname } = new URL(req.url);
  if (!token && pathname === APP_PATHS.POST_JOB) {
    return NextResponse.redirect(new URL(APP_PATHS.SIGN_IN, req.url));
  }
  if (
    pathname === APP_PATHS.POST_JOB &&
    token?.role !== ADMIN_ROLE &&
    token?.role !== HR_ROLE
  ) {
    return NextResponse.redirect(new URL(APP_PATHS.HOME, req.url));
  }
  if (
    pathname !== APP_PATHS.CREATE_PROFILE &&
    token?.role === USER_ROLE &&
    !token.onBoard
  ) {
    return NextResponse.redirect(new URL(APP_PATHS.CREATE_PROFILE, req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
