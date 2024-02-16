import React from "react";

const OtherMessage = ({ message }) => {
  return (
    <div className="other-message-container">
      <div className="other-message-icon ">R</div>
      <div className="other-message">
        <div className="other-message-username">Random User</div>
        <div className="message-text">{message}</div>
        <div className="message-timeline">09:02 AM</div>
      </div>
    </div>
  );
};

export default OtherMessage;
