import {
  FETCH_CHATS_FAILURE,
  FETCH_CHATS_SUCCESS,
} from "../actions/actionTypes";
const initialState = {
  chats: [],
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHATS_SUCCESS:
      return {
        ...state,
        chats: action.payload,
      };
    case FETCH_CHATS_FAILURE:
      return {
        ...state,
        chats: [],
      };
    default:
      return state;
  }
};
