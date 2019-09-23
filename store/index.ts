import { combineReducers } from "redux";
import { sampleReducer } from "./sample/reducers";

interface Props {
  sample: any;
}

const rootReducer = combineReducers<Props>({
  sample: sampleReducer
});

export default rootReducer;
