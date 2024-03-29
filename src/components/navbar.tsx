import React from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logout } from "../slices/userSlice";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated, username } = useAppSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="pt-4">
      <div className="container flex justify-between w-full px-4 pb-2 mx-auto border-b shadow-lg">
        <div className="flex items-center">
          <img src={logo1} alt="Logo" className="h-10 mr-2" />
        </div>

        <div className="flex items-center">
          {isAuthenticated ? (
            <button
              className="bg-[#5E17EB] text-white px-4 py-2 rounded-full"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className="px-4 py-2 mr-2 text-black"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
              <button
                className="bg-[#5E17EB] text-white px-4 py-2 rounded-full"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Signup
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
