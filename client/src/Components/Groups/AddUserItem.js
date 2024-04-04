import React from "react";
import UserAvatar from "../Conversations/UserAvatar";

const AddUserItem = ({ user }) => {
  return (
    <div className="flex w-full font-mono gap-2 m-1 p-1 rounded-md  hover:bg-violet-300 hover:cursor-pointer">
      <UserAvatar chatName={user.name} />
      <div className="flex-1 flex items-center justify-start">
        <p className="text-2xl text-white">{user.name}</p>
      </div>
    </div>
  );
};

export default AddUserItem;
