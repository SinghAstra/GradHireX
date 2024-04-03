import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const userName = useSelector((state) => state.user.currentUser.username);
  return (
    <div className="diff aspect-[16/9] w-2/3">
      <div className="diff-item-1">
        <div className="bg-violet-400 text-primary-content text-9xl font-black flex flex-col items-center justify-center">
          <p>WELCOME!!</p>
          <p>{userName.toUpperCase()}</p>
        </div>
      </div>
      <div className="diff-item-2">
        <div className="bg-base-200 text-9xl font-black flex flex-col items-center justify-center">
          <p>WELCOME!!</p>
          <p>{userName.toUpperCase()}</p>
        </div>
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
};

export default Welcome;
