export const CREATE_SAMPLE = "CREATE_SAMPLE";
export const DELETE_SAMPLE = "DELETE_SAMPLE";

export interface Sample {
  name: string;
}

interface CreateSample {
  type: typeof CREATE_SAMPLE;
  payload: Sample;
}

interface DeleteSample {
  type: typeof DELETE_SAMPLE;
  payload: Sample;
}

export type SampleTypes = CreateSample | DeleteSample;
