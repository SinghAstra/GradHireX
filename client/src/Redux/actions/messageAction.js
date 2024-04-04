import { fetchMessageApi, sendMessageApi } from "../API";
import { FETCH_MESSAGE_FAILURE, FETCH_MESSAGE_SUCCESS } from "./actionTypes";
import { fetchChatsAction } from "./chatActions";
import { showToast } from "./toastAction";

export const sendMessageAction = (chatId, message) => async (dispatch) => {
  try {
    await sendMessageApi(chatId, message);
    dispatch(showToast("Message Sent.", "success"));
    dispatch(fetchChatsAction());
    dispatch(fetchMessageAction(chatId));
  } catch (error) {
    dispatch(showToast(error.message, "error"));
  }
};

export const fetchMessageAction = (chatId) => async (dispatch) => {
  try {
    const { data } = await fetchMessageApi(chatId);
    dispatch({ type: FETCH_MESSAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch(showToast(error.message, "error"));
    dispatch({ type: FETCH_MESSAGE_FAILURE });
  }
};
