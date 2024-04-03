import {
  FETCH_CHATS_FAILURE,
  FETCH_CHATS_SUCCESS,
  FETCH_CHAT_FAILURE,
  FETCH_CHAT_SUCCESS,
} from "../actions/actionTypes";
const initialState = {
  chats: [],
  currentChat: {},
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
    case FETCH_CHAT_SUCCESS:
      return {
        ...state,
        currentChat: action.payload,
      };
    case FETCH_CHAT_FAILURE:
      return {
        ...state,
        currentChat: {},
      };
    default:
      return state;
  }
};
