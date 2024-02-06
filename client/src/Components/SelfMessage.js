import React from "react";
import "./styles.css";

const SelfMessage = () => {
  return (
    <div className="self-message-container">
      <div className="self-message">
        <div className="message-text">This is my message</div>
        <div className="message-timeline">09:02 AM</div>
      </div>
    </div>
  );
};

export default SelfMessage;
