import { CONTACTOS } from "@/lib/site"

export const CABLAB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "CABLAB SU Angola",
  description:
    "Engenharia civil, arquitectura e fiscalização em Angola desde 2020: construção, edifícios, infra-estruturas, instalações técnicas e projectos 3D.",
  url: "https://www.cablab.ao/",
  telephone: CONTACTOS.tel1,
  email: CONTACTOS.email1,
  foundingDate: "2020",
  taxID: CONTACTOS.nif,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua do Congo, Distrito Urbano da Camama",
    addressLocality: "Luanda",
    addressCountry: "AO",
  },
  areaServed: ["Luanda", "Cabinda", "Cuanza Sul", "Bié"],
}
