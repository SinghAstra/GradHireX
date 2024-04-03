import React, { useEffect } from "react";
import UserAvatar from "../Conversations/UserAvatar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCurrentChat } from "../../Redux/actions/chatActions";
import ChatAreaHeaderSkelton from "./ChatAreaHeaderSkelton";

const ChatAreaHeader = () => {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const loadingCurrentChat = useSelector(
    (state) => state.loading.loadingCurrentChat
  );
  const currentChat = useSelector((state) => state.chat.currentChat);
  const currentUserId = useSelector((state) => state.user.currentUser._id);
  let chatName = "";

  useEffect(() => {
    dispatch(fetchCurrentChat(chatId));
  }, [chatId, dispatch]);

  if (loadingCurrentChat) {
    return <ChatAreaHeaderSkelton />;
  }

  if (currentChat.isGroupChat) {
    chatName = currentChat.chatName;
  } else {
    const otherUser = currentChat.users.find(
      (user) => user._id !== currentUserId
    );
    chatName = otherUser.name;
  }

  return (
    <div className="p-2">
      <div className="w-full p-2 gap-2 flex rounded-xl bg-black border-2 border-violet-400">
        <UserAvatar chatName={chatName} />
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-xl text-white">{chatName}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatAreaHeader;
