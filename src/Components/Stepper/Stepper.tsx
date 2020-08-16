import React from "react";
import {
  StepperStepIndicatorStyled,
  StepperStepStyled,
  StepperStepConnectorStyled,
  StepperStyled,
} from "./Stepper.styled";

export interface StepperProps {
  /**
   * The active step
   */
  activeStep?: number;

  /**
   * number of steps
   */
  numberOfSteps?: number;
}
const NUMBER_OF_STEPS = 3;
const Stepper: React.FC<StepperProps> = (props: StepperProps) => {
  const { numberOfSteps = NUMBER_OF_STEPS, activeStep = 0 } = props;
  const steps = Array.from(
    { length: numberOfSteps },
    (_item: number, index: number): React.ReactElement => {
      return (
        <StepperStepStyled key={index} data-testid="stepper__step">
          <StepperStepIndicatorStyled
            data-testid="stepper__step-indicator"
            active={activeStep >= index}
          >
            {index + 1}
          </StepperStepIndicatorStyled>
        </StepperStepStyled>
      );
    }
  );
  const connectors = Array.from(
    { length: numberOfSteps - 1 },
    (_item: number, index: number): React.ReactElement => {
      return (
        <StepperStepConnectorStyled
          data-testid="stepper__step-connector"
          numberOfSteps={numberOfSteps}
          index={index}
          key={index}
          active={activeStep - 1 >= index}
        ></StepperStepConnectorStyled>
      );
    }
  );
  return (
    <StepperStyled>
      {steps}
      {connectors}
    </StepperStyled>
  );
};
export default Stepper;
