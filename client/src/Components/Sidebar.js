import React, { useEffect, useState } from "react";
import "./styles.css";
import { IconButton } from "@mui/material";
import {
  AccountCircle,
  PersonAdd,
  GroupAdd,
  AddCircle,
  Nightlight,
  Search,
  LightMode,
} from "@mui/icons-material";
import ConversationItem from "./ConversationItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeAction } from "../Redux/actions/themeAction";
import { Link } from "react-router-dom";
import { fetchChatsAction } from "../Redux/actions/chatActions";

const Sidebar = () => {
  const dispatch = useDispatch();

  const chats = useSelector((state) => state.chat.chats);
  useEffect(() => {
    dispatch(fetchChatsAction());
  }, [dispatch]);
  return (
    <div className="sidebar-container">
      <div className={"sb-header"}>
        <div>
          <IconButton className={"icon"}>
            <AccountCircle />
          </IconButton>
        </div>
        <div className="sb-header-navigation">
          <Link to="/app/users">
            <IconButton className={"icon"}>
              <PersonAdd />
            </IconButton>
          </Link>
          <Link to="/app/groups">
            <IconButton className={"icon"}>
              <GroupAdd />
            </IconButton>
          </Link>
          <Link to="/app/create-group">
            <IconButton className={"icon"}>
              <AddCircle />
            </IconButton>
          </Link>
        </div>
      </div>
      <div className={"sb-search"}>
        <IconButton>
          <Search />
        </IconButton>
        <input className={"search-box"} placeholder="search" />
      </div>
      <div className="sb-conversation">
        {chats.map((conversation) => (
          <ConversationItem props={conversation} key={conversation._id} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
