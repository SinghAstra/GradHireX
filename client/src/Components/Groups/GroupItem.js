import React from "react";
import UserAvatar from "../Conversations/UserAvatar";
import { useDispatch, useSelector } from "react-redux";
import {
  exitGroupChatAction,
  joinGroupChatAction,
} from "../../Redux/actions/groupActions";

const GroupItem = ({ group }) => {
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.user.currentUser._id);
  return (
    <div className="flex w-full font-mono gap-2 m-1 p-1 rounded-md ">
      <UserAvatar chatName={group.chatName} />
      <div className="flex-1 flex items-center justify-start">
        <p className="text-2xl text-white">{group.chatName}</p>
      </div>
      <div className="flex items-center justify-center">
        {group.users.some((user) => user._id === currentUserId) ? (
          <button
            className="bg-black rounded-2xl py-2 px-4 border bottom-2 border-violet-400 hover:bg-violet-400 hover:text-black"
            onClick={() => dispatch(exitGroupChatAction(group._id))}
          >
            Exit
          </button>
        ) : (
          <button
            className="bg-black rounded-2xl py-2 px-4 border bottom-2 border-violet-400 hover:bg-violet-400 hover:text-black"
            onClick={() => dispatch(joinGroupChatAction(group._id))}
          >
            Join
          </button>
        )}
      </div>
    </div>
  );
};

export default GroupItem;
