import { CREATE_SAMPLE, DELETE_SAMPLE, SampleTypes, Sample } from "./types";

export function sampleReducer(state = "", action: SampleTypes): Sample | string {
  switch (action.type) {
    case CREATE_SAMPLE:
      return action.payload;
    case DELETE_SAMPLE:
      return "";
    default:
      return state;
  }
}
