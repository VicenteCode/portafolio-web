import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SUPPORTED_LANGS, DEFAULT_LANG } from "@/lib/i18n/types";
import { checkRateLimit } from "@/lib/rate-limit";

const PDF_PATTERN = /\.pdf$/i;

function getIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PDF_PATTERN.test(pathname)) {
    const result = checkRateLimit(`pdf:${getIp(request)}`);
    if (result.limited) {
      return new NextResponse("Too Many Requests", {
        status: 429,
        headers: {
          "Retry-After": String(result.retryAfter),
          "Content-Type": "text/plain",
        },
      });
    }
    return NextResponse.next();
  }

  const hasLang = SUPPORTED_LANGS.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );
  if (!hasLang) {
    return NextResponse.redirect(
      new URL(`/${DEFAULT_LANG}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!_next|favicon\\.ico|.*\\.(?!pdf$)[a-zA-Z0-9]+$).*)"],
};
