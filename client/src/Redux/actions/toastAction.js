import { SHOW_TOAST, HIDE_TOAST } from "./actionTypes";

export const showToast = (toastText, severity) => {
  return {
    type: SHOW_TOAST,
    payload: {
      toastText,
      severity,
    },
  };
};

export const hideToast = () => {
  return {
    type: HIDE_TOAST,
  };
};
