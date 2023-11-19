import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../store/slices/authSlice";

const theme = createTheme({
  palette: {
    // You can define custom colors for the theme here
    primary: {
      main: "#000", // Black color for the primary button
    },
    // other colors...
  },
  // other theme settings...
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(loginStart());

    try {
      // This should contain your code for making an authorization request, for example, via the API
      // If the authorization is successful:
      dispatch(loginSuccess());

      navigate("/");
    } catch (error) {
      // If an error occurs during authorization
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Log in</h1>
      <form className="w-full max-w-xs" onSubmit={handleLogin}>
        <input
          className="w-full p-2 mb-6 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
          id="email"
          type="email"
          placeholder="Email address"
          required
          autoFocus
        />
        <button
          type="submit"
          className={`w-full py-2 mb-6 text-white bg-black rounded-md ${
            isLoading && "opacity-50 cursor-not-allowed"
          }`}
          disabled={isLoading}
        >
          Continue
        </button>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="text-sm flex justify-between">
          <a href="#" className="text-primary hover:text-primary-darker">
            Forgot password?
          </a>
        </div>
        <div className="flex justify-between gap-4 mt-8">
          <button
            type="button"
            className="py-2 px-4 w-full text-center bg-white rounded-md border border-gray-300 shadow-sm"
          >
            Google
          </button>
          <button
            type="button"
            className="py-2 px-4 w-full text-center bg-white rounded-md border border-gray-300 shadow-sm"
          >
            Microsoft
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
