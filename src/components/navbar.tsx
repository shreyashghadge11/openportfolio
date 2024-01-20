import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="pt-4">
      <div className="container mx-auto flex justify-between border-b pb-2 w-full px-4 shadow-lg">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
        </div>

        <div className="flex items-center">
          <button
            className="text-black mr-2 px-4 py-2"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-full"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
