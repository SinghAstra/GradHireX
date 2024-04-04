import {
  END_AUTHENTICATING,
  END_LOADING_CHATS,
  END_LOADING_CURRENT_CHAT,
  END_LOADING_MESSAGES,
  START_AUTHENTICATING,
  START_LOADING_CHATS,
  START_LOADING_CURRENT_CHAT,
  START_LOADING_MESSAGES,
} from "../actions/actionTypes";

const initialLoadingState = {
  loadingCurrentChat: true,
  loadingChats: false,
  loadingMessages: false,
  auth: false,
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
    case START_LOADING_MESSAGES:
      return {
        ...state,
        loadingMessages: true,
      };
    case END_LOADING_MESSAGES:
      return {
        ...state,
        loadingMessages: false,
      };
    case START_AUTHENTICATING:
      return {
        ...state,
        auth: true,
      };
    case END_AUTHENTICATING:
      return {
        ...state,
        auth: false,
      };
    default:
      return state;
  }
};
