import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CONTACTOS } from "@/lib/site"

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Sobre a CABLAB: empresa angolana de engenharia civil e arquitectura desde 2020, Alvará Classe 6.",
}

export default function Sobre() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-center text-[11px] font-bold tracking-[0.3em] text-muted-foreground">
        A <span className="text-brand-dark">EMPRESA</span>
      </p>
      <h1 className="mt-1.5 text-center text-3xl font-light md:text-4xl">Sobre a CABLAB</h1>
      <div className="mx-auto mt-6 max-w-3xl space-y-4 text-neutral-700">
        <p>
          Empresa angolana constituída em <strong>2020</strong>, com actuação no mercado nacional.
        </p>
        <p>
          <strong>O que fazemos:</strong> engenharia civil, arquitectura e fiscalização de
          empreitadas. A actividade abrange também o sector imobiliário e o fornecimento de
          produtos para a saúde.
        </p>
        <p>
          <strong>A nossa visão:</strong> cumprir os contratos com qualidade, satisfazer os
          clientes e contribuir para o desenvolvimento humano e económico de Angola.
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <Card>
          <CardHeader>
            <Badge className="bg-brand font-extrabold tracking-widest text-ink hover:bg-brand">2020</Badge>
            <CardTitle>ANO DE CONSTITUIÇÃO</CardTitle>
            <CardDescription>Empresa angolana, sede em Luanda.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge className="bg-brand font-extrabold tracking-widest text-ink hover:bg-brand">CLASSE 6</Badge>
            <CardTitle>ALVARÁ DE CONSTRUÇÃO</CardTitle>
            <CardDescription>Construção civil e obras públicas.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge className="bg-brand font-extrabold tracking-widest text-ink hover:bg-brand">
              NIF {CONTACTOS.nif}
            </Badge>
            <CardTitle>LUANDA</CardTitle>
            <CardDescription>{CONTACTOS.endereco}.</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <p className="mt-8 flex flex-wrap justify-center gap-3">
        <Button className="rounded-sm bg-brand px-7 font-extrabold tracking-widest text-ink hover:bg-brand-dark" render={<Link href="/obras">VER OBRAS</Link>} />
        <Button variant="outline" className="rounded-sm px-7 font-extrabold tracking-widest" render={<Link href="/contactos">CONTACTE-NOS</Link>} />
      </p>
    </section>
  )
}
