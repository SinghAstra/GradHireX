import React, { useEffect, useState } from "react";
import "../styles.css";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SelfMessage from "../SelfMessage";
import OtherMessage from "../OtherMessage";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMessageAction,
  sendMessageAction,
} from "../../Redux/actions/messageAction";
import ChatAreaHeader from "./ChatAreaHeader";
const { io } = require("socket.io-client");

const ChatArea = () => {
  const lightTheme = useSelector((state) => state.theme);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const currentUserId = useSelector((state) => state.user.currentUser._id);
  const messages = useSelector((state) => state.message.messages);
  const socket = io("http://localhost:5000/");

  const handleMessageSent = () => {
    if (message.trim().length > 0) {
      dispatch(sendMessageAction(chatId, message));
      socket.emit("chat message", { chatId, message });
      setMessage("");
    }
  };

  useEffect(() => {
    dispatch(fetchMessageAction(chatId));
    socket.on("chat message", (msg) => {
      dispatch(fetchMessageAction(chatId));
    });
    return () => {
      socket.disconnect();
    };
  }, [chatId, dispatch]);
  return (
    <div className="w-2/3">
      <ChatAreaHeader />
      <div className={"chatArea-messages" + (lightTheme ? "" : " dark")}>
        {messages.map((message) => {
          return message.sender._id === currentUserId ? (
            <SelfMessage key={message._id} message={message.content} />
          ) : (
            <OtherMessage key={message._id} message={message.content} />
          );
        })}
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
