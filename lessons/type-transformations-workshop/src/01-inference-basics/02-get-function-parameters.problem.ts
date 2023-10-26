import { Equal, Expect } from "../helpers/type-utils";
/* 
How can we extract the type parameters of that const below?
For that we use Parameters<>
*/
const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  },
) => {};

type MakeQueryParameters = Parameters<typeof makeQuery>; // Obtain the parameters of a function type in a tuple
// If you want extract the other parameters inside the object you can use this:
type MakeQueryParametersSecondArgument = MakeQueryParameters[1]; // Obtain the parameters of a function type in a tuple

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        },
      ]
    >
  >,
];
