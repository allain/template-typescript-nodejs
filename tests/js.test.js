import add from "../src/add"

describe("it supports js tests", () => {
  it("works when using newer style js imports", () => {
    expect(add(1, 2)).toEqual(3)
  })
})
