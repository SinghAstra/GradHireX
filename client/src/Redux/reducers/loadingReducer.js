import {
  END_LOADING_CHATS,
  END_LOADING_CURRENT_CHAT,
  START_LOADING_CHATS,
  START_LOADING_CURRENT_CHAT,
} from "../actions/actionTypes";

const initialLoadingState = {
  loadingCurrentChat: true,
  loadingChats: false,
};

export const loadingReducer = (state = initialLoadingState, action) => {
  switch (action.type) {
    case START_LOADING_CURRENT_CHAT:
      return {
        ...state,
        loadingCurrentChat: true,
      };
    case END_LOADING_CURRENT_CHAT:
      return {
        ...state,
        loadingCurrentChat: false,
      };
    case START_LOADING_CHATS:
      return {
        ...state,
        loadingChats: true,
      };
    case END_LOADING_CHATS:
      return {
        ...state,
        loadingChats: false,
      };
    default:
      return state;
  }
};
