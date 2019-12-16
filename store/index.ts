import { combineReducers } from "redux";
import { sampleReducer } from "./sample/reducers";

interface Props {
  sample: any;
}

const rootReducer = combineReducers<Props>({
  sample: sampleReducer
});

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
