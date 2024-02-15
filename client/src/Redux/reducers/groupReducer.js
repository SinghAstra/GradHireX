import {
  FETCH_GROUPS_FAILURE,
  FETCH_GROUPS_SUCCESS,
} from "../actions/actionTypes";
const initialState = {
  groups: [],
};

export const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        groups: action.payload,
      };
    case FETCH_GROUPS_FAILURE:
      return {
        ...state,
        groups: [],
      };
    default:
      return state;
  }
};
