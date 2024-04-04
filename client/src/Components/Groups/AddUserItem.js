import React from "react";
import UserAvatar from "../Conversations/UserAvatar";

const AddUserItem = ({ user }) => {
  return (
    // <div className="flex w-full font-mono gap-2 m-1 p-1 rounded-md  hover:bg-violet-300 hover:cursor-pointer form-control">
    //   <div className="label">
    // <UserAvatar chatName={user.name} />
    //     <div className="flex-1 flex items-center justify-start ">
    //       <p className="text-2xl text-white label-text">{user.name}</p>
    //     </div>
    //     <input
    //       type="checkbox"
    //       checked="checked"
    //       class="checkbox checkbox-primary"
    //     />
    //   </div>
    // </div>
    <div className=" w-full font-mono  m-1 p-1 rounded-md  hover:bg-violet-300 form-control">
      <label className="label cursor-pointer flex gap-2">
        <UserAvatar chatName={user.name} />
        <span className="label-text flex-1 flex justify-start items-center">
          {user.name}
        </span>
        <input type="checkbox" className="checkbox checkbox-primary" />
      </label>
    </div>
  );
};

export default AddUserItem;
