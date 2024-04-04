import React from "react";
import { useSelector } from "react-redux";
import SelfMessage from "../Messages/SelfMessage";
import OtherMessage from "../Messages/OtherMessage";

const ChatAreaMessages = ({ messages }) => {
  const currentUserId = useSelector((state) => state.user.currentUser._id);

  return (
    <div className="flex-1 overflow-auto flex-col-reverse  flex p-2">
      {messages.map((message) => {
        return message.sender?._id === currentUserId ? (
          <SelfMessage key={message._id} message={message.content} />
        ) : (
          <OtherMessage key={message._id} message={message.content} />
        );
      })}
    </div>
  );
};

export default ChatAreaMessages;
