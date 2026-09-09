import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CheckList } from "@/components/content-sections"
import { CONTACTOS } from "@/lib/site"

export const metadata = { title: "Sobre nós", alternates: { canonical: "/sobre" } }

export default function MobileSobre() {
  return (
    <section className="px-4 py-8">
      <p className="eyebrow">Sobre nós</p>
      <h1 className="mt-2 text-3xl">Construir com propósito.</h1>
      <div className="mt-4 space-y-3 text-sm text-muted-foreground">
        <p>
          A CABLAB SU Angola foi constituída em 2020, com sede na Camama, em Luanda. Actua em
          engenharia civil, arquitectura e fiscalização, com trabalhos em Luanda, Cabinda,
          Cuanza Sul e Bié.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        {[
          ["2020", "Constituição"],
          ["Classe 6", "Alvará"],
          ["7 áreas", "Actuação"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-md border bg-white p-3 shadow-sm">
            <p className="font-bold text-navy">{value}</p>
            <p className="text-[11px] text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-md border bg-surface p-5">
        <CheckList
          items={[
            "Qualidade na execução dos contratos",
            "Proximidade com o cliente",
            `Sede: ${CONTACTOS.endereco}`,
          ]}
        />
      </div>
      <Link href="/m/contactos" className="action-link mt-6 w-full">
        Falar connosco
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </section>
  )
}
