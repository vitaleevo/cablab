import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { MobileTabBar } from "@/components/mobile-tabbar"
import { CONTACTOS, LEGAL_LINKS } from "@/lib/site"

export const metadata: Metadata = {
  title: "Versão mobile",
  description: "CABLAB em formato mobile: obras, serviços e contacto rápido em Luanda.",
}

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-white pb-24">
      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
        <div className="flex min-h-16 items-center justify-between gap-3 px-4">
          <Link href="/m" aria-label="CABLAB mobile — início" className="flex items-center gap-2">
            <Image
              src="/logo-cablab.png"
              alt="Logótipo CABLAB"
              width={1080}
              height={1080}
              className="h-10 w-auto"
            />
            <span className="text-lg font-bold tracking-tight text-navy">CABLAB</span>
          </Link>
          <a
            href={CONTACTOS.tel1Href}
            aria-label={`Ligar ${CONTACTOS.tel1}`}
            className="flex size-11 items-center justify-center rounded-full bg-brand text-ink"
          >
            <Phone size={20} aria-hidden="true" />
          </a>
        </div>
      </header>
      <main>{children}</main>
      <nav aria-label="Informação legal" className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-4 pt-8 text-xs text-muted-foreground">
        {LEGAL_LINKS.map((item) => (
          <Link key={item.href} href={`/m${item.href}`} className="underline">
            {item.label}
          </Link>
        ))}
      </nav>
      <p className="px-4 pt-4 text-center text-xs text-muted-foreground">
        <Link href="/?site=desktop" className="underline">
          Ver site completo
        </Link>
      </p>
      <MobileTabBar />
    </div>
  )
}
