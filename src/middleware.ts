import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SUPPORTED_LANGS, DEFAULT_LANG } from "@/lib/i18n/types";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
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
  matcher: ["/((?!_next|favicon\\.ico|.*\\..*).*)"],
};
