import { AUTH } from "../actions/actionTypes";
const initialState = JSON.parse(localStorage.getItem("user"));
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    // case LOG_OUT:
    //   return { ...state, authState: null };
    default:
      return state;
  }
};
