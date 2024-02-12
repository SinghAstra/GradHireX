import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const lightTheme = useSelector((state) => state.theme);
  return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
      <img src="/chat.png" alt="welcome-logo" className="welcome-logo" />
      <p className="welcome-text">
        View and text directly to people present in chat groups.
      </p>
    </div>
  );
};

export default Welcome;
