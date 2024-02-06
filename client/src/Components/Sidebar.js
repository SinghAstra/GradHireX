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
} from "@mui/icons-material";
import ConversationItem from "./ConversationItem";

const Sidebar = () => {
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
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAdd />
          </IconButton>
          <IconButton>
            <GroupAdd />
          </IconButton>
          <IconButton>
            <AddCircle />
          </IconButton>
          <IconButton>
            <Nightlight />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <Search />
        </IconButton>
        <input className="search-box" placeholder="search" />
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
