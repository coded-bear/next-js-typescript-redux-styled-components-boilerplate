import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./index";

export function initStore() {
  return createStore(rootReducer, applyMiddleware(ReduxThunk));
}
