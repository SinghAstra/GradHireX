import React from "react";

const ChatAreaHeaderSkeleton = () => {
  return (
    <div className="p-2">
      <div className="w-full p-2 gap-2 flex rounded-xl bg-black border-violet-400 border-2">
        <div className="skeleton w-12 h-12 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatAreaHeaderSkeleton;
