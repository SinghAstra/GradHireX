import React from "react";
import "../styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";

const ConversationItem = ({ chat }) => {
  const currentUserId = useSelector((state) => state.user.currentUser._id);
  let chatName;
  const navigate = useNavigate();

  if (chat.isGroupChat) {
    chatName = chat.chatName;
  } else {
    const otherUser = chat.users.find((user) => user._id !== currentUserId);
    chatName = otherUser.name;
  }

  let timeIn12HourFormat = "";
  if (chat.lastMessage) {
    const date = new Date(chat.lastMessage.createdAt);
    timeIn12HourFormat = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }
  return (
    <div
      className="w-full my-2 mx-1 flex bg-black p-2 rounded-xl gap-2 cursor-pointer"
      onClick={() => navigate(`/app/chat/${chat._id}`)}
    >
      <UserAvatar chatName={chatName} />
      <div className="flex-1 flex flex-col justify-between text-white">
        <h1>{chatName}</h1>
        <div className="text-neutral-500">
          {chat.lastMessage
            ? chat.lastMessage.content
            : "Click here! Start a conversation !"}
        </div>
      </div>
      <div className={"text-neutral-500"}>{timeIn12HourFormat}</div>
    </div>
  );
};

export default ConversationItem;
