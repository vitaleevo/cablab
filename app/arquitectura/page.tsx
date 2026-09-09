import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Arquitectura",
  description:
    "Arquitectura CABLAB: implantação de conjuntos habitacionais, tipologias residenciais, volumetria 3D e topografia.",
}

const PROJECTOS = [
  { img: "/img/obra-14.jpeg", titulo: "IMPLANTAÇÃO 3D", desc: "Conjunto habitacional — visualização." },
  { img: "/img/obra-15.jpeg", titulo: "TIPOLOGIA RESIDENCIAL", desc: "Proposta residencial em imagem 3D." },
  { img: "/img/obra-10.jpeg", titulo: "VOLUMETRIA E FACHADAS", desc: "Estudos de volumetria e fachadas." },
  { img: "/img/obra-17.jpeg", titulo: "PROJECTO RESIDENCIAL", desc: "Proposta em imagem 3D." },
]

export default function Arquitectura() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-center text-[11px] font-bold tracking-[0.3em] text-muted-foreground">
        PROJECTOS <span className="text-brand-dark">3D</span>
      </p>
      <h1 className="mt-1.5 text-center text-3xl font-light md:text-4xl">Arquitectura e topografia</h1>
      <p className="mx-auto mt-6 max-w-3xl text-center text-neutral-700">
        Elaboração de projectos de arquitectura e serviços de topografia: implantação de
        conjuntos habitacionais, tipologias residenciais, volumetria e fachadas em 3D.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {PROJECTOS.map((p) => (
          <Card key={p.img} className="pt-0">
            <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
              <Image src={p.img} alt={p.titulo} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <CardHeader>
              <CardTitle>{p.titulo}</CardTitle>
              <CardDescription>{p.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-center">
        <Button size="lg" className="rounded-sm bg-brand px-7 font-extrabold tracking-widest text-ink hover:bg-brand-dark" render={<Link href="/contactos">FALAR SOBRE O MEU PROJECTO</Link>} />
      </p>
    </section>
  )
}
