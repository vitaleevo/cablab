import type { Metadata } from "next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: { default: "CABLAB — Engenharia civil e arquitectura em Angola", template: "%s — CABLAB" },
  description:
    "CABLAB SU Angola: construção civil, arquitectura, fiscalização e infra-estruturas desde 2020. Conheça o portfólio e fale connosco sobre o seu projecto.",
  metadataBase: new URL("https://www.cablab.ao"),
  openGraph: {
    title: "CABLAB — Engenharia civil e arquitectura em Angola",
    description: "Construção civil, arquitectura e fiscalização. Do projecto à obra, em Angola.",
    locale: "pt_AO",
    type: "website",
    siteName: "CABLAB",
    images: [{ url: "/img/obra-01.jpeg", alt: "Moradias do portfólio CABLAB" }],
  },
  twitter: { card: "summary_large_image" },
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-AO">
      <body className="flex min-h-dvh flex-col">
        <a
          href="#conteudo"
          className="sr-only z-50 bg-white p-4 text-navy focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Saltar para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
