import { exitGroupChatApi, fetchGroupsApi, joinGroupChatApi } from "../API";
import { FETCH_GROUPS_FAILURE, FETCH_GROUPS_SUCCESS } from "./actionTypes";
import { fetchChatsAction } from "./chatActions";
import { showToast } from "./toastAction";

export const fetchGroupsAction = (searchQuery) => async (dispatch) => {
  try {
    const { data } = await fetchGroupsApi(searchQuery);
    console.log("data --fetchGroupsAction", data);
    dispatch({ type: FETCH_GROUPS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_GROUPS_FAILURE });
    dispatch(showToast(error.message, "error"));
  }
};

export const exitGroupChatAction = (chatId) => async (dispatch) => {
  try {
    await exitGroupChatApi(chatId);
    dispatch(showToast(`Exited Group`, "warning"));
    dispatch(fetchGroupsAction(""));
    dispatch(fetchChatsAction());
  } catch (error) {
    dispatch(showToast(error.message, "error"));
  }
};

export const joinGroupChatAction = (chatId) => async (dispatch) => {
  try {
    await joinGroupChatApi(chatId);
    dispatch(showToast(`Joined Group`, "success"));
    dispatch(fetchGroupsAction(""));
    dispatch(fetchChatsAction());
  } catch (error) {
    dispatch(showToast(error.message, "error"));
  }
};
