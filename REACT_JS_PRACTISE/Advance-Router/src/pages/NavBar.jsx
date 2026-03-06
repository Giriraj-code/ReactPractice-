import React from "react";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-500">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-red-600 font-medium rounded-md p-2 m-5 active:scale-95 cursor-pointer"
      >
        Return to Home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-red-600 font-medium rounded-md p-2 pl-4 pr-4 active:scale-95 cursor-pointer"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-red-600 font-medium rounded-md m-5 p-2 pl-4 pr-4 active:scale-95 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default NavBar;
