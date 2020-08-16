import styled from "styled-components";

const STEPPER_SIZE = "3rem";

export const StepperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 15rem;
  position: relative;
`;
export const StepperStepStyled = styled.div`
  position: relative;
  z-index: 1;
  background-color: white;
  border-radius: 50%;
`;
export const StepperStepIndicatorStyled = styled.div<{
  active?: boolean;
}>`
  width: ${STEPPER_SIZE};
  height: ${STEPPER_SIZE};
  line-height: ${STEPPER_SIZE};
  border-radius: 50%;
  color: white;
  background-color: blue;
  text-align: center;
  opacity: ${(props): number => (props.active ? 1 : 0.5)};
`;

const getConnectorWidth = (numberOfSteps: number): number =>
  100 / (numberOfSteps - 1);

export const StepperStepConnectorStyled = styled.div<{
  numberOfSteps: number;
  index: number;
  active?: boolean;
}>`
  width: ${(props): string => getConnectorWidth(props.numberOfSteps) + "%"};
  top: 50%;
  transform: translate(${(props): string => props.index * 100 + "%"}, -50%);
  height: 8px;
  background-color: ${(props): string =>
    props.active ? "blue" : "rgba(0, 0, 0, 0.1)"};
  position: absolute;
`;
