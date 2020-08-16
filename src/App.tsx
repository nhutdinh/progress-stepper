import React from "react";
import "./App.css";
import Routes from "./Routes";
import RootReducer from "./Store/RootReducer";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(RootReducer, composeEnhancers);
function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
