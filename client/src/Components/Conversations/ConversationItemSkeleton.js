import React from "react";

const ConversationItemSkeleton = () => {
  return (
    <div className="w-full my-1 flex bg-black p-2 rounded-xl gap-2">
      <div className="skeleton w-12 h-12 rounded-full shrink-0"></div>
      <div className="flex flex-col gap-4 flex-1">
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

export default ConversationItemSkeleton;
