import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConversationItem from "./ConversationItem";
import { fetchChatsAction } from "../../Redux/actions/chatActions";
import ConversationItemSkelton from "./ConversationItemSkelton";

const Conversations = () => {
  const chats = useSelector((state) => state.chat.chats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatsAction());
  }, [dispatch]);

  console.log("chats is ", chats);

  return (
    <div className=" bg-violet-400 overflow-y-scroll h-screen no-scrollbar w-1/3 p-2">
      {chats.length > 0 ? (
        <ul className="menu menu-md bg-base-200 w-full rounded-box">
          {chats.map((conversation) => (
            <ConversationItem chat={conversation} key={conversation._id} />
          ))}
        </ul>
      ) : (
        Array.from({ length: 8 }).map((_, index) => (
          <ConversationItemSkelton key={index} />
        ))
      )}
    </div>
  );
};

export default Conversations;
