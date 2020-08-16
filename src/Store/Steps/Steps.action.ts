import {
  SetNumberOfParts,
  StepsActions,
  SetParts,
  DIRECTION,
  NavigateStep,
  ResetStepsData,
} from "./Steps.types";

export const setNumbersOfParts = (numberOfParts: string): SetNumberOfParts => ({
  type: StepsActions.SET_NUMBER_OF_PARTS,
  payload: numberOfParts,
});

export const setParts = (parts: string[]): SetParts => ({
  type: StepsActions.SET_PARTS,
  payload: parts,
});
export const navigateStep = (direction: DIRECTION): NavigateStep => ({
  type: StepsActions.NAVIGATE,
  payload: direction,
});
export const reset = (): ResetStepsData => ({
  type: StepsActions.RESET,
});
