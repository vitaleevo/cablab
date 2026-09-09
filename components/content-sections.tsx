import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Plus } from "lucide-react"
import { CLIENTES, ETAPAS } from "@/lib/site"

export function PageIntro({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string
  title: string
  description: string
  image?: string
}) {
  return (
    <section className="page-intro">
      {image && (
        <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-20" priority />
      )}
      <div className="site-container relative">
        <nav
          aria-label="Localização na página"
          className="mb-8 flex items-center gap-3 text-sm text-white/75"
        >
          <Link href="/" className="hover:text-white">
            Início
          </Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </nav>
        <p className="eyebrow text-brand">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{description}</p>
      </div>
    </section>
  )
}
export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </div>
  )
}
export function ContactCta({
  title = "Vamos dar forma ao seu próximo projecto.",
  description = "Conte-nos o que pretende construir, melhorar ou transformar. O primeiro passo é uma conversa.",
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="bg-brand">
      <div className="site-container grid items-center gap-8 py-12 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="eyebrow text-ink">O próximo passo</p>
          <h2 className="mt-3 max-w-2xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-ink/80">{description}</p>
        </div>
        <Link href="/contactos" className="action-link action-dark">
          Pedir orçamento <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
export function ProcessSteps() {
  return (
    <section className="section-space site-container">
      <SectionHeading
        eyebrow="Como começamos"
        title="Um caminho claro, desde a primeira conversa."
      />
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ETAPAS.map((etapa, i) => (
          <li key={etapa.titulo} className="border-t border-border pt-6">
            <span className="text-3xl font-semibold text-brand-ink">0{i + 1}</span>
            <h3 className="mt-6">{etapa.titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{etapa.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
export function Clients() {
  return (
    <section className="border-t bg-surface">
      <div className="site-container section-space">
        <SectionHeading
          eyebrow="Relações que construímos"
          title="Clientes e parceiros"
          description="Entidades referenciadas no portfólio institucional da CABLAB."
        />
        <ul className="grid grid-cols-2 border-t border-l sm:grid-cols-4">
          {CLIENTES.map((cliente) => (
            <li
              key={cliente}
              className="flex min-h-24 items-center justify-center border-r border-b p-4 text-center text-sm font-semibold text-navy"
            >
              {cliente}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
export function Faq({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y border-y">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold">
            {item.question}
            <Plus
              aria-hidden="true"
              size={20}
              className="shrink-0 transition-transform group-open:rotate-45"
            />
          </summary>
          <p className="mt-4 max-w-3xl text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm">
          <Check aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-brand-ink" />
          {item}
        </li>
      ))}
    </ul>
  )
}
