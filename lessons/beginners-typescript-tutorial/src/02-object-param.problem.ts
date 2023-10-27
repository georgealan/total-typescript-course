import { expect, it } from "vitest"

// Here we can use type or interface too.
type ParamsArg = {
  first: number
  second: number
}

export const addTwoNumbers = (params: ParamsArg) => {
  return params.first + params.second
}

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6)

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30)
});
