import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  let userName = useSelector((state) => state.user.user?.username);

  userName += " ";
  userName = userName.slice(0, userName.indexOf(" "));
  return (
    <div className="diff aspect-[16/9] w-3/4">
      <div className="diff-item-1">
        <div className="bg-violet-400 text-primary-content text-9xl font-black flex flex-col items-center justify-center">
          <p>WELCOME!!</p>
          {userName !== undefined && <p>{userName?.toUpperCase()}</p>}
        </div>
      </div>
      <div className="diff-item-2">
        <div className="bg-base-200 text-9xl font-black flex flex-col items-center justify-center">
          <p>WELCOME!!</p>
          {userName !== undefined && <p>{userName?.toUpperCase()}</p>}
        </div>
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
};

export default Welcome;
