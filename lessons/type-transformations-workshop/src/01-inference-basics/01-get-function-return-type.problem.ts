import { Equal, Expect } from "../helpers/type-utils";

/* To extract the return type of that function below we need inform the type with 
the ReturnType type helper of the Typescript language. With that if you change the type
it'll reflect in ReturnType line of code.
*/

const myFunc = () => {
  return "hello"; // Try change the return type and se the line 16 throw an error.
};

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = ReturnType<typeof myFunc>; // Obtain the return type of a function type
type MyFuncReturn2 = string; // It will be useless if you change the return type of myFunc above.

type tests = [Expect<Equal<MyFuncReturn, string>>];
