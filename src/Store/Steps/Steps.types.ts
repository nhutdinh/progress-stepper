export const MAX_PART_PROGRESS = 100;

export interface StepsState {
  numberOfParts: string;
  parts: string[];
  activeStep: STEPS;
}
export type SetStepDataAction =
  | SetParts
  | SetNumberOfParts
  | NavigateStep
  | ResetStepsData;
export enum DIRECTION {
  NEXT = "NEXT",
  PREVIOUS = "PREVIOUS",
}
export enum STEPS {
  NUMBER_OF_PARTS,
  PART_PROGRESS,
  COMPLETE,
}

export enum StepsActions {
  SET_NUMBER_OF_PARTS = "@Steps/SET_NUMBER_OF_PARTS",
  SET_PARTS = "@Steps/SET_PARTS",
  NAVIGATE = "@Steps/NAVIGATE",
  RESET = "@Steps/RESET",
}
export interface SetNumberOfParts {
  type: StepsActions.SET_NUMBER_OF_PARTS;
  payload: string;
}
export interface SetParts {
  type: StepsActions.SET_PARTS;
  payload: string[];
}

export interface NavigateStep {
  type: StepsActions.NAVIGATE;
  payload: DIRECTION;
}

export interface ResetStepsData {
  type: StepsActions.RESET;
}
