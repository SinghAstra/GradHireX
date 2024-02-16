import { sendMessageApi } from "../API";
import { showNotification } from "./notificationAction";

export const sendMessageAction = (chatId, message) => async (dispatch) => {
  try {
    const { data } = await sendMessageApi(chatId, message);
    console.log("data --sendMessageAction ", data);
    dispatch(showNotification("Message Sent.", "info"));
  } catch (error) {
    dispatch(showNotification(error.message, "error"));
  }
};
