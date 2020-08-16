import React from "react";
import InputParts from "./InputPartsStep/InputPartsStep";
import PartsProgress from "./PartsProgressStep/PartsProgressStep";
import Stepper from "../../../Components/Stepper/Stepper";
import NavigationButtons from "./NavigationButtons/NavigationButtons";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../../Store/Store";
import CompleteStep from "./CompleteStep/CompleteStep";
import { StepperWrapperStyled, ActiveStepStyled } from "./Steps.styled";
import { reset } from "../../../Store/Steps/Steps.action";

const Steps: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();

  const steps = [InputParts, PartsProgress, CompleteStep];
  const activeStep = useSelector(
    (state: ApplicationState) => state.steps.activeStep
  );
  const ActiveStep = steps[activeStep];

  /**
   * reset steps data when unmounted
   */
  React.useEffect((): (() => void) => {
    return (): void => {
      dispatch(reset());
    };
  }, []);
  return (
    <div data-testid="steps">
      <StepperWrapperStyled>
        <Stepper activeStep={activeStep}></Stepper>
      </StepperWrapperStyled>
      <ActiveStepStyled>
        <ActiveStep></ActiveStep>
      </ActiveStepStyled>
      <NavigationButtons></NavigationButtons>
    </div>
  );
};
export default Steps;
