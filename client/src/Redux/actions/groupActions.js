import { exitGroupChatApi, fetchGroupsApi, joinGroupChatApi } from "../API";
import { FETCH_GROUPS_FAILURE, FETCH_GROUPS_SUCCESS } from "./actionTypes";
import { fetchChatsAction } from "./chatActions";
import { showNotification } from "./notificationAction";

export const fetchGroupsAction = (searchQuery) => async (dispatch) => {
  try {
    const { data } = await fetchGroupsApi(searchQuery);
    console.log("data --fetchGroupsAction", data);
    dispatch({ type: FETCH_GROUPS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_GROUPS_FAILURE });
    dispatch(showNotification(error.message, "error"));
  }
};

export const exitGroupChatAction = (chatId) => async (dispatch) => {
  try {
    await exitGroupChatApi(chatId);
    dispatch(showNotification(`Group Chat Exited`, "info"));
    dispatch(fetchGroupsAction(""));
    dispatch(fetchChatsAction());
  } catch (error) {
    dispatch(showNotification(error.message, "error"));
  }
};

export const joinGroupChatAction = (chatId) => async (dispatch) => {
  try {
    await joinGroupChatApi(chatId);
    dispatch(showNotification(`Group Chat Joined`, "info"));
    dispatch(fetchGroupsAction(""));
    dispatch(fetchChatsAction());
  } catch (error) {
    dispatch(showNotification(error.message, "error"));
  }
};
