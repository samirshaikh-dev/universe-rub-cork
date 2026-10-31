import { NextResponse } from "next/server";

const LEGACY_REDIRECTS = {
  "/index.php": "/",
  "/about.php": "/about",
  "/corkproducts.php": "/products/cork",
  "/rubbercorkproduct.php": "/products/rubberised-cork",
  "/decorative-cork.php": "/products/decorative-cork",
  "/cork-gift.php": "/products/cork-gifts",
  "/contact.php": "/contact",
};

export function proxy(request) {
  const destination = LEGACY_REDIRECTS[request.nextUrl.pathname];

  if (!destination) return NextResponse.next();

  const target = new URL(destination, request.url);
  target.search = request.nextUrl.search;

  return NextResponse.redirect(target, { status: 301 });
}

export const config = {
  matcher: [
    "/index.php",
    "/about.php",
    "/corkproducts.php",
    "/rubbercorkproduct.php",
    "/decorative-cork.php",
    "/cork-gift.php",
    "/contact.php",
  ],
};
