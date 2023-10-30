import { Equal, Expect } from "../helpers/type-utils";

type Event = `log_in` | "log_out" | "sign_up";

// Uppercase convert string literal type to uppercase
type ObjectOfKeys = Record<Uppercase<Event>, string>;

// Other methods that handle this type of transformation.
type ObjectOfKeys2 = Capitalize<Event>;
type ObjectOfKeys3 = Lowercase<Event>;

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        LOG_IN: string;
        LOG_OUT: string;
        SIGN_UP: string;
      }
    >
  >,
];
