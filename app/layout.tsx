import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "CABLAB — Engenharia civil e arquitectura em Angola",
    template: "%s — CABLAB",
  },
  description:
    "CABLAB SU Angola: construção civil, arquitectura, fiscalização e infra-estruturas desde 2020. Alvará Classe 6. Luanda.",
  metadataBase: new URL("https://www.cablab.ao"),
  openGraph: {
    title: "CABLAB — Engenharia civil e arquitectura em Angola",
    description:
      "Construção civil, arquitectura e fiscalização desde 2020. Alvará Classe 6.",
    locale: "pt_AO",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-AO" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
