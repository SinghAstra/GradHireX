import React from "react";
import OtherMessageSkelton from "../Messages/OtherMessageSkelton";
import SelfMessageSkelton from "../Messages/SelfMessageSkelton";

const ChatAreaMessagesSkeleton = () => {
  return (
    <div className="flex-1 overflow-auto flex-col-reverse flex p-2 no-scrollbar">
      <OtherMessageSkelton />
      <SelfMessageSkelton />
      <OtherMessageSkelton />
      <SelfMessageSkelton />
      <OtherMessageSkelton />
      <SelfMessageSkelton />
      <OtherMessageSkelton />
      <SelfMessageSkelton />
      <OtherMessageSkelton />
      <SelfMessageSkelton />
    </div>
  );
};

export default ChatAreaMessagesSkeleton;
