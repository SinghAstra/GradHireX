import React from "react";
import { useSelector } from "react-redux";
import SelfMessage from "../SelfMessage";
import OtherMessage from "../OtherMessage";

const ChatAreaMessages = ({ messages }) => {
  const currentUserId = useSelector((state) => state.user.currentUser._id);
  return (
    <div className="flex-1 overflow-y-scroll p-2">
      {messages.map((message) => {
        return message.sender._id === currentUserId ? (
          <SelfMessage key={message._id} message={message.content} />
        ) : (
          <OtherMessage key={message._id} message={message.content} />
        );
      })}
    </div>
  );
};

export default ChatAreaMessages;
