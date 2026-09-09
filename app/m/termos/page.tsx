import { TermosContent } from "@/components/legal-content"

export const metadata = { title: "Termos de Utilização" }

export default function MobileTermos() {
  return (
    <section className="px-4 py-8">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-2 text-3xl">Termos de Utilização.</h1>
      <div className="mt-6">
        <TermosContent />
      </div>
    </section>
  )
}
