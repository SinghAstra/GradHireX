import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMessageAction,
  sendMessageAction,
} from "../../Redux/actions/messageAction";
import ChatAreaHeader from "./ChatAreaHeader";
import ChatAreaMessages from "./ChatAreaMessages";
import MessageInput from "./MessageInput";

const { io } = require("socket.io-client");

const ChatArea = () => {
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const messages = useSelector((state) => state.message.messages);
  const loadingMessages = useSelector((state) => state.loading.loadingMessages);
  const reversedMessages = messages.slice().reverse();
  const socket = io("http://localhost:5000/");

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
    <div className="w-3/4 flex flex-col h-screen bg-base-200 p-2">
      <ChatAreaHeader />
      <ChatAreaMessages
        messages={reversedMessages}
        loadingMessages={loadingMessages}
      />
      {!loadingMessages && <MessageInput chatId={chatId} socket={socket} />}
    </div>
  );
};

export default ChatArea;
