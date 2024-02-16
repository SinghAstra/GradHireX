import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const lightTheme = useSelector((state) => state.theme);
  const userName = useSelector((state) => state.user.currentUser.username);
  return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
      <img src="/chat.png" alt="welcome-logo" className="welcome-logo" />
      <div className="welcome-text">
        <p>Hi {userName}👋 </p>
        <p>View and text directly to people present in chat groups.</p>
      </div>
    </div>
  );
};

export default Welcome;
