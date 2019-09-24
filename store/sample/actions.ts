import { Sample, CREATE_SAMPLE, DELETE_SAMPLE, SampleTypes } from "./types";

export function createSample(name: Sample): SampleTypes {
  return {
    type: CREATE_SAMPLE,
    payload: name
  };
}

export function deleteSample(name: Sample): SampleTypes {
  return {
    type: DELETE_SAMPLE,
    payload: name
  };
}
