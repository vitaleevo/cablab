import { PrivacidadeContent } from "@/components/legal-content"

export const metadata = { title: "Política de Privacidade", alternates: { canonical: "/privacidade" } }

export default function MobilePrivacidade() {
  return (
    <section className="px-4 py-8">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-2 text-3xl">Política de Privacidade.</h1>
      <div className="mt-6">
        <PrivacidadeContent />
      </div>
    </section>
  )
}
