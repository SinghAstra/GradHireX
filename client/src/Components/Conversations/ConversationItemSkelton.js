import React from "react";

const ConversationItemSkelton = () => {
  return (
    <div class="w-full my-2 mx-1 flex bg-black p-2 rounded-xl gap-2">
      <div class="skeleton w-12 h-12 rounded-full shrink-0"></div>
      <div class="flex flex-col gap-4 flex-1">
        <div class="skeleton h-4 w-20"></div>
        <div class="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

export default ConversationItemSkelton;
