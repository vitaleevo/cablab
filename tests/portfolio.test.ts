import assert from "node:assert/strict"
import test from "node:test"
import { existsSync } from "node:fs"
import { join } from "node:path"
import { CATEGORIAS, OBRAS, SERVICOS } from "../lib/site"
import { filterPortfolio, validCategory } from "../lib/portfolio"

test("search ignores accents and case, matches all words and combines with category", () => {
  const matches = filterPortfolio(OBRAS, "  CONSTRUCAO estruturas ", "todos")
  assert.equal(matches.length, 1)
  assert.equal(matches[0].img, "/img/obra-11.jpeg")
  assert.equal(filterPortfolio(OBRAS, "piscina", "exteriores").length, 3)
  assert.equal(filterPortfolio(OBRAS, "piscina", "habitacao").length, 0)
  assert.equal(filterPortfolio(OBRAS, "termo inexistente xyz", "todos").length, 0)
  assert.equal(filterPortfolio(OBRAS, "", "todos").length, 31)
})
test("unknown and prototype-inherited categories cannot become active filters", () => {
  for (const value of [null, "unknown", "__proto__", "constructor"])
    assert.equal(validCategory(value), "todos")
  for (const value of Object.keys(CATEGORIAS)) assert.equal(validCategory(value), value)
})
test("every portfolio and service image exists and the logo is excluded from works", () => {
  assert.equal(new Set(OBRAS.map((item) => item.img)).size, 31)
  for (const item of [...OBRAS, ...SERVICOS]) {
    if (item.img) assert.ok(existsSync(join(process.cwd(), "public", item.img)), item.img)
  }
  assert.ok(OBRAS.every((item) => !item.img.includes("obra-02")))
  assert.equal(filterPortfolio(OBRAS, "", "projecto").length, 7)
})
