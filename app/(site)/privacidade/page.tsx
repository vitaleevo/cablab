import type { Metadata } from "next"
import { ContactCta, PageIntro } from "@/components/content-sections"
import { PrivacidadeContent } from "@/components/legal-content"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da CABLAB nos termos da Lei n.º 22/11 (LPDP): dados recolhidos, finalidades e direitos dos titulares.",
  alternates: { canonical: "/privacidade" },
}

export default function Privacidade() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Política de Privacidade."
        description="Como tratamos os seus dados pessoais, nos termos da Lei da Protecção de Dados Pessoais de Angola."
      />
      <section className="site-container section-space max-w-3xl">
        <PrivacidadeContent />
      </section>
      <ContactCta title="Dúvidas sobre os seus dados?" description="Escreva-nos e responderemos ao seu pedido." />
    </>
  )
}
