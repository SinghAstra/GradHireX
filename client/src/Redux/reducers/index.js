import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { loadingReducer } from "./loadingReducer";
import { chatReducer } from "./chatReducer";
import { groupReducer } from "./groupReducer";
import { messageReducer } from "./messageReducer";
import { toastReducer } from "./toastReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  toast: toastReducer,
  loading: loadingReducer,
  chat: chatReducer,
  group: groupReducer,
  message: messageReducer,
});
