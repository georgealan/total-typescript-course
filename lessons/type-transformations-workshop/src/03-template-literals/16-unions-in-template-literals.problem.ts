import { Equal, Expect } from "../helpers/type-utils";

type BreadType = "rye" | "brown" | "white";

type Filling = "cheese" | "ham" | "salami";

// Other way to capture all occurrences in one catch with literals.
// This is similar to regex expressions. But it have a limit taht you can reach.
type Sandwich = `${BreadType} sandwich with ${Filling}`;

type tests = [
  Expect<
    Equal<
      Sandwich,
      | "rye sandwich with cheese"
      | "rye sandwich with ham"
      | "rye sandwich with salami"
      | "brown sandwich with cheese"
      | "brown sandwich with ham"
      | "brown sandwich with salami"
      | "white sandwich with cheese"
      | "white sandwich with ham"
      | "white sandwich with salami"
    >
  >
];
