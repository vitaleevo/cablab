import { type NextRequest, NextResponse } from "next/server"
import {
  SITE_COOKIE,
  SITE_DESKTOP,
  isMobileUserAgent,
  resolveMobilePath,
} from "@/lib/mobile"

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Opt-in/out explícito: ?site=desktop | ?site=mobile
  const siteParam = searchParams.get("site")
  if (siteParam === SITE_DESKTOP || siteParam === "mobile") {
    const url = request.nextUrl.clone()
    url.searchParams.delete("site")
    const response = NextResponse.redirect(url)
    response.cookies.set(SITE_COOKIE, siteParam, { path: "/", maxAge: 60 * 60 * 24 * 90 })
    return response
  }

  // Utilizador prefere o site completo ou já está na versão mobile.
  if (request.cookies.get(SITE_COOKIE)?.value === SITE_DESKTOP) return NextResponse.next()
  if (pathname === "/m" || pathname.startsWith("/m/")) return NextResponse.next()

  const mobilePath = resolveMobilePath(pathname)
  if (mobilePath && isMobileUserAgent(request.headers.get("user-agent"))) {
    const url = request.nextUrl.clone()
    url.pathname = mobilePath
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/sobre", "/servicos", "/obras", "/arquitectura", "/contactos", "/m/:path*"],
}
