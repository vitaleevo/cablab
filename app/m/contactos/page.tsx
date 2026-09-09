import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { CONTACTOS } from "@/lib/site"

export const metadata = { title: "Contactos e orçamentos", alternates: { canonical: "/contactos" } }

export default function MobileContactos() {
  return (
    <section className="px-4 py-8">
      <p className="eyebrow">Contactos</p>
      <h1 className="mt-2 text-3xl">Tudo começa com uma conversa.</h1>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <a href={CONTACTOS.tel1Href} className="action-link px-2 text-xs">
          <Phone size={18} aria-hidden="true" />
          Ligar
        </a>
        <a
          href={CONTACTOS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="action-link action-dark px-2 text-xs"
        >
          <MessageCircle size={18} aria-hidden="true" />
          WhatsApp
        </a>
      </div>
      <div className="mt-6 space-y-3 text-sm">
        <p>
          <a href={CONTACTOS.tel1Href} className="font-semibold hover:underline">
            {CONTACTOS.tel1}
          </a>
          <br />
          <a href={CONTACTOS.tel2Href} className="font-semibold hover:underline">
            {CONTACTOS.tel2}
          </a>
        </p>
        <p>
          <a href={`mailto:${CONTACTOS.email1}`} className="flex items-center gap-2 hover:underline">
            <Mail size={16} aria-hidden="true" className="text-brand-ink" />
            {CONTACTOS.email1}
          </a>
        </p>
        <p className="flex items-start gap-2 text-muted-foreground">
          <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-ink" />
          {CONTACTOS.endereco}
        </p>
      </div>
      <div className="mt-6 rounded-md border bg-white p-5 shadow-sm">
        <p className="eyebrow">O seu próximo projecto</p>
        <h2 className="mt-2 text-xl">Pedir orçamento</h2>
        <div className="mt-4">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
