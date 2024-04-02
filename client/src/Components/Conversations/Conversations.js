import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConversationItem from "./ConversationItem";
import { fetchChatsAction } from "../../Redux/actions/chatActions";
import ConversationItemSkelton from "./ConversationItemSkelton";

const Conversations = () => {
  // const chats = useSelector((state) => state.chat.chats);
  const chats = [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatsAction());
  }, [dispatch]);

  console.log("chats is ", chats);

  return (
    <div className="w-1/3 bg-violet-400">
      <div className="overflow-y-scroll h-screen no-scrollbar fixed top-4 left-0 py-16 w-1/3 px-4">
        {chats.length > 0
          ? chats.map((conversation) => (
              <ConversationItem chat={conversation} key={conversation._id} />
            ))
          : Array.from({ length: 8 }).map((_, index) => (
              <ConversationItemSkelton key={index} />
            ))}
      </div>
    </div>
  );
};

export default Conversations;
