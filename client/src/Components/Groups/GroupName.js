import React, { useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { createGroupChatAction } from "../../Redux/actions/chatActions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const GroupName = ({ groupMemberIds }) => {
  const [groupName, setGroupName] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createGroup = () => {
    dispatch(createGroupChatAction(groupName, groupMemberIds));
    navigate("/app/welcome");
  };
  return (
    <div className="w-3/4 flex h-screen flex-col">
      <div className="flex items-center w-full  p-1 font-mono bg-neutral">
        <input
          type="text"
          placeholder="Enter group name..."
          className="w-full bg-transparent flex-1 p-2 text-white font-mono outline outline-0 focus:outline-0 text-xl "
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <div
          className=" rounded-full text-violet-400 cursor-pointer px-2 hover:text-violet-700  hover:cursor-pointer"
          onClick={() => createGroup()}
        >
          <FaCircleArrowRight size={36} />
        </div>
      </div>
    </div>
  );
};

export default GroupName;
