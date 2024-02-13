import React, { useState } from "react";
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

const Sidebar = () => {
  const lightTheme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(toggleThemeAction());
  };
  const [conversations, setConversations] = useState([
    {
      name: "Name 1",
      lastMessage: "Last Message 1",
      timeStamp: "today",
    },
    {
      name: "Name 2",
      lastMessage: "Last Message 2",
      timeStamp: "today",
    },
    {
      name: "Name 3",
      lastMessage: "Last Message 3",
      timeStamp: "today",
    },
    {
      name: "Name 4",
      lastMessage: "Last Message 4",
      timeStamp: "today",
    },
    {
      name: "Name 5",
      lastMessage: "Last Message 1",
      timeStamp: "today",
    },
    {
      name: "Name 6",
      lastMessage: "Last Message 2",
      timeStamp: "today",
    },
    {
      name: "Name 7",
      lastMessage: "Last Message 3",
      timeStamp: "today",
    },
    {
      name: "Name 8",
      lastMessage: "Last Message 4",
      timeStamp: "today",
    },
    {
      name: "Name 9",
      lastMessage: "Last Message 1",
      timeStamp: "today",
    },
    {
      name: "Name 10",
      lastMessage: "Last Message 2",
      timeStamp: "today",
    },
    {
      name: "Name 11",
      lastMessage: "Last Message 3",
      timeStamp: "today",
    },
    {
      name: "Name 12",
      lastMessage: "Last Message 4",
      timeStamp: "today",
    },
  ]);
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
        {conversations.map((conversation) => (
          <ConversationItem props={conversation} key={conversation.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
