import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const location = useLocation();

  const isSignUpPage = location.pathname === "/sign-up";
  const buttonText = isSignUpPage ? "Log In" : "Sign Up";
  const buttonUrl = isSignUpPage ? "/log-in" : "/sign-up";

  return (
    <div className="flex font-mono justify-between items-center py-4 px-6 shadow-lg bg-black text-white w-full">
      <div>
        <h1 className="text-2xl text-violet-400  font-semibold">
          <Link to={"/"}>Chat Web App</Link>
        </h1>
      </div>
      <div className="">
        {user ? (
          <Link
            className="w-10 h-10 rounded-full border-2 border-violet-400 flex items-center justify-center text-white hover:text-black hover:bg-violet-400 text-2xl"
            to={"/app/profile"}
          >
            {user.username[0]}
          </Link>
        ) : (
          <Link
            className="bg-black rounded-2xl py-2 px-4 border bottom-2 border-violet-400 hover:bg-violet-400 hover:text-black"
            to={buttonUrl}
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
