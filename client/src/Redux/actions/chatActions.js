import { createChatApi } from "../API";
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
  } catch (error) {
    dispatch(showNotification(error.message, "error"));
  }
};
