import { expect, it } from "vitest";

// Here are the same than the previous exercise, you have to use ? to declare a 
// parameter optional, but here we have a caviat, you can't pass the first parameter optional, 
// only the second parameter and so on is alowed to be optional, try by yourself make the first 
// param optional and see the error message.
export const getName = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

it("Should work with just the first name", () => {
  const name = getName("Matt");

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName("Matt", "Pocock");

  expect(name).toEqual("Matt Pocock");
});
