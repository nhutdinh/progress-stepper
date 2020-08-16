import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { LandingPageStyled } from "./LandingPage.styled";

const LandingPage: React.FC = (): React.ReactElement => {
  return (
    <LandingPageStyled>
      <Link to="/steps">
        <Button data-testid="request-btn" priority="primary">
          Request
        </Button>
      </Link>
    </LandingPageStyled>
  );
};
export default LandingPage;
