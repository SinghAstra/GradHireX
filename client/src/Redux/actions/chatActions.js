import {
  createChatApi,
  createGroupChatApi,
  fetchChat,
  fetchChatsApi,
} from "../API";
import {
  FETCH_CHATS_FAILURE,
  FETCH_CHATS_SUCCESS,
  FETCH_CHAT_SUCCESS,
} from "./actionTypes";
import { showNotification } from "./notificationAction";

export const createChatAction = (userId) => async (dispatch) => {
  try {
    const { data } = await createChatApi(userId);
    dispatch(
      showNotification(
        `Chat Created Successfully - ${data.chatName}`,
        "success"
      )
    );
    dispatch(fetchChatsAction());
  } catch (error) {
    dispatch(showNotification(error.message, "error"));
  }
};

export const fetchChatsAction = () => async (dispatch) => {
  try {
    const { data } = await fetchChatsApi();
    dispatch({ type: FETCH_CHATS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_CHATS_FAILURE });
    dispatch(showNotification(error.message, "error"));
  }
};

export const createGroupChatAction = (name, users) => async (dispatch) => {
  try {
    const { data } = await createGroupChatApi(name, users);
    dispatch(
      showNotification(
        `Group Chat Created Successfully - ${data.chatName}`,
        "success"
      )
    );
    dispatch(fetchChatsAction());
  } catch (error) {
    dispatch(showNotification(error.message, "error"));
  }
};

export const fetchCurrentChat = (chatId) => async (dispatch) => {
  try {
    const { data } = await fetchChat(chatId);
    console.log("data --fetchCurrentChat", data);
    dispatch({ type: FETCH_CHAT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_CHATS_FAILURE });
    dispatch(showNotification(error.message, "error"));
  }
};
