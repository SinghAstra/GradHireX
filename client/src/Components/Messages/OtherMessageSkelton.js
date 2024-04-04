import React from "react";

const OtherMessageSkelton = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-neutral skeleton">
        <div className="h-8 w-32"></div>
      </div>
    </div>
  );
};

export default OtherMessageSkelton;
