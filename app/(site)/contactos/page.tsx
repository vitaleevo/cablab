import type { Metadata } from "next"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { CheckList, Faq, PageIntro, SectionHeading } from "@/components/content-sections"
import { CONTACTOS } from "@/lib/site"
export const metadata: Metadata = {
  title: "Contactos e orçamentos",
  description:
    "Fale com a CABLAB em Luanda. Prepare o pedido de orçamento para WhatsApp ou email e consulte os contactos da empresa.",
  alternates: { canonical: "/contactos" },
}
export default function Contactos() {
  return (
    <>
      <PageIntro
        eyebrow="Contactos"
        title="Tudo começa com uma conversa."
        description="Tem uma ideia, uma obra em vista ou uma dúvida? Conte-nos o que precisa e vamos encontrar o ponto de partida."
      />
      <section className="site-container section-space grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="Estamos por perto" title="Fale com a nossa equipa." />
          <div className="space-y-8">
            <div className="flex gap-4">
              <Phone aria-hidden="true" className="mt-1 shrink-0 text-brand-ink" size={22} />
              <div>
                <h3 className="text-base">Telefone</h3>
                <p className="mt-3">
                  <a className="hover:underline" href={CONTACTOS.tel1Href}>
                    {CONTACTOS.tel1}
                  </a>
                  <br />
                  <a className="hover:underline" href={CONTACTOS.tel2Href}>
                    {CONTACTOS.tel2}
                  </a>
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Para falar directamente sobre o seu pedido.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail aria-hidden="true" className="mt-1 shrink-0 text-brand-ink" size={22} />
              <div>
                <h3 className="text-base">Email</h3>
                <p className="mt-3">
                  <a className="hover:underline" href={`mailto:${CONTACTOS.email1}`}>
                    {CONTACTOS.email1}
                  </a>
                  <br />
                  <a className="hover:underline" href={`mailto:${CONTACTOS.email2}`}>
                    {CONTACTOS.email2}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin aria-hidden="true" className="mt-1 shrink-0 text-brand-ink" size={22} />
              <div>
                <h3 className="text-base">Visite-nos em Luanda</h3>
                <p className="mt-3 text-sm text-muted-foreground">{CONTACTOS.endereco}</p>
                <a
                  className="text-link mt-4"
                  href={CONTACTOS.mapa}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir localização aproximada
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <p className="mt-3 text-xs text-muted-foreground">
                  Confirme o ponto exacto e a disponibilidade da equipa antes da visita.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 rounded-md border bg-surface p-6">
            <h3 className="text-lg">Para uma conversa mais produtiva</h3>
            <div className="mt-6">
              <CheckList
                items={[
                  "Indique onde será a intervenção",
                  "Descreva o espaço e a dimensão aproximada",
                  "Partilhe o prazo que tem em mente",
                  "Mencione plantas ou fotografias disponíveis",
                ]}
              />
            </div>
          </div>
        </div>
        <div id="orcamento" className="rounded-md border bg-white p-6 shadow-sm sm:p-8">
          <p className="eyebrow">O seu próximo projecto</p>
          <h2 className="mt-3 text-2xl">Pedir orçamento</h2>
          <p className="mt-4 mb-8 text-sm text-muted-foreground">
            Preencha os dados e prepare a sua mensagem. A equipa avaliará o pedido para definir os
            próximos passos.
          </p>
          <ContactForm />
        </div>
      </section>
      <section className="bg-surface">
        <div className="site-container section-space">
          <SectionHeading eyebrow="Informação útil" title="O que acontece a seguir?" />
          <Faq
            items={[
              {
                question: "O formulário envia o pedido automaticamente?",
                answer:
                  "Não. O formulário prepara uma mensagem que pode rever. Ao escolher WhatsApp ou email, a aplicação correspondente abre e é aí que confirma o envio à CABLAB.",
              },
              {
                question: "Já estou a contratar um serviço ao enviar o pedido?",
                answer:
                  "Não. O contacto serve para partilhar a necessidade e iniciar a análise. O âmbito, valores e condições são definidos numa proposta própria.",
              },
              {
                question: "Posso enviar plantas ou fotografias?",
                answer:
                  "Pode partilhar esses elementos directamente com a equipa por email ou WhatsApp após o primeiro contacto. O formulário não recebe anexos.",
              },
            ]}
          />
          <div id="privacidade" className="mt-12 max-w-3xl border-t pt-8">
            <h2 className="text-xl">Privacidade e contacto</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Os campos deste formulário são tratados no seu navegador e não são guardados numa base
              de dados do site. Ao abrir WhatsApp ou email, o texto é transferido para o serviço
              escolhido, onde confirma o envio. Os serviços externos seguem as suas próprias
              condições de privacidade.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Os links de localização abrem o Google Maps apenas quando os seleciona. Para questões
              sobre os dados de um pedido enviado, contacte{" "}
              <a className="underline" href={`mailto:${CONTACTOS.email1}`}>
                {CONTACTOS.email1}
              </a>
              . Não envie dados sensíveis pelo formulário.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
