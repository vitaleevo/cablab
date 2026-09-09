import Link from "next/link"
import { CONTACTOS } from "@/lib/site"

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl first:mt-0">{children}</h2>
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export function PrivacidadeContent() {
  return (
    <div>
      <P>
        Última actualização: Setembro de 2026. Esta Política explica como a CABLAB trata os dados
        pessoais recolhidos através deste site, nos termos da Lei n.º 22/11, de 17 de Junho — Lei
        da Protecção de Dados Pessoais (LPDP) da República de Angola.
      </P>
      <H>1. Responsável pelo tratamento</H>
      <P>
        CABLAB SU Angola — NIF {CONTACTOS.nif}, com sede em {CONTACTOS.endereco}. Para questões
        sobre dados pessoais, contacte{" "}
        <a className="underline" href={`mailto:${CONTACTOS.email1}`}>
          {CONTACTOS.email1}
        </a>
        .
      </P>
      <H>2. Dados que recolhemos</H>
      <P>
        Através do formulário de pedido de orçamento, recolhemos apenas os dados que indica
        voluntariamente:
      </P>
      <List
        items={[
          "Nome e telefone (obrigatórios);",
          "Serviço de interesse e localização do projecto (opcionais);",
          "Descrição do pedido (obrigatória, mínimo de 20 caracteres).",
        ]}
      />
      <H>3. Como os dados são tratados</H>
      <P>
        Este site <strong>não guarda os seus dados em nenhuma base de dados</strong>. O formulário
        prepara a mensagem no seu próprio navegador e só a envia quando escolhe um canal —
        WhatsApp ou email — e confirma o envio na aplicação correspondente. Até esse momento,
        nada é transmitido à CABLAB.
      </P>
      <H>4. Finalidades</H>
      <P>Os dados destinam-se exclusivamente a:</P>
      <List
        items={[
          "Responder ao pedido de informação ou orçamento;",
          "Preparar e apresentar propostas de serviços;",
          "Dar seguimento à comunicação iniciada pelo titular.",
        ]}
      />
      <H>5. Partilha com terceiros</H>
      <P>
        Ao escolher um canal, a mensagem é transmitida ao serviço escolhido (WhatsApp/Meta ou o
        seu fornecedor de email), que aplica as suas próprias condições de privacidade. A CABLAB
        não vende nem cede dados pessoais para fins de marketing de terceiros.
      </P>
      <H>6. Conservação</H>
      <P>
        As mensagens recebidas são conservadas apenas pelo tempo necessário à finalidade do
        contacto e à relação pré-contratual ou contratual que dele resulte, sendo depois
        eliminadas ou anonimizadas, sem prejuízo das obrigações legais de conservação.
      </P>
      <H>7. Os seus direitos (artigos 25.º a 28.º da LPDP)</H>
      <P>Nos termos da LPDP, assiste-lhe o direito de:</P>
      <List
        items={[
          "Ser informado sobre o tratamento dos seus dados (direito de informação);",
          "Aceder aos dados que lhe digam respeito (direito de acesso);",
          "Exigir a rectificação ou actualização de dados inexactos ou incompletos;",
          "Solicitar a eliminação de dados cujo tratamento não cumpra a lei;",
          "Opor-se ao tratamento, nos casos previstos na lei.",
        ]}
      />
      <P>
        Para exercer estes direitos, escreva para{" "}
        <a className="underline" href={`mailto:${CONTACTOS.email1}`}>
          {CONTACTOS.email1}
        </a>{" "}
        indicando o pedido. Responderemos sem demoras ou custos excessivos.
      </P>
      <H>8. Reclamações</H>
      <P>
        Pode apresentar reclamação junto da Agência de Protecção de Dados (APD), autoridade
        nacional de controlo criada pela LPDP —{" "}
        <a className="underline" href="https://apd.ao" target="_blank" rel="noopener noreferrer">
          apd.ao
        </a>
        .
      </P>
      <H>9. Segurança</H>
      <P>
        O site é servido sobre HTTPS e aplica cabeçalhos de segurança (incluindo Política de
        Segurança de Conteúdo). A transmissão via WhatsApp ou email segue as condições de
        segurança desses serviços. Não envie dados sensíveis (por exemplo, documentos de
        identificação ou dados de saúde) pelo formulário.
      </P>
      <H>10. Menores</H>
      <P>
        Este site destina-se a maiores de 18 anos. Pedidos relativos a menores devem ser
        apresentados pelos respectivos representantes legais.
      </P>
      <H>11. Alterações</H>
      <P>
        Esta Política pode ser actualizada para reflectir mudanças legais ou do site. A versão em
        vigor é sempre a publicada em{" "}
        <Link className="underline" href="/privacidade">
          cablab.ao/privacidade
        </Link>
        .
      </P>
    </div>
  )
}

export function TermosContent() {
  return (
    <div>
      <P>
        Última actualização: Setembro de 2026. Ao utilizar o site da CABLAB (cablab.ao), aceita os
        presentes Termos de Utilização, regidos pela lei angolana.
      </P>
      <H>1. Objecto do site</H>
      <P>
        O site apresenta a CABLAB SU Angola (NIF {CONTACTOS.nif}), as suas áreas de actuação e o
        seu portfólio, e disponibiliza canais de contacto para pedidos de informação e orçamento.
      </P>
      <H>2. Conteúdos informativos</H>
      <P>
        Os textos, imagens e descrições têm carácter informativo e não constituem proposta
        contratual. Preços, prazos e condições são definidos caso a caso, em proposta própria,
        após análise do pedido. As visualizações 3D representam propostas de arquitectura, não
        fotografias de obras concluídas.
      </P>
      <H>3. Utilização aceitável</H>
      <P>Compromete-se a não utilizar o site para:</P>
      <List
        items={[
          "Enviar conteúdos falsos, ofensivos ou ilícitos através do formulário;",
          "Tentar comprometer a segurança ou o funcionamento do site;",
          "Recolher dados de terceiros ou reproduzir conteúdos sem autorização.",
        ]}
      />
      <H>4. Propriedade intelectual</H>
      <P>
        O logótipo, as fotografias do portfólio e os textos são propriedade da CABLAB ou usados
        com autorização, e estão protegidos pela legislação aplicável. É permitida a partilha de
        ligações para as páginas; qualquer outra reprodução carece de autorização prévia.
      </P>
      <H>5. Ligações externas</H>
      <P>
        O site liga a serviços externos (WhatsApp, email, Google Maps). A CABLAB não controla nem
        responde pelos conteúdos, práticas de privacidade ou disponibilidade desses serviços.
      </P>
      <H>6. Limitação de responsabilidade</H>
      <P>
        O site é disponibilizado &quot;como está&quot;. A CABLAB adopta medidas razoáveis de segurança e
        exactidão, mas não garante disponibilidade ininterrupta nem ausência de erros, nem responde
        por danos resultantes do uso de serviços externos activados pelo utilizador.
      </P>
      <H>7. Lei aplicável e contactos</H>
      <P>
        Aplicam-se as leis da República de Angola. Para questões sobre estes Termos, contacte{" "}
        <a className="underline" href={`mailto:${CONTACTOS.email1}`}>
          {CONTACTOS.email1}
        </a>{" "}
        ou {CONTACTOS.tel1}.
      </P>
    </div>
  )
}

export function CookiesContent() {
  return (
    <div>
      <P>
        Última actualização: Setembro de 2026. Esta Política explica os cookies e tecnologias
        semelhantes usados em cablab.ao.
      </P>
      <H>1. O que usamos</H>
      <P>
        Este site <strong>não utiliza cookies de análise, publicidade ou rastreio</strong>. Existe
        apenas um cookie funcional:
      </P>
      <List
        items={[
          "«site» — guarda a sua preferência entre a versão mobile e o site completo, quando a escolhe (por exemplo, «Ver site completo»). Duração: 90 dias. Sem este cookie, telemóveis voltam a ser encaminhados para a versão mobile.",
        ]}
      />
      <H>2. Cookies de terceiros</H>
      <P>
        Não incorporamos reprodutores, mapas embebidos nem botões sociais que definam cookies. As
        ligações para WhatsApp, email e Google Maps só contactam esses serviços quando as
        selecciona.
      </P>
      <H>3. Gerir preferências</H>
      <P>
        Pode apagar o cookie «site» nas definições do seu navegador a qualquer momento. Para
        voltar à versão mobile depois de escolher o site completo, visite{" "}
        <Link className="underline" href="/m?site=mobile">
          cablab.ao/m
        </Link>
        .
      </P>
      <H>4. Mais informação</H>
      <P>
        O tratamento de dados pessoais rege-se pela{" "}
        <Link className="underline" href="/privacidade">
          Política de Privacidade
        </Link>
        , elaborada nos termos da Lei n.º 22/11, de 17 de Junho (LPDP).
      </P>
    </div>
  )
}
