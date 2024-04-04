import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import AddUserItem from "./AddUserItem";

const CreateGroup = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const chats = useSelector((state) => state.chat.chats);
  const userConversationChats = chats.filter((chat) => !chat.isGroupChat);
  const currentUserId = useSelector((state) => state.user.currentUser._id);
  const users = userConversationChats.map((chat) => {
    const otherUser = chat.users.find((user) => user._id !== currentUserId);
    return otherUser;
  });
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log("filteredUsers", filteredUsers);
  return (
    <div className="w-3/4 flex h-screen flex-col">
      <div className="flex items-center w-full  p-0.5 font-mono bg-neutral">
        <div className="flex items-center w-full p-0.5 flex-1">
          <div className="px-3">
            <CiSearch size={32} />
          </div>
          <input
            type="text"
            placeholder="Search group member..."
            className="w-full bg-transparent flex-1 p-2 text-white font-mono outline outline-0 focus:outline-0 text-xl "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className=" rounded-full text-violet-400 cursor-pointer px-2 hover:text-violet-700  hover:cursor-pointer">
          <FaCircleArrowRight size={36} />
        </div>
      </div>

      <div className="p-2 flex-1 overflow-y-scroll">
        <ul className="menu menu-md bg-base-200 w-full rounded-box">
          {filteredUsers.map((user) => (
            <AddUserItem user={user} key={user._id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateGroup;
