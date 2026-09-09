import type { Metadata } from "next"
import {
  CheckList,
  ContactCta,
  Faq,
  PageIntro,
  SectionHeading,
} from "@/components/content-sections"
import { ProjectGallery } from "@/components/project-gallery"
import { OBRAS } from "@/lib/site"
export const metadata: Metadata = {
  title: "Arquitectura e topografia",
  description:
    "Projectos de arquitectura, implantação de conjuntos habitacionais, tipologias residenciais, visualização 3D e topografia CABLAB.",
  alternates: { canonical: "/arquitectura" },
}
export default function Arquitectura() {
  return (
    <>
      <PageIntro
        eyebrow="Arquitectura"
        title="Antes de construir, imagine as possibilidades."
        description="Organizamos ideias, estudamos espaços e damos forma ao seu projecto através da arquitectura, da topografia e da visualização 3D."
        image="/img/obra-19.jpeg"
      />
      <section className="site-container section-space">
        <SectionHeading
          eyebrow="Da ideia ao desenho"
          title="Pensar o espaço como um todo."
          description="A forma, os acessos e a relação com o terreno fazem parte da mesma conversa. O âmbito de cada estudo é definido de acordo com as necessidades do projecto."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Arquitectura",
              desc: "Estudos para organizar os espaços e dar resposta à sua utilização.",
              items: [
                "Tipologias residenciais",
                "Volumetria e fachadas",
                "Implantação de conjuntos",
              ],
            },
            {
              title: "Visualização 3D",
              desc: "Imagens que tornam a proposta mais fácil de compreender antes da execução.",
              items: [
                "Perspectivas exteriores",
                "Leitura de volumes e materiais",
                "Estudos de conjuntos habitacionais",
              ],
            },
            {
              title: "Topografia",
              desc: "Informação sobre o terreno para apoiar as decisões de projecto.",
              items: [
                "Enquadramento da intervenção",
                "Elementos para implantação",
                "Âmbito técnico definido na proposta",
              ],
            },
          ].map((item, i) => (
            <article key={item.title} className="rounded-md border bg-surface p-8">
              <span className="text-3xl font-semibold text-brand-ink">0{i + 1}</span>
              <h3 className="mt-6">{item.title}</h3>
              <p className="mt-4 mb-6 text-sm text-muted-foreground">{item.desc}</p>
              <CheckList items={item.items} />
            </article>
          ))}
        </div>
      </section>
      <section className="bg-surface">
        <div className="site-container section-space">
          <SectionHeading
            eyebrow="Estudos e propostas"
            title="Uma visão do que pode vir a ser."
            description="Visualizações de arquitectura do portfólio CABLAB. Estas imagens representam propostas 3D e não fotografias de obras concluídas."
          />
          <ProjectGallery items={OBRAS.filter((item) => item.cat === "projecto")} />
        </div>
      </section>
      <section className="site-container section-space grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Preparar o seu projecto"
          title="Uma boa ideia começa com as perguntas certas."
        />
        <Faq
          items={[
            {
              question: "Já preciso de ter o terreno?",
              answer:
                "Pode iniciar a conversa ainda na fase de ideia. Para desenvolver um projecto ajustado ao local, a equipa precisará de informações sobre o terreno e as condições da intervenção.",
            },
            {
              question: "Que elementos devo levar para a primeira conversa?",
              answer:
                "Localização, dimensão aproximada, utilização pretendida, referências visuais e prioridades. Se existirem plantas ou levantamentos, mencione-os à equipa.",
            },
            {
              question: "O que está incluído no projecto?",
              answer:
                "Os estudos, desenhos e visualizações a entregar são acordados na proposta. Confirme também o número de revisões, os prazos e eventuais serviços complementares.",
            },
            {
              question: "Posso contratar a construção depois do projecto?",
              answer:
                "A CABLAB actua em arquitectura e construção civil. A equipa pode analisar a continuidade para a fase de obra e apresentar o respectivo âmbito e condições.",
            },
          ]}
        />
      </section>
      <ContactCta title="A sua ideia merece um bom ponto de partida." />
    </>
  )
}
