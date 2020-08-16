import React from "react";
import { CompleteStepStyled } from "./CompleteStep.styled";
import { Link } from "react-router-dom";
import Button from "../../../../Components/Button/Button";

const CompleteStep: React.FC = () => {
  return (
    <CompleteStepStyled>
      <h1>Success</h1>
      <Link to="/">
        <Button data-testid="complete-step__home-btn" priority="secondary">
          Home
        </Button>
      </Link>
    </CompleteStepStyled>
  );
};
export default CompleteStep;
