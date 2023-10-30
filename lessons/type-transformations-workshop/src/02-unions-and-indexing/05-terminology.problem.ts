/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

// This is a discriminated union
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

const getUnion = (result: A) => {
  if(result.type === 'a') {
    result.a
  }
}

type B = "a" | "b" | "c"; // This is a union.

// This is an enum
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
