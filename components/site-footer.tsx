import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { CONTACTOS, LEGAL_LINKS, NAV } from "@/lib/site"
export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/75">
      <div className="site-container grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.1fr]">
        <div>
          <Link href="/" aria-label="CABLAB — página inicial">
            <Image
              src="/logo-cablab.png"
              alt="Logótipo CABLAB"
              width={1080}
              height={1080}
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Engenharia civil e arquitectura em Angola. Construímos espaços e desenvolvemos projectos
            com uma visão de futuro.
          </p>
          <p className="mt-6 text-xs">
            Desde 2020 · Alvará Classe 6<br />
            NIF {CONTACTOS.nif}
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Explore</h2>
          <nav aria-label="Navegação do rodapé" className="mt-4 grid gap-3 text-sm">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="w-fit hover:text-brand">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Fale connosco</h2>
          <address className="mt-4 space-y-3 text-sm not-italic">
            <p>
              <a href={CONTACTOS.tel1Href} className="hover:text-brand">
                {CONTACTOS.tel1}
              </a>
              <br />
              <a href={CONTACTOS.tel2Href} className="hover:text-brand">
                {CONTACTOS.tel2}
              </a>
            </p>
            <p>
              <a href={`mailto:${CONTACTOS.email1}`} className="hover:text-brand">
                {CONTACTOS.email1}
              </a>
              <br />
              <a href={`mailto:${CONTACTOS.email2}`} className="hover:text-brand">
                {CONTACTOS.email2}
              </a>
            </p>
            <p>{CONTACTOS.endereco}</p>
            <a
              href={CONTACTOS.mapa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand"
            >
              Ver localização aproximada
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="site-container flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p>© {new Date().getFullYear()} CABLAB SU Angola.</p>
          <nav aria-label="Informação legal" className="flex flex-wrap gap-x-4 gap-y-2">
            {LEGAL_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
