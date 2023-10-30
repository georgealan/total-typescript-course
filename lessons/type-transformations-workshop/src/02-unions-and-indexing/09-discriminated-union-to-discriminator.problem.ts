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

// You can acesse pieces of them as long they belong on each member of the union.
type EventType = Event['type'];

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
