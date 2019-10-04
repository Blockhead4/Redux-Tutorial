import ui from "./ui";
import counter from "./counter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
  ui
});

export default rootReducer;
