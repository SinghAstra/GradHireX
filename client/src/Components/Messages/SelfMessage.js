import React from "react";

const SelfMessage = ({ message }) => {
  return (
    <div className="chat chat-end">
      <div className="chat-bubble bg-violet-400">
        <p className="font-mono text-white">{message}</p>
      </div>
    </div>
  );
};

export default SelfMessage;
