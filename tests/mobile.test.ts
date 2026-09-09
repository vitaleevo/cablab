import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { isMobileUserAgent, resolveMobilePath } from "../lib/mobile"

describe("mobile detection", () => {
  it("detects common mobile user agents", () => {
    assert.equal(
      isMobileUserAgent(
        "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/120 Mobile Safari/537.36"
      ),
      true
    )
    assert.equal(
      isMobileUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) Mobile/15E148"),
      true
    )
  })

  it("ignores desktop user agents and missing headers", () => {
    assert.equal(
      isMobileUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120 Safari/537.36"),
      false
    )
    assert.equal(isMobileUserAgent(null), false)
  })

  it("maps main routes to their mobile counterparts", () => {
    assert.equal(resolveMobilePath("/"), "/m")
    assert.equal(resolveMobilePath("/obras"), "/m/obras")
    assert.equal(resolveMobilePath("/contactos"), "/m/contactos")
  })

  it("returns null for unknown routes", () => {
    assert.equal(resolveMobilePath("/m/obras"), null)
    assert.equal(resolveMobilePath("/inexistente"), null)
  })
})
