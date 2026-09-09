import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, HeartPulse, Wrench } from "lucide-react"
import {
  CheckList,
  ContactCta,
  Faq,
  PageIntro,
  ProcessSteps,
  SectionHeading,
} from "@/components/content-sections"
import { SERVICOS } from "@/lib/site"
export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça as sete áreas da CABLAB: construção, edifícios, exteriores, instalações técnicas, arquitectura, saúde e imobiliária.",
  alternates: { canonical: "/servicos" },
}
export default function Servicos() {
  return (
    <>
      <PageIntro
        eyebrow="Serviços"
        title="A solução certa para cada etapa."
        description="Da primeira ideia à intervenção no terreno, conheça as áreas de actuação da CABLAB e encontre o apoio de que precisa."
        image="/img/obra-11.jpeg"
      />
      <section className="site-container section-space">
        <SectionHeading
          eyebrow="7 áreas de actuação"
          title="Competências que se encontram no seu projecto."
          description="Selecione uma área para conhecer o âmbito e preparar o seu pedido de informação."
        />
        <nav aria-label="Áreas de serviço" className="mb-12 flex flex-wrap gap-3">
          {SERVICOS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded border px-4 py-3 text-sm hover:border-brand hover:bg-surface"
            >
              {s.titulo}
            </a>
          ))}
        </nav>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.map((s, i) => (
            <article id={s.id} key={s.id} className="photo-card flex flex-col">
              <div className="relative flex aspect-[16/10] items-center justify-center bg-navy">
                {s.img ? (
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover"
                  />
                ) : s.id === "saude" ? (
                  <HeartPulse size={64} className="text-brand" aria-hidden="true" />
                ) : (
                  <Wrench size={64} className="text-brand" aria-hidden="true" />
                )}
                <span className="absolute bottom-0 left-0 bg-brand px-4 py-2 text-xs font-semibold">
                  0{i + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl">{s.titulo}</h2>
                <p className="mt-4 mb-6 text-sm text-muted-foreground">{s.desc}</p>
                <CheckList items={s.itens} />
                <Link
                  href={`/contactos?servico=${s.id}#orcamento`}
                  className="text-link mt-auto pt-8"
                >
                  Falar sobre este serviço
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="bg-surface">
        <ProcessSteps />
      </div>
      <section className="site-container section-space">
        <SectionHeading eyebrow="Perguntas frequentes" title="Antes de começar." />
        <Faq
          items={[
            {
              question: "Como posso pedir um orçamento?",
              answer:
                "Preencha o formulário de contactos com o serviço, a localização e uma descrição do que pretende. Pode preparar a mensagem para WhatsApp ou email e confirmar o envio no canal escolhido.",
            },
            {
              question: "Que informação ajuda a preparar a proposta?",
              answer:
                "Indique a finalidade do espaço, a dimensão aproximada, a localização e o prazo desejado. Se já tiver plantas ou fotografias, informe a equipa e partilhe-as directamente após o primeiro contacto.",
            },
            {
              question: "Posso pedir apenas um projecto de arquitectura?",
              answer:
                "Sim. Arquitectura e topografia são áreas próprias de actuação. O âmbito e os elementos a entregar são definidos na proposta.",
            },
            {
              question: "O preço e o prazo estão fixados no site?",
              answer:
                "Não. Cada intervenção tem necessidades próprias. Os valores, condições e prazos dependem da avaliação e da proposta acordada com a CABLAB.",
            },
          ]}
        />
      </section>
      <ContactCta />
    </>
  )
}
