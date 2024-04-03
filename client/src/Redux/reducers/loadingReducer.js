import {
  END_LOADING_CURRENT_CHAT,
  START_LOADING_CURRENT_CHAT,
} from "../actions/actionTypes";

const initialLoadingState = {
  loadingCurrentChat: true,
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
    default:
      return state;
  }
};
