import { fetchGroupsApi } from "../API";
import { FETCH_GROUPS_FAILURE, FETCH_GROUPS_SUCCESS } from "./actionTypes";
import { showNotification } from "./notificationAction";

export const fetchGroupsAction = (searchQuery) => async (dispatch) => {
  try {
    const { data } = await fetchGroupsApi(searchQuery);
    dispatch({ type: FETCH_GROUPS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_GROUPS_FAILURE });
    dispatch(showNotification(error.message, "error"));
  }
};
