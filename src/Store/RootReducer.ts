import { combineReducers } from "redux";
import stepsReducer from "./Steps/Steps.reducer";
import { ApplicationState } from "./Store";
const rootReducer = combineReducers<ApplicationState>({
  steps: stepsReducer,
});
export default rootReducer;
