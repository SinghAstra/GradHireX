import { HIDE_TOAST, SHOW_TOAST } from "../actions/actionTypes";

const initialToastState = {
  showToast: false,
  toastText: "",
  severity: "",
};

export const toastReducer = (state = initialToastState, action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        showToast: true,
        toastText: action.payload.toastText,
        severity: action.payload.severity,
      };
    case HIDE_TOAST:
      return {
        ...state,
        showToast: false,
        toastText: "",
        severity: "",
      };
    default:
      return state;
  }
};
