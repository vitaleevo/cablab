import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { LEGAL_LINKS } from "../lib/site"
import { resolveMobilePath } from "../lib/mobile"

describe("legal pages", () => {
  it("exposes exactly three legal routes", () => {
    assert.deepEqual(
      LEGAL_LINKS.map((item) => item.href),
      ["/privacidade", "/termos", "/cookies"]
    )
  })

  it("maps every legal route to its mobile counterpart", () => {
    for (const item of LEGAL_LINKS) {
      assert.equal(resolveMobilePath(item.href), `/m${item.href}`)
    }
  })
})
