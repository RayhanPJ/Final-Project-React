import { combineReducers } from "redux";
import Airlines from "./AirlinesReducer";
import formReducer from "./FormReducer";

export default combineReducers({
  Airlines,
  formReducer
});