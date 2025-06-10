import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix: "always",
});

export default function middleware(request) {
  const pathname = request.nextUrl.pathname;
  console.log("Middleware - Processing pathname:", pathname);

  // Extract locale from pathname
  const localeMatch = pathname.match(/^\/([a-z]{2})(\/.*)*/);
  const locale = localeMatch ? localeMatch[1] : "en";

  console.log("Middleware - Detected locale:", locale);

  // Add locale to headers so it can be accessed by getRequestConfig
  const response = intlMiddleware(request);

  if (response) {
    response.headers.set("x-locale", locale);
    response.headers.set("x-pathname", pathname);
    return response;
  }

  // If no response from intlMiddleware, create one with headers
  const newResponse = NextResponse.next();
  newResponse.headers.set("x-locale", locale);
  newResponse.headers.set("x-pathname", pathname);
  return newResponse;
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - API routes
    // - _next (Next.js internals)
    // - _vercel (Vercel internals)
    // - static files (with extensions)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
