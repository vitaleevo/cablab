import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
    </>
  )
}
