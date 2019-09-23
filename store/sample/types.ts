export interface Sample {
  name: string;
  timestamp: number;
}

export const CREATE_SAMPLE = "CREATE_SAMPLE";
export const DELETE_SAMPLE = "DELETE_SAMPLE";

interface CreateSample {
  type: typeof CREATE_SAMPLE;
  payload: Sample;
}

interface DeleteSample {
  type: typeof DELETE_SAMPLE;
  meta: {
    timestamp: number;
  };
}

export type SampleTypes = CreateSample | DeleteSample;
