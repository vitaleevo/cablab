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
  whatsapp:
    "https://wa.me/244923954236?text=Ol%C3%A1%20CABLAB%2C%20quero%20um%20or%C3%A7amento",
}

export const NAV = [
  { href: "/", label: "INÍCIO" },
  { href: "/sobre", label: "SOBRE" },
  { href: "/servicos", label: "SERVIÇOS" },
  { href: "/obras", label: "OBRAS" },
  { href: "/arquitectura", label: "ARQUITECTURA" },
  { href: "/contactos", label: "CONTACTOS" },
]

export const SERVICOS = [
  {
    titulo: "Construção civil e obras públicas",
    desc: "Execução de empreitadas para diferentes utilizações, com fiscalização.",
    img: "/img/obra-04.jpeg",
  },
  {
    titulo: "Edifícios e equipamentos",
    desc: "Residências, escritórios, escolas, hospitais e centros comerciais.",
    img: "/img/obra-06.jpeg",
  },
  {
    titulo: "Infra-estruturas e exteriores",
    desc: "Vedações, quadras polidesportivas, parques, jardins, piscinas e salões.",
    img: "/img/obra-07.jpeg",
  },
  {
    titulo: "Instalações técnicas",
    desc: "Redes eléctricas e hidráulicas, TV e CCTV, AVAC industrial e predial.",
    img: "/img/obra-05.jpeg",
  },
  {
    titulo: "Arquitectura e topografia",
    desc: "Elaboração de projectos de arquitectura e serviços de topografia.",
    img: "/img/obra-10.jpeg",
  },
  {
    titulo: "Saúde",
    desc: "Venda de reagentes laboratoriais, fármacos e equipamentos hospitalares.",
    img: "/img/obra-03.jpeg",
  },
  {
    titulo: "Imobiliária",
    desc: "Actividade imobiliária integrada nas áreas de actuação da CABLAB.",
    img: "/img/obra-01.jpeg",
  },
]

export type Categoria = "edificios" | "habitacao" | "exteriores" | "projecto"

export const OBRAS: { titulo: string; local: string; cat: Categoria; img: string }[] = [
  { titulo: "Administração Municipal da Quilenda", local: "Cuanza Sul", cat: "edificios", img: "/img/obra-04.jpeg" },
  { titulo: "Escritório IDA–MOSAP", local: "Kuito, Bié", cat: "edificios", img: "/img/obra-05.jpeg" },
  { titulo: "Residências", local: "Benfica, Luanda", cat: "habitacao", img: "/img/obra-06.jpeg" },
  { titulo: "Residências", local: "Nova Vida, Luanda", cat: "habitacao", img: "/img/obra-08.jpeg" },
  { titulo: "Piscina", local: "Kifica, Luanda", cat: "exteriores", img: "/img/obra-07.jpeg" },
  { titulo: "Conjunto habitacional", local: "Fachadas e arruamentos", cat: "habitacao", img: "/img/obra-11.jpeg" },
  { titulo: "Fachadas residenciais", local: "Varandas e acessos", cat: "habitacao", img: "/img/obra-12.jpeg" },
  { titulo: "Registo de construção", local: "Obra em curso", cat: "edificios", img: "/img/obra-13.jpeg" },
  { titulo: "Implantação 3D", local: "Conjunto habitacional", cat: "projecto", img: "/img/obra-14.jpeg" },
  { titulo: "Tipologia residencial 3D", local: "Visualização", cat: "projecto", img: "/img/obra-15.jpeg" },
  { titulo: "Centro Preventório Infantil", local: "Rocha Pinto, Luanda", cat: "edificios", img: "/img/obra-16.jpeg" },
  { titulo: "Espaços exteriores", local: "Lazer", cat: "exteriores", img: "/img/obra-09.jpeg" },
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
