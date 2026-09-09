import { CookiesContent } from "@/components/legal-content"

export const metadata = { title: "Política de Cookies" }

export default function MobileCookies() {
  return (
    <section className="px-4 py-8">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-2 text-3xl">Política de Cookies.</h1>
      <div className="mt-6">
        <CookiesContent />
      </div>
    </section>
  )
}
