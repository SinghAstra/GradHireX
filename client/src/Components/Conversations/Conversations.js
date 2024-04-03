import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConversationItem from "./ConversationItem";
import { fetchChatsAction } from "../../Redux/actions/chatActions";
import ConversationItemSkelton from "./ConversationItemSkelton";
import Sidebar from "../Sidebar/Sidebar";
import SidebarHeader from "../Sidebar/SidebarHeader";

const Conversations = () => {
  const chats = useSelector((state) => state.chat.chats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatsAction());
  }, [dispatch]);

  return (
    <div className="overflow-y-scroll flex-1 no-scrollbar m-2">
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
