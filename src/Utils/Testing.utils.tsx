import { createBrowserHistory } from "history";
import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../Store/RootReducer";

export const renderWithRouter = (
  component: React.ReactElement,
  initState = {}
) => {
  const history = createBrowserHistory();
  const store = createStore(rootReducer, initState);

  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{component}</Router>
      </Provider>
    ),
    history,
  };
};
