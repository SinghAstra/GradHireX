import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex font-mono justify-between items-center py-4 px-6 shadow-lg bg-black text-white w-full">
      <div>
        <h1 className="text-2xl text-violet-400  font-semibold">
          <Link href={"/"}>Chat Web App</Link>
        </h1>
      </div>
      <div className="">
        <Link
          className="bg-black rounded-2xl py-2 px-4 border bottom-2 border-violet-400 hover:bg-violet-400 hover:text-black"
          to="/log-in"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
