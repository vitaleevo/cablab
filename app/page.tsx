import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CLIENTES, CONTACTOS, SERVICOS } from "@/lib/site"

export default function Home() {
  return (
    <>
      {/* HERO estilo modelo UNC */}
      <header className="relative flex min-h-[560px] items-center overflow-hidden bg-black text-white">
        <Image
          src="/img/obra-11.jpeg"
          alt="Residência construída pela CABLAB em Luanda"
          fill
          priority
          className="object-cover opacity-85"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10" />
        <Link href="/obras" aria-label="Anterior" className="absolute top-1/2 left-2.5 z-10 -translate-y-1/2 p-3 text-brand">
          <ChevronLeft className="h-7 w-7" />
        </Link>
        <Link href="/obras" aria-label="Seguinte" className="absolute top-1/2 right-2.5 z-10 -translate-y-1/2 p-3 text-brand">
          <ChevronRight className="h-7 w-7" />
        </Link>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16">
          <h1 className="max-w-3xl text-4xl leading-tight font-extrabold tracking-wide md:text-6xl">
            SOMOS OS MELHORES
            <br />
            <span className="text-brand">ESPECIALISTAS EM CONSTRUÇÃO</span>
          </h1>
          <p className="mt-4 max-w-xl text-neutral-200">
            Empresa angolana desde 2020. Engenharia civil, arquitectura e fiscalização —
            do projecto à entrega, com qualidade e Alvará Classe 6.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-sm bg-brand px-7 font-extrabold tracking-widest text-ink hover:bg-brand-dark" render={<Link href="/obras">O NOSSO TRABALHO</Link>} />
            <Button size="lg" variant="outline" className="rounded-sm border-2 border-brand bg-transparent px-7 font-extrabold tracking-widest text-white hover:bg-brand hover:text-ink" render={<Link href="/contactos">CONTACTE-NOS</Link>} />
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 z-10 flex h-9 w-6 -translate-x-1/2 justify-center rounded-full border-2 border-white pt-1.5">
          <span className="h-2 w-1 rounded bg-white" />
        </div>
      </header>

      {/* SOBRE */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-center text-[11px] font-bold tracking-[0.3em] text-muted-foreground">
          SOBRE <span className="text-brand-dark">NÓS</span>
        </p>
        <h2 className="mt-1.5 text-center text-3xl font-light md:text-4xl">Bem-vindo à CABLAB</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Badge className="bg-brand font-extrabold tracking-widest text-ink hover:bg-brand">
                A NOSSA VISÃO
              </Badge>
              <CardTitle>CUMPRIR COM QUALIDADE</CardTitle>
              <CardDescription>
                Cumprir os contratos com qualidade, satisfazer os clientes e contribuir para o
                desenvolvimento humano e económico de Angola.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="pt-0">
            <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
              <Image src="/img/obra-04.jpeg" alt="Edifício institucional" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <CardHeader>
              <CardTitle>DESDE 2020</CardTitle>
              <CardDescription>Actuação nacional: Cabinda, Luanda, Cuanza Sul e Bié.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="pt-0">
            <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
              <Image src="/img/obra-01.jpeg" alt="Fachada residencial" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <CardHeader>
              <CardTitle>CLASSE 6</CardTitle>
              <CardDescription>Alvará de construção civil. NIF {CONTACTOS.nif}.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-muted/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-center text-[11px] font-bold tracking-[0.3em] text-muted-foreground">
            O QUE <span className="text-brand-dark">FAZEMOS</span>
          </p>
          <h2 className="mt-1.5 text-center text-3xl font-light md:text-4xl">Serviços</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {SERVICOS.slice(0, 3).map((s) => (
              <Card key={s.titulo} className="pt-0">
                <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                  <Image src={s.img} alt={s.titulo} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <CardHeader>
                  <CardTitle>{s.titulo.toUpperCase()}</CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/servicos" className="inline-flex items-center gap-1 text-sm font-bold text-brand-dark hover:underline">
                    Saber mais <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Button className="rounded-sm bg-brand px-7 font-extrabold tracking-widest text-ink hover:bg-brand-dark" render={<Link href="/servicos">TODOS OS SERVIÇOS</Link>} />
          </p>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-center text-[11px] font-bold tracking-[0.3em] text-neutral-400">
            CLIENTES <span className="text-brand">E PARCEIROS</span>
          </p>
          <h2 className="mt-1.5 text-center text-3xl font-light md:text-4xl">Quem confia em nós</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {CLIENTES.map((c) => (
              <span key={c} className="border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-bold">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
