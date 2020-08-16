import React from "react";
import Steps from "./Steps/Steps";
import { StepsPageStyled } from "./StepsPage.styled";

const StepsPage: React.FC = () => {
  return (
    <StepsPageStyled>
      <Steps></Steps>
    </StepsPageStyled>
  );
};
export default StepsPage;
