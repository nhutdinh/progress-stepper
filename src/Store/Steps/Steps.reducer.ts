import {
  SetStepDataAction,
  StepsActions,
  StepsState,
  DIRECTION,
} from "./Steps.types";

const initState: StepsState = {
  numberOfParts: "",
  parts: [],
  activeStep: 0,
};
const stepsReducer = (
  state: StepsState = initState,
  action: SetStepDataAction
) => {
  switch (action.type) {
    case StepsActions.SET_NUMBER_OF_PARTS:
      return {
        ...state,
        numberOfParts: action.payload,
        parts: action.payload === state.numberOfParts ? state.parts : [],
      };
    case StepsActions.SET_PARTS:
      return {
        ...state,
        parts: [...action.payload],
      };
    case StepsActions.NAVIGATE:
      return {
        ...state,
        activeStep:
          action.payload === DIRECTION.NEXT
            ? state.activeStep + 1
            : state.activeStep - 1,
      };

    case StepsActions.RESET:
      return {
        ...initState,
      };
    default:
      return state;
  }
};
export default stepsReducer;
