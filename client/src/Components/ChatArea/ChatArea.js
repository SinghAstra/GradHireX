import React, { useEffect, useState } from "react";
import "../styles.css";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMessageAction,
  sendMessageAction,
} from "../../Redux/actions/messageAction";
import ChatAreaHeader from "./ChatAreaHeader";
import ChatAreaMessages from "./ChatAreaMessages";
const { io } = require("socket.io-client");

const ChatArea = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { chatId } = useParams();
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
    <div className="w-3/4 flex flex-col h-screen">
      <ChatAreaHeader />
      <ChatAreaMessages messages={messages} />
      <div className="p-2">
        <div className="bg-black border-violet-400 border-2 rounded-xl flex">
          <input
            className="rounded-l-xl flex-1 p-2  text-white font-mono outline outline-0 focus:outline-0 text-xl"
            placeholder="Type Your Message here..."
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                handleMessageSent();
              }
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div
            onClick={handleMessageSent}
            className="flex items-center justify-center px-2"
          >
            <SendIcon className="text-violet-400 text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
