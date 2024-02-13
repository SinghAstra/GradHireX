import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
});
