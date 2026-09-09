import type { Metadata } from "next"
import "./globals.css"

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
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  )
}
