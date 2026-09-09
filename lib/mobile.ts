export const MOBILE_HOME = "/m"

const MOBILE_MAP: Record<string, string> = {
  "/": "/m",
  "/sobre": "/m/sobre",
  "/servicos": "/m/servicos",
  "/obras": "/m/obras",
  "/arquitectura": "/m/arquitectura",
  "/contactos": "/m/contactos",
  "/privacidade": "/m/privacidade",
  "/termos": "/m/termos",
  "/cookies": "/m/cookies",
}

const MOBILE_UA =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i

export function isMobileUserAgent(userAgent: string | null): boolean {
  return userAgent !== null && MOBILE_UA.test(userAgent)
}

export function resolveMobilePath(pathname: string): string | null {
  return MOBILE_MAP[pathname] ?? null
}

export const SITE_COOKIE = "site"
export const SITE_DESKTOP = "desktop"
