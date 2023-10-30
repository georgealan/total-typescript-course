import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = Omit<User, 'id'>; // Omit the id of the User interface and work only with firstName and lastName.
type MyType2 = Pick<User, 'firstName' | 'lastName'>; // Similar to Omit the Pick is for chose the ones to use.

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
