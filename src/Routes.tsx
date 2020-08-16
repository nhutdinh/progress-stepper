import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import StepsPage from "./Pages/StepsPage/StepsPage";
const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/steps" component={StepsPage} />
      </Switch>
    </Router>
  );
};
export default Routes;
