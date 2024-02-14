import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";
import { userReducer } from "./userReducer";
import { notificationReducer } from "./notificationReducer";
import { loadingReducer } from "./loadingReducer";
import { chatReducer } from "./chatReducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  notification: notificationReducer,
  loading: loadingReducer,
  chat: chatReducer,
});
