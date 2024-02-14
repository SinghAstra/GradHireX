import {
  AUTH,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from "../actions/actionTypes";
const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")),
  users: [],
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { users: [], currentUser: action.payload };
    // case LOG_OUT:
    //   return { ...state, currentUser: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, users: [] };
    default:
      return state;
  }
};
