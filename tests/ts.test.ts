import add from "../src/add"
import sub from "../src/sub"

describe("typescript - tests", () => {
  it("works when testing typescript import", () => {
    expect(add(10, 20)).toEqual(30)
  })

  it("works when testing js imports", () => {
    expect(sub(5, 3)).toEqual(2)
  })
})
