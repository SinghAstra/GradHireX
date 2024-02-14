import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ConversationItem = ({ props }) => {
  const lightTheme = useSelector((state) => state.theme);
  const currentUserId = useSelector((state) => state.user.currentUser._id);
  let chatName;
  const navigate = useNavigate();
  if (props.isGroupChat) {
    chatName = props.chatName;
  } else {
    const otherUser = props.users.find((user) => user._id !== currentUserId);
    chatName = otherUser.name;
  }
  return (
    <motion.div
      className={"con-container" + (lightTheme ? "" : " dark")}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/app/chat/${props._id}&${chatName}`)}
    >
      <div className="con-icon">{chatName[0]}</div>
      <div className={"con-title" + (lightTheme ? "" : " dark")}>
        {chatName}
      </div>
      <div className="con-lastMessage">
        {props.lastMessage === undefined
          ? " Start a conversation !"
          : props.lastMessage.content}
      </div>
      <div className={"con-timeStamp" + (lightTheme ? "" : " dark")}>
        11:43 PM
      </div>
    </motion.div>
  );
};

export default ConversationItem;
