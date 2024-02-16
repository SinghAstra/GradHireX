import { fetchMessageApi, sendMessageApi } from "../API";
import { FETCH_CHATS_FAILURE, FETCH_MESSAGE_SUCCESS } from "./actionTypes";
import { fetchChatsAction } from "./chatActions";
import { showNotification } from "./notificationAction";

export const sendMessageAction = (chatId, message) => async (dispatch) => {
  try {
    const { data } = await sendMessageApi(chatId, message);
    dispatch(showNotification("Message Sent.", "info"));
    dispatch(fetchChatsAction());
    dispatch(fetchMessageAction(chatId));
  } catch (error) {
    dispatch(showNotification(error.message, "error"));
  }
};

export const fetchMessageAction = (chatId) => async (dispatch) => {
  try {
    const { data } = await fetchMessageApi(chatId);
    console.log("data --fetchMessageAction ", data);
    dispatch({ type: FETCH_MESSAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch(showNotification(error.message, "error"));
    dispatch({ type: FETCH_CHATS_FAILURE });
  }
};
