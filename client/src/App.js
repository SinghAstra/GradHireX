import React from "react";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Auth from "./Components/Auth";
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import OnlineUsers from "./Components/OnlineUsers";
import OnlineGroups from "./Components/OnlineGroups";
import CreateGroup from "./Components/CreateGroup";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "./Redux/actions/notificationAction";
import Notification from "./Components/Notification";

const App = () => {
  const user = useSelector((state) => state.user);
  const { open, message, severity } = useSelector(
    (state) => state.notification
  );
  const dispatch = useDispatch();
  const handleCloseNotification = () => {
    dispatch(hideNotification());
  };
  return (
    <div className="App">
      <Routes>
        {/* Routes for authenticated users */}
        {user && <Route path="/" element={<Navigate to="/app/welcome" />} />}
        {user && (
          <Route path="app" element={<MainContainer />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="chat" element={<ChatArea />} />
            <Route path="users" element={<OnlineUsers />} />
            <Route path="groups" element={<OnlineGroups />} />
            <Route path="create-group" element={<CreateGroup />} />
          </Route>
        )}

        {/* Route for non-authenticated users */}
        {!user && <Route path="/" element={<Auth />} />}

        {/* Redirect to login for unauthorized sub-routes */}
        {!user && <Route path="*" element={<Navigate to="/" />} />}
      </Routes>
      <Notification
        open={open}
        onClose={() => {
          handleCloseNotification();
        }}
        message={message}
        severity={severity}
      />
    </div>
  );
};

export default App;
