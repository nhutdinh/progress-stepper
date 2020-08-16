import {
  StepsState,
  STEPS,
  MAX_PART_PROGRESS,
} from "../../../../Store/Steps/Steps.types";

export const canGoNext = (steps: StepsState): boolean => {
  if (steps.activeStep === STEPS.NUMBER_OF_PARTS) {
    const numberOfParts = +steps.numberOfParts;
    return numberOfParts > 0 && numberOfParts <= MAX_PART_PROGRESS;
  }
  if (steps.activeStep === STEPS.PART_PROGRESS) {
    return (
      steps.parts.reduce((memo, part) => +part + memo, 0) === MAX_PART_PROGRESS
    );
  }
  return true;
};
export const canGoBack = (stepIndex: number): boolean => {
  return stepIndex !== 0;
};
