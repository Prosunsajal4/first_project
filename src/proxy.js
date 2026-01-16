import { NextResponse } from "next/server";

export async function proxy(req) {
  const { pathname } = req.nextUrl;
  if (pathname == "/profile" || pathname == "/dashboard") {
    const isLoggedin = req.cookies.get("auth");
    if (!isLoggedin) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }
  return NextResponse.next();
}

export default proxy;
