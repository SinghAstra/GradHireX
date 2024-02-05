import React from "react";
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
        <ConversationItem />
      </div>
    </div>
  );
};

export default Sidebar;
