import React from "react";

const SelfMessage = ({ message }) => {
  return (
    <div class="chat chat-end">
      <div class="chat-bubble bg-violet-400">
        <p className="font-mono text-white">{message}</p>
      </div>
    </div>
  );
};

export default SelfMessage;
