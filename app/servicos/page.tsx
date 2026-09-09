import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SERVICOS } from "@/lib/site"

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Serviços CABLAB: construção civil, edifícios, infra-estruturas, instalações técnicas, arquitectura, saúde e imobiliária.",
}

export default function Servicos() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-center text-[11px] font-bold tracking-[0.3em] text-muted-foreground">
        O QUE <span className="text-brand-dark">FAZEMOS</span>
      </p>
      <h1 className="mt-1.5 text-center text-3xl font-light md:text-4xl">Serviços</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {SERVICOS.map((s) => (
          <Card key={s.titulo} className="pt-0">
            <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
              <Image src={s.img} alt={s.titulo} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <CardHeader>
              <CardTitle>{s.titulo.toUpperCase()}</CardTitle>
              <CardDescription>{s.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-center">
        <Button size="lg" className="rounded-sm bg-brand px-7 font-extrabold tracking-widest text-ink hover:bg-brand-dark" render={<Link href="/contactos">PEDIR ORÇAMENTO</Link>} />
      </p>
    </section>
  )
}
