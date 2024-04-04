import React from "react";
import UserAvatar from "../Conversations/UserAvatar";

const AddUserItem = ({ user, handleMemberToggle, isSelected }) => {
  return (
    <div className=" w-full font-mono  m-1 p-1 rounded-md  hover:bg-violet-300 form-control">
      <label className="label cursor-pointer flex gap-2">
        <UserAvatar chatName={user.name} />
        <span className="label-text flex-1 flex justify-start items-center">
          {user.name}
        </span>
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          onChange={() => handleMemberToggle(user._id)}
          checked={isSelected}
        />
      </label>
    </div>
  );
};

export default AddUserItem;
