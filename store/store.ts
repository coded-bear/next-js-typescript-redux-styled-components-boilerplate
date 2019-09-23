import { createStore } from "redux";
import rootReducer from "./index";

export const initStore = (initialState: any) => {
  return createStore(rootReducer, initialState);
};
