import { fetchMessageApi, sendMessageApi } from "../api";
import {
  END_LOADING_MESSAGES,
  FETCH_MESSAGE_FAILURE,
  FETCH_MESSAGE_SUCCESS,
  START_LOADING_MESSAGES,
} from "./actionTypes";
import { fetchChatsAction } from "./chatActions";
import { showToast } from "./toastAction";

export const sendMessageAction = (chatId, message) => async (dispatch) => {
  try {
    await sendMessageApi(chatId, message);
    dispatch(showToast("Message Sent.", "success"));
    dispatch(fetchMessageAction(chatId));
    dispatch(fetchChatsAction());
  } catch (error) {
    dispatch(showToast(error.message, "error"));
  }
};

export const fetchMessageAction = (chatId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_MESSAGES });
    const { data } = await fetchMessageApi(chatId);
    dispatch({ type: FETCH_MESSAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch(showToast(error.message, "error"));
    dispatch({ type: FETCH_MESSAGE_FAILURE });
  } finally {
    dispatch({ type: END_LOADING_MESSAGES });
  }
};
