import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const ConversationItem = ({ props }) => {
  const lightTheme = useSelector((state) => state.theme);
  return (
    <motion.div
      className={"con-container" + (lightTheme ? "" : " dark")}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="con-icon">{props.name[0]}</div>
      <div className={"con-title" + (lightTheme ? "" : " dark")}>
        {props.name}
      </div>
      <div className="con-lastMessage">{props.lastMessage}</div>
      <div className={"con-timeStamp" + (lightTheme ? "" : " dark")}>
        {props.timeStamp}
      </div>
    </motion.div>
  );
};

export default ConversationItem;
