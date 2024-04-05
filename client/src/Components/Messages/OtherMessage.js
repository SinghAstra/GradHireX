import React from "react";

const OtherMessage = ({ message }) => {
  return (
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-neutral">
        <p className="font-mono text-white">{message}</p>
      </div>
    </div>
  );
};

export default OtherMessage;
