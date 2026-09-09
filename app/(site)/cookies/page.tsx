import type { Metadata } from "next"
import { ContactCta, PageIntro } from "@/components/content-sections"
import { CookiesContent } from "@/components/legal-content"

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de Cookies da CABLAB: que cookies usamos, para que servem e como gerir preferências.",
  alternates: { canonical: "/cookies" },
}

export default function Cookies() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Política de Cookies."
        description="Sem rastreio: apenas um cookie funcional de preferência de versão."
      />
      <section className="site-container section-space max-w-3xl">
        <CookiesContent />
      </section>
      <ContactCta />
    </>
  )
}
