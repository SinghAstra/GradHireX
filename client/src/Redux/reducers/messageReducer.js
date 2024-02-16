import {
  FETCH_MESSAGE_FAILURE,
  FETCH_MESSAGE_SUCCESS,
} from "../actions/actionTypes";
const initialState = {
  messages: [],
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: action.payload,
      };
    case FETCH_MESSAGE_FAILURE:
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
};
