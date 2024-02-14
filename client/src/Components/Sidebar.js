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
  const lightTheme = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(toggleThemeAction());
  };
  const chats = useSelector((state) => state.chat.chats);
  useEffect(() => {
    dispatch(fetchChatsAction());
  }, [dispatch]);
  return (
    <div className="sidebar-container">
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div>
          <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
            <AccountCircle />
          </IconButton>
        </div>
        <div className="sb-header-navigation">
          <Link to="/app/users">
            <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
              <PersonAdd />
            </IconButton>
          </Link>
          <Link to="/app/groups">
            <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
              <GroupAdd />
            </IconButton>
          </Link>
          <Link to="/app/create-group">
            <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
              <AddCircle />
            </IconButton>
          </Link>
          <IconButton
            className={"icon" + (lightTheme ? "" : " dark")}
            onClick={toggleTheme}
          >
            {lightTheme ? <Nightlight /> : <LightMode />}
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton className={lightTheme ? "" : " dark"}>
          <Search />
        </IconButton>
        <input
          className={"search-box" + (lightTheme ? "" : " dark")}
          placeholder="search"
        />
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
