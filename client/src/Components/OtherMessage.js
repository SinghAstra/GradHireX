import React from "react";

const OtherMessage = ({ message }) => {
  return (
    <div class="chat chat-start">
      <div class="chat-bubble chat-bubble-neutral">
        <p className="font-mono text-white">{message}</p>
      </div>
    </div>
  );
};

export default OtherMessage;
