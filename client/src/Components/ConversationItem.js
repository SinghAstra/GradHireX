import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

const ConversationItem = ({ props }) => {
  const lightTheme = useSelector((state) => state.theme);
  return (
    <div className={"con-container" + (lightTheme ? "" : " dark")}>
      <div className="con-icon">{props.name[0]}</div>
      <div className={"con-title" + (lightTheme ? "" : " dark")}>
        {props.name}
      </div>
      <div className="con-lastMessage">{props.lastMessage}</div>
      <div className={"con-timeStamp" + (lightTheme ? "" : " dark")}>
        {props.timeStamp}
      </div>
    </div>
  );
};

export default ConversationItem;
