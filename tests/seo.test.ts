import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { LEGAL_LINKS, NAV } from "../lib/site"
import { resolveMobilePath } from "../lib/mobile"
import { CABLAB_JSON_LD } from "../lib/seo"

describe("seo parity", () => {
  it("every indexed main and legal route has a mobile counterpart", () => {
    for (const item of [...NAV, ...LEGAL_LINKS]) {
      const expected = item.href === "/" ? "/m" : `/m${item.href}`
      assert.equal(resolveMobilePath(item.href), expected, item.href)
    }
  })

  it("structured data describes the real company", () => {
    assert.equal(CABLAB_JSON_LD["@type"], "GeneralContractor")
    assert.equal(CABLAB_JSON_LD.foundingDate, "2020")
    assert.equal(CABLAB_JSON_LD.address.addressCountry, "AO")
    assert.ok((CABLAB_JSON_LD.areaServed as string[]).includes("Luanda"))
  })
})
