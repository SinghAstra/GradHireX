import React from "react";

const UserAvatar = ({ chatName }) => {
  return (
    <div className="avatar placeholder">
      <div className="bg-neutral text-neutral-content rounded-full w-12">
        <span className="text-2xl">{chatName[0].toUpperCase()}</span>
      </div>
    </div>
  );
};

export default UserAvatar;
