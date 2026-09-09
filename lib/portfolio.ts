import { CATEGORIAS, type Categoria, type Obra } from "./site"
export function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt")
    .trim()
}
export function validCategory(value: string | null): Categoria | "todos" {
  return value && Object.hasOwn(CATEGORIAS, value) ? (value as Categoria) : "todos"
}
export function filterPortfolio(items: Obra[], query: string, category: Categoria | "todos") {
  const terms = normalizeSearch(query).split(/\s+/).filter(Boolean)
  return items.filter((item) => {
    const content = normalizeSearch(`${item.titulo} ${item.local} ${CATEGORIAS[item.cat]}`)
    return (
      (category === "todos" || category === item.cat) &&
      terms.every((term) => content.includes(term))
    )
  })
}
