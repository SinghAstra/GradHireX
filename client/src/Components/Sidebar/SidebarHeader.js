import React, { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { MdGroup } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserInfoAction } from "../../Redux/actions/userAction";

const SidebarHeader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfoAction());
  }, [dispatch]);

  return (
    <div className="text-2xl text-white flex bg-neutral p-2">
      <div className="flex-1">
        <Link to="/app/profile">
          <CgProfile size={36} className="cursor-pointer" />
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <Link to="/app/users">
          <FaUsers size={28} className="cursor-pointer" />
        </Link>
        <Link to="/app/groups">
          <MdGroup size={28} className="cursor-pointer" />
        </Link>
        <Link to="/app/create-group">
          <AiOutlineUsergroupAdd size={28} className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default SidebarHeader;
