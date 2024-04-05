import {
  AUTH,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  LOG_OUT,
} from "../actions/actionTypes";
const initialState = {
  user: null,
  token:
    localStorage.getItem("token") !== "undefined"
      ? localStorage.getItem("token")
      : null,
  users: [],
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return { users: [], user: action.payload, token: action.payload.token };
    case LOG_OUT:
      localStorage.removeItem("token");
      return { users: [], user: null, token: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, users: [] };
    default:
      return state;
  }
};
