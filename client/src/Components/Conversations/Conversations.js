import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConversationItem from "./ConversationItem";
import { fetchChatsAction } from "../../Redux/actions/chatActions";

const Conversations = () => {
  const chats = useSelector((state) => state.chat.chats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatsAction());
  }, [dispatch]);

  return (
    <div className="w-1/3 bg-pink-400">
      <div className="overflow-y-scroll h-screen no-scrollbar fixed top-4 left-0 p-16">
        {chats.map((conversation) => (
          <ConversationItem props={conversation} key={conversation._id} />
        ))}
      </div>
    </div>
  );
};

export default Conversations;
