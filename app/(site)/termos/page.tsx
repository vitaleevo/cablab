import type { Metadata } from "next"
import { ContactCta, PageIntro } from "@/components/content-sections"
import { TermosContent } from "@/components/legal-content"

export const metadata: Metadata = {
  title: "Termos de Utilização",
  description: "Termos de Utilização do site da CABLAB: objecto, conteúdos, propriedade intelectual e contactos.",
  alternates: { canonical: "/termos" },
}

export default function Termos() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Termos de Utilização."
        description="As regras de utilização do site da CABLAB, regidas pela lei angolana."
      />
      <section className="site-container section-space max-w-3xl">
        <TermosContent />
      </section>
      <ContactCta />
    </>
  )
}
