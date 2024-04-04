import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConversationItem from "./ConversationItem";
import { fetchChatsAction } from "../../Redux/actions/chatActions";
import ConversationItemSkelton from "./ConversationItemSkelton";

const Conversations = ({ searchQuery }) => {
  const chats = useSelector((state) => state.chat.chats);
  const dispatch = useDispatch();
  const loadingChats = useSelector((state) => state.loading.loadingChats);
  const currentUserId = useSelector((state) => state.user.currentUser._id);

  useEffect(() => {
    dispatch(fetchChatsAction());
  }, [dispatch]);

  console.log("chats is ", chats);

  if (loadingChats) {
    return (
      <div className="overflow-y-scroll flex-1 no-scrollbar m-2 mt-0">
        <ul className="menu menu-md bg-base-200 w-full rounded-box">
          {Array.from({ length: 8 }).map((_, index) => (
            <ConversationItemSkelton key={index} />
          ))}
        </ul>
      </div>
    );
  }

  const filteredChats = chats.filter((chat) => {
    let chatName;
    if (chat.isGroupChat) {
      chatName = chat.chatName;
    } else {
      chatName = chat.users.find((user) => user._id !== currentUserId).name;
    }
    return chatName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="overflow-y-scroll flex-1 no-scrollbar m-2 mt-0">
      <ul className="menu menu-md bg-base-200 w-full rounded-box">
        {filteredChats.map((conversation) => (
          <ConversationItem chat={conversation} key={conversation._id} />
        ))}
      </ul>
    </div>
  );
};

export default Conversations;
