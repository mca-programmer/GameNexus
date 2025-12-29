import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router";

import { RxAvatar } from "react-icons/rx";
import {
  IoGameControllerOutline,
  IoHomeOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";

// Placeholder imports - replace with your actual imports
const logo = "/Gaming.png";
const avatar = "../assets/Image/avatar.jpg";

const Navbar = () => {
  const { Logout, user } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  const name = user?.displayName;
  const email = user?.email;
  const photo = user?.photoURL;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    Logout()
      .then(() => toast.success("Logout Successful"))
      .catch((e) => toast.error(e.message));
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:text-[#B8FF00] font-medium">
          <IoHomeOutline size={17} />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/all-games" className="hover:text-[#B8FF00] font-medium">
          <IoGameControllerOutline size={20} /> All Games
        </NavLink>
      </li>
      <li>
        <NavLink to="/gaming-news" className="hover:text-[#B8FF00] font-medium">
          <FaRegNewspaper size={21} />
          Gaming News
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us" className="hover:text-[#B8FF00] font-medium">
          <IoInformationCircleOutline size={21} />
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-Profile" className="hover:text-[#B8FF00] font-medium">
          <RxAvatar size={20} /> My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-[#0F1724]/70 backdrop-blur-md text-[#E6F0FF] shadow-md border-b border-[#B8FF00]/10 z-50 transition-all duration-300  ${
        isScrolled ? "bg-[#0F1724]/90 shadow-lg shadow-[#B8FF00]/10 " : ""
      }`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#B8FF00]/25 via-transparent to-[#B8FF00]/20 blur-3xl"></div>

      <div className="navbar container mx-auto relative z-10">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#0F1724]/90 backdrop-blur-lg rounded-box mt-3 w-52 p-2 shadow-lg border border-[#B8FF00]/20"
            >
              {links}
            </ul>
          </div>

          <Link to="/" className="flex gap-2 items-center">
            <img
              className="w-[50px] md:w-[55px] lg:w-[60px]"
              src={logo}
              alt="logo"
            />
            <span className="font-bold secondary-font text-2xl hidden xl:block">
              GameNexus
              <span className="text-[#B8FF00] text-3xl">.</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-2">
          {user ? (
            <div className="dropdown dropdown-end 2xl:dropdown-center z-50">
              <div
                tabIndex={0}
                role="button"
                className="p-0.5 shadow-lg hover:shadow-[0_0_10px_#B8FF00] transition-all duration-300 hover:scale-[1.05] rounded-full border-2 border-[#B8FF00]/70 cursor-pointer"
              >
                <img
                  className="w-11 h-11 rounded-full object-cover"
                  src={photo || avatar}
                  alt="User Avatar"
                />
              </div>

              <div
                tabIndex={0}
                className="dropdown-content menu bg-[#0F1724]/95 backdrop-blur-lg rounded-box p-5 min-w-52 shadow-lg border border-[#B8FF00]/20"
              >
                <div className="text-center space-y-1 mb-3">
                  <h2 className="font-semibold text-lg">{name || "User"}</h2>
                  <p className="text-sm text-gray-400">{email}</p>
                </div>

                <Link
                  to="/my-Profile"
                  className="btn btn-soft btn-success hover:bg-green-800 text-[#B8FF00] mb-2"
                >
                  View Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="btn btn-soft btn-error hover:bg-red-600 text-red-600 hover:text-white font-semibold"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="btn btn-soft md:text-base btn-success hover:bg-green-800 hover:border-green-800 text-[#B8FF00]"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-soft md:text-base btn-warning hover:bg-yellow-800 hover:border-yellow-800 text-[#E6F0FF]"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
