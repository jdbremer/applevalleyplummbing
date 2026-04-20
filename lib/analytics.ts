import type { NextRequest } from "next/server";

const UMAMI_URL = process.env.UMAMI_SERVER_URL;
const UMAMI_WEBSITE_ID = process.env.UMAMI_WEBSITE_ID;

export async function trackPageview(request: NextRequest): Promise<void> {
  if (!UMAMI_URL || !UMAMI_WEBSITE_ID) return;

  const { pathname, search, hostname } = request.nextUrl;
  const referrer = request.headers.get("referer") ?? "";
  const userAgent = request.headers.get("user-agent") ?? "";
  const forwardedFor =
    request.headers.get("x-forwarded-for") ??
    request.headers.get("x-real-ip") ??
    "";
  const acceptLanguage =
    (request.headers.get("accept-language") ?? "").split(",")[0] || "en-US";

  const body = {
    type: "event",
    payload: {
      website: UMAMI_WEBSITE_ID,
      hostname,
      url: pathname + search,
      referrer,
      language: acceptLanguage,
      screen: "",
      title: "",
    },
  };

  try {
    await fetch(`${UMAMI_URL.replace(/\/$/, "")}/api/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": userAgent,
        "X-Forwarded-For": forwardedFor,
      },
      body: JSON.stringify(body),
    });
  } catch {
    // swallow — never let analytics break a page load
  }
}
