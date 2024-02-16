import React from "react";
import "./styles.css";

const SelfMessage = ({ message }) => {
  return (
    <div className="self-message-container">
      <div className="self-message">
        <div className="message-text">{message}</div>
        <div className="message-timeline">09:02 AM</div>
      </div>
    </div>
  );
};

export default SelfMessage;
