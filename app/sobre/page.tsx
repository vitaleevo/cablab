import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Compass, Handshake, HardHat } from "lucide-react"
import { Clients, ContactCta, PageIntro, SectionHeading } from "@/components/content-sections"
import { CONTACTOS } from "@/lib/site"
export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "Conheça a CABLAB SU Angola: empresa de engenharia civil, arquitectura e fiscalização constituída em 2020, com sede em Luanda.",
  alternates: { canonical: "/sobre" },
}
export default function Sobre() {
  return (
    <>
      <PageIntro
        eyebrow="Sobre nós"
        title="Construir com propósito. Crescer com Angola."
        description="Uma empresa angolana que reúne engenharia, arquitectura e uma visão integrada dos espaços onde vivemos e trabalhamos."
        image="/img/obra-06.jpeg"
      />
      <section className="site-container section-space grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="A nossa história"
            title="Uma base sólida para novas possibilidades."
          />
          <div className="space-y-4 text-muted-foreground">
            <p>
              A CABLAB SU Angola foi constituída em 2020 e tem sede no Distrito Urbano da Camama, em
              Luanda. A sua actividade principal abrange engenharia civil, arquitectura e
              fiscalização de empreitadas.
            </p>
            <p>
              O portfólio institucional apresenta trabalhos em Luanda, Cabinda, Cuanza Sul e Bié,
              incluindo residências, edifícios, equipamentos e espaços exteriores.
            </p>
            <p>
              A empresa integra ainda as áreas imobiliária e de fornecimentos para a saúde,
              complementando as suas frentes de actuação.
            </p>
          </div>
          <Link href="/obras" className="text-link mt-8">
            Conhecer o nosso portfólio
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image
            src="/img/obra-26.jpeg"
            alt="Equipa em trabalhos de implantação no terreno"
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 100vw, 50vw"
          />
        </div>
      </section>
      <section className="bg-surface">
        <div className="site-container section-space">
          <SectionHeading eyebrow="O nosso compromisso" title="O que orienta cada projecto." />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: HardHat,
                title: "Qualidade na execução",
                desc: "Cumprir os contratos com qualidade é o princípio que orienta a nossa actividade.",
              },
              {
                icon: Handshake,
                title: "Proximidade com o cliente",
                desc: "Compreender as necessidades de quem nos procura e trabalhar para a sua satisfação.",
              },
              {
                icon: Compass,
                title: "Contributo para Angola",
                desc: "Participar no desenvolvimento humano e económico do país através das nossas áreas de actuação.",
              },
            ].map((v) => (
              <article key={v.title} className="rounded-md border bg-white p-8">
                <v.icon className="text-brand-ink" size={32} aria-hidden="true" />
                <h3 className="mt-6">{v.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="site-container section-space grid gap-12 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Identificação institucional"
          title="Conheça a empresa com quem vai trabalhar."
          description="Dados constantes da apresentação institucional da CABLAB. Para documentação de uma proposta, contacte a equipa."
        />
        <dl className="divide-y border-y">
          {[
            ["Denominação", "CABLAB SU Angola"],
            ["Constituição", "2020"],
            ["Alvará de construção", "Classe 6"],
            ["NIF", CONTACTOS.nif],
            ["Sede", CONTACTOS.endereco],
          ].map(([label, value]) => (
            <div key={label} className="grid gap-2 py-4 sm:grid-cols-[160px_1fr]">
              <dt className="text-sm text-muted-foreground">{label}</dt>
              <dd className="text-sm font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <Clients />
      <ContactCta />
    </>
  )
}
