import React from "react";
import UserAvatar from "../Conversations/UserAvatar";
import { useDispatch } from "react-redux";
import { createChatAction } from "../../Redux/actions/chatActions";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const createChat = (userId) => {
    dispatch(createChatAction(userId));
  };
  return (
    <div
      className="flex w-full font-mono gap-2 m-1 p-1 rounded-md  hover:bg-violet-300 hover:cursor-pointer"
      onClick={() => createChat(user._id)}
    >
      <UserAvatar chatName={user.name} />
      <div className="flex-1 flex items-center justify-start">
        <p className="text-2xl text-white">{user.name}</p>
      </div>
    </div>
  );
};

export default UserItem;
