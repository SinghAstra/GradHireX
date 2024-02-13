import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";
import { userReducer } from "./userReducer";
import { notificationReducer } from "./notificationReducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  notification: notificationReducer,
});
