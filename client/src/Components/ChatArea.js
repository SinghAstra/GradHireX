import React, { useState } from "react";
import "./styles.css";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SendIcon from "@mui/icons-material/Send";
import SelfMessage from "./SelfMessage";
import OtherMessage from "./OtherMessage";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sendMessageAction } from "../Redux/actions/messageAction";

const ChatArea = () => {
  const lightTheme = useSelector((state) => state.theme);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const handleMessageSent = () => {
    if (message.trim().length > 0) {
      dispatch(sendMessageAction(chatId, message));
      setMessage("");
    }
  };
  return (
    <div className="chatArea-container">
      <div className={"chatArea-header" + (lightTheme ? "" : " dark")}>
        <div className="chatArea-header-icon">S</div>
        <div className="chatArea-header-title">Title</div>
        <div className="chatArea-header-online">online</div>
        <div className="chatArea-header-delete-icon">
          <IconButton className={lightTheme ? "" : " dark"}>
            <DeleteOutlineIcon />
          </IconButton>
        </div>
      </div>
      <div className={"chatArea-messages" + (lightTheme ? "" : " dark")}>
        <SelfMessage />
        <OtherMessage />
        <SelfMessage />
        <OtherMessage />
        <SelfMessage />
        <OtherMessage />
        <SelfMessage />
        <OtherMessage />
        <SelfMessage />
        <OtherMessage />
        <SelfMessage />
        <OtherMessage />
      </div>
      <div className={"chatArea-input-area" + (lightTheme ? "" : " dark")}>
        <input
          className={"search-box" + (lightTheme ? "" : " dark")}
          placeholder="Type Your Message here..."
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              handleMessageSent();
            }
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconButton onClick={handleMessageSent}>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
