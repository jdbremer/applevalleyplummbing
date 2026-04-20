import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { trackPageview } from "@/lib/analytics";

function isRealPageview(request: NextRequest): boolean {
  if (request.method !== "GET") return false;
  // Skip React Server Component fetches (prefetch, soft navigation, revalidation)
  if (request.headers.get("RSC") || request.headers.get("rsc")) return false;
  if (request.headers.get("Next-Router-Prefetch")) return false;
  if (request.headers.get("Next-Router-State-Tree")) return false;
  if (request.nextUrl.searchParams.has("_rsc")) return false;
  // Accept only real document navigations
  const accept = request.headers.get("accept") ?? "";
  if (!accept.includes("text/html")) return false;
  return true;
}

export function middleware(request: NextRequest, event: NextFetchEvent) {
  if (isRealPageview(request)) {
    event.waitUntil(trackPageview(request));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif|css|js|woff|woff2|ttf|otf|map)).*)",
  ],
};
