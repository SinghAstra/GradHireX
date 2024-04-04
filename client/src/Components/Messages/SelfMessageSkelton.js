import React from "react";

const SelfMessageSkelton = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-bubble bg-violet-300 skeleton">
        <div className="h-8 w-32"></div>
      </div>
    </div>
  );
};

export default SelfMessageSkelton;
