import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../Components/Button/Button";
import { navigateStep } from "../../../../Store/Steps/Steps.action";
import { DIRECTION, STEPS } from "../../../../Store/Steps/Steps.types";
import { ApplicationState } from "../../../../Store/Store";
import { canGoBack, canGoNext } from "./NavigationButton.utils";
import { NavigationButtonsStyled } from "./NavigationButtons.styled";

const NavigationButtons: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const stepsState = useSelector((state: ApplicationState) => state.steps);

  const showNavigationBtns = stepsState.activeStep !== STEPS.COMPLETE;
  const navigation = (direction: DIRECTION) => {
    dispatch(navigateStep(direction));
  };
  const btnNextDisabled = !canGoNext(stepsState);
  const btnBackDisabled = !canGoBack(stepsState.activeStep);
  const btnDisabled = [btnBackDisabled, btnNextDisabled];
  const buttons = [DIRECTION.PREVIOUS, DIRECTION.NEXT].map((btn, index) => (
    <Button
      priority="primary"
      data-testid={`navigation-buttons__${btn.toLowerCase()}`}
      key={index}
      disabled={btnDisabled[index]}
      onClick={(): void => {
        navigation(btn);
      }}
    >
      {btn === DIRECTION.PREVIOUS ? "Previous" : "Next"}
    </Button>
  ));

  return (
    <NavigationButtonsStyled>
      {showNavigationBtns && buttons}
    </NavigationButtonsStyled>
  );
};
export default NavigationButtons;
