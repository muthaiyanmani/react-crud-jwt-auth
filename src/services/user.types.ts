import { User } from "./token.types";

// Types
enum UserActionTypes {
  ADD_USER = "ADD_USER",
  REMOVE_USER = "REMOVE_USER",
}

type UserActions =
  | { type: UserActionTypes.ADD_USER; payload?: User | {} }
  | { type: UserActionTypes.REMOVE_USER; payload?: User | undefined };

export { UserActionTypes };
export type { UserActions };
