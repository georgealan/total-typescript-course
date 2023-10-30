import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

// Extract from T those types that are assignable to U <T, U>
type ClickEvent = Extract<Event, { type: 'click' }>;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
