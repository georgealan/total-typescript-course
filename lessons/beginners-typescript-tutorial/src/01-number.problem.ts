import { expect, it } from "vitest";

// Here only need to explicitly infer type to those function parameters
// If don't, TS will throw erros complaining about the lack of type information, be aware of that.
export const addTwoNumbers = (a: number, b: number) => {
  return a + b;
};

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
