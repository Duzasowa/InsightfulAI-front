import React from "react";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleExit = async (event) => {
    // to do
  };

  return (
    <nav className="bg-black px-4 py-2 flex justify-between items-center">
      <h1 className="text-white text-xl">Insightful AI</h1>

      <div className="flex-grow flex justify-end items-center pr-12">
        <Link to={"/"} className="text-white px-4 py-2 hover:bg-gray-700">
          Home
        </Link>
        <Link
          to={"/financial-records"}
          className="text-white px-4 py-2 hover:bg-gray-700"
        >
          Financial Records
        </Link>
      </div>

      <button
        onClick={handleExit}
        className="text-white px-4 py-2 hover:bg-gray-700"
      >
        EXIT
      </button>
    </nav>
  );
};

export default Navbar;
