export const CONTACTOS = {
  email1: "info@cablab.ao",
  email2: "contactos@cablab.ao",
  tel1: "+244 923 954 236",
  tel1Href: "tel:+244923954236",
  tel2: "+244 926 866 113",
  tel2Href: "tel:+244926866113",
  endereco: "Distrito Urbano da Camama, Rua do Congo, Luanda, Angola",
  enderecoCurto: "Camama, Rua do Congo — Luanda",
  nif: "5000550868",
  whatsappNumero: "244923954236",
  whatsapp: "https://wa.me/244923954236?text=Ol%C3%A1%20CABLAB%2C%20quero%20um%20or%C3%A7amento",
  mapa: "https://www.google.com/maps/search/?api=1&query=Rua+do+Congo+Camama+Luanda+Angola",
}

export const NAV = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre nós" },
  { href: "/servicos", label: "Serviços" },
  { href: "/obras", label: "Obras" },
  { href: "/arquitectura", label: "Arquitectura" },
  { href: "/contactos", label: "Contactos" },
]

export const SERVICOS = [
  {
    id: "construcao",
    titulo: "Construção civil e obras públicas",
    desc: "Da preparação da obra à execução da empreitada, com acompanhamento das diferentes fases de construção.",
    img: "/img/obra-11.jpeg",
    alt: "Estruturas de moradias em construção",
    itens: ["Execução de empreitadas", "Construção e reabilitação", "Fiscalização de obras"],
  },
  {
    id: "edificios",
    titulo: "Edifícios e equipamentos",
    desc: "Espaços pensados para habitar, trabalhar e servir a comunidade, de acordo com as necessidades de cada projecto.",
    img: "/img/obra-13.jpeg",
    alt: "Edifício de vários pisos em construção",
    itens: ["Residências e escritórios", "Escolas e hospitais", "Centros comerciais"],
  },
  {
    id: "exteriores",
    titulo: "Infra-estruturas e exteriores",
    desc: "Intervenções que completam os edifícios e tornam os espaços exteriores mais úteis e agradáveis.",
    img: "/img/obra-04.jpeg",
    alt: "Piscina com pavimento e zona exterior",
    itens: ["Piscinas e jardins", "Vedações e parques", "Quadras polidesportivas e salões"],
  },
  {
    id: "instalacoes",
    titulo: "Instalações técnicas",
    desc: "Soluções técnicas integradas no edifício, com o âmbito definido em função da sua utilização.",
    img: null,
    alt: "",
    itens: ["Redes eléctricas e hidráulicas", "TV e CCTV", "AVAC industrial e predial"],
  },
  {
    id: "arquitectura",
    titulo: "Arquitectura e topografia",
    desc: "Do estudo do terreno à organização dos espaços, com projectos e visualizações que ajudam a tomar decisões.",
    img: "/img/obra-19.jpeg",
    alt: "Visualização 3D de uma fachada residencial",
    itens: ["Projectos de arquitectura", "Volumetria e visualização 3D", "Serviços de topografia"],
  },
  {
    id: "saude",
    titulo: "Fornecimentos para a saúde",
    desc: "Área de fornecimento dirigida às necessidades de instituições e profissionais do sector da saúde.",
    img: null,
    alt: "",
    itens: ["Reagentes laboratoriais", "Fármacos", "Equipamentos hospitalares"],
  },
  {
    id: "imobiliaria",
    titulo: "Imobiliária",
    desc: "Actividade imobiliária integrada nas áreas de actuação da CABLAB. Fale connosco sobre o seu objectivo.",
    img: "/img/obra-01.jpeg",
    alt: "Conjunto de moradias com entradas individuais",
    itens: [
      "Pedidos de informação sobre imóveis",
      "Análise inicial da necessidade",
      "Articulação com construção e projecto",
    ],
  },
]

export const CATEGORIAS = {
  edificios: "Edifícios",
  habitacao: "Habitação",
  exteriores: "Exteriores",
  projecto: "Projectos 3D",
  obra: "Em construção",
} as const
export type Categoria = keyof typeof CATEGORIAS
export type Obra = { titulo: string; local: string; cat: Categoria; img: string }
const registos: [number, string, Categoria][] = [
  [1, "Conjunto de moradias", "habitacao"],
  [3, "Piscina e deck exterior", "exteriores"],
  [4, "Piscina e zona de lazer", "exteriores"],
  [5, "Pormenor de piscina", "exteriores"],
  [6, "Arruamento residencial", "habitacao"],
  [7, "Fachadas e varandas", "habitacao"],
  [8, "Moradia de dois pisos", "habitacao"],
  [9, "Frente de conjunto residencial", "habitacao"],
  [10, "Moradias e acessos", "habitacao"],
  [11, "Estruturas em execução", "obra"],
  [12, "Arruamento em construção", "obra"],
  [13, "Edifício de vários pisos", "obra"],
  [14, "Construção de moradias térreas", "obra"],
  [15, "Implantação de conjunto habitacional", "projecto"],
  [16, "Perspectiva do conjunto habitacional", "projecto"],
  [17, "Tipologia residencial em 3D", "projecto"],
  [18, "Entrada do conjunto habitacional", "projecto"],
  [19, "Estudo de fachada contemporânea", "projecto"],
  [20, "Proposta de moradia em 3D", "projecto"],
  [21, "Volumetria residencial", "projecto"],
  [22, "Reabilitação de edifício", "obra"],
  [23, "Edifício e pátio ajardinado", "edificios"],
  [24, "Pátio interior", "edificios"],
  [25, "Estrutura de cobertura", "obra"],
  [26, "Trabalhos de implantação", "obra"],
  [27, "Intervenção em pátio interior", "obra"],
  [28, "Acabamentos de edifício", "obra"],
  [29, "Trabalhos de reabilitação", "obra"],
  [30, "Edifício com acesso exterior", "edificios"],
  [31, "Moradia em fase de acabamento", "obra"],
  [32, "Fachada de moradia", "habitacao"],
]
// Describe visible subjects: the source does not reliably map every photo to a location.
export const OBRAS: Obra[] = registos.map(([numero, titulo, cat]) => ({
  titulo,
  cat,
  img: `/img/obra-${String(numero).padStart(2, "0")}.jpeg`,
  local:
    cat === "projecto" ? "Estudo e visualização arquitectónica" : "Portfólio institucional CABLAB",
}))
export const REFERENCIAS = [
  { titulo: "Administração Municipal da Quilenda", local: "Cuanza Sul" },
  { titulo: "Escritório IDA–MOSAP", local: "Kuito, Bié" },
  { titulo: "Residências no Benfica e Nova Vida", local: "Luanda" },
  { titulo: "Piscina no Kifica", local: "Luanda" },
  { titulo: "Centro Preventório Infantil", local: "Rocha Pinto, Luanda" },
  { titulo: "Moageiras e escritório", local: "Cuanza Sul e Cabinda" },
]
export const CLIENTES = [
  "Sonangol",
  "SonAir",
  "Clínica Girassol",
  "Medigroup",
  "IDA · SAMAP · FIDA",
  "Dommac One",
  "GHF Service",
  "Governo de Angola",
]
export const ETAPAS = [
  {
    titulo: "Partilhe a sua ideia",
    desc: "Indique o tipo de intervenção, a localização e o que pretende alcançar.",
  },
  {
    titulo: "Definimos o âmbito",
    desc: "A equipa analisa as necessidades e identifica a informação técnica necessária.",
  },
  {
    titulo: "Receba uma proposta",
    desc: "Os trabalhos, condições e prazos são definidos na proposta para o seu projecto.",
  },
  {
    titulo: "Avançamos em conjunto",
    desc: "Após acordo, o projecto segue as etapas e o acompanhamento estabelecidos.",
  },
]
