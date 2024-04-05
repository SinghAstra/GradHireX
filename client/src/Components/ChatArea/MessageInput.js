import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { sendMessageAction } from "../../Redux/actions/messageAction";

const MessageInput = ({ chatId, socket }) => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleMessageSent = () => {
    if (message.trim().length > 0) {
      dispatch(sendMessageAction(chatId, message));
      setMessage("");
    }
  };

  return (
    <div className="bg-black border-violet-400 border-2 rounded-xl flex">
      <input
        className="rounded-l-xl flex-1 p-2  text-white font-mono outline outline-0 focus:outline-0 text-xl"
        placeholder="Type Your Message here..."
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            handleMessageSent();
          }
        }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div
        onClick={handleMessageSent}
        className="flex items-center justify-center px-2"
      >
        <SendIcon className="text-violet-400 text-3xl" />
      </div>
    </div>
  );
};

export default MessageInput;
