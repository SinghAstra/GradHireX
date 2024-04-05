import React from "react";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Welcome from "./Components/Welcome/Welcome";
import ChatArea from "./Components/ChatArea/ChatArea";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Users from "./Components/Users/Users";
import Groups from "./Components/Groups/Groups";
import CreateGroup from "./Components/Groups/CreateGroup";
import Toast from "./Components/Toast/Toast";
import { jwtDecode } from "jwt-decode";
import { logOutAction } from "./Redux/actions/userAction";

const App = () => {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  let isTokenValid;

  const checkTokenValidity = () => {
    const decodedToken = jwtDecode(token);
    let currentDate = new Date();
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      isTokenValid = false;
    } else {
      isTokenValid = true;
    }
  };

  if (token) {
    checkTokenValidity();
    if (!isTokenValid) {
      dispatch(logOutAction());
    }
  }

  if (!token) {
    return (
      <div className="h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/log-in" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/app/welcome"} />} />
          <Route path="app" element={<MainContainer />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="chat/:chatId" element={<ChatArea />} />
            <Route path="users" element={<Users />} />
            <Route path="groups" element={<Groups />} />
            <Route path="create-group" element={<CreateGroup />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Navigate to="/app/welcome" />} />
        </Routes>
        <Toast />
      </BrowserRouter>
    </div>
  );
};

export default App;
