import { Sample, CREATE_SAMPLE, DELETE_SAMPLE, SampleTypes } from "./types";

export async function createSample(name: Sample): Promise<SampleTypes> {
  return {
    type: CREATE_SAMPLE,
    payload: name
  };
}

export async function deleteSample(name: Sample): Promise<SampleTypes> {
  return {
    type: DELETE_SAMPLE,
    payload: name
  };
}
