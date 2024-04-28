import { createContext } from "react";
import Store from "./store";

export const store = new Store();

interface State {
  store: Store;
}

export const Context = createContext<State>({ store });