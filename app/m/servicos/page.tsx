import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { CheckList } from "@/components/content-sections"
import { SERVICOS } from "@/lib/site"

export const metadata = { title: "Serviços", alternates: { canonical: "/servicos" } }

export default function MobileServicos() {
  return (
    <section className="px-4 py-8">
      <p className="eyebrow">Serviços</p>
      <h1 className="mt-2 text-3xl">A solução certa para cada etapa.</h1>
      <div className="mt-6 space-y-4">
        {SERVICOS.map((s, i) => (
          <article id={s.id} key={s.id} className="scroll-mt-24 rounded-md border bg-white p-5 shadow-sm">
            <span className="bg-brand px-2.5 py-1 text-xs font-bold">0{i + 1}</span>
            <h2 className="mt-3 text-lg">{s.titulo}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <div className="mt-3">
              <CheckList items={s.itens} />
            </div>
            <Link href={`/m/contactos?servico=${s.id}`} className="text-link mt-4">
              Falar sobre este serviço
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
