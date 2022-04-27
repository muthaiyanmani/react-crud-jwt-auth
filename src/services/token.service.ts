import { User } from "./token.types";

const getUser = (): User | {} => {
  return JSON.parse(window.localStorage.getItem("user") ?? "{}");
};

const setUser = (user: User): void => {
  window.localStorage.setItem("user", JSON.stringify(user));
};

const removeUser = (): void => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("user");
  }
};

export { getUser, setUser, removeUser };
