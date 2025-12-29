import React from "react";
import logo from "/Gaming.png";
import { Link } from "react-router";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative px-4 bg-[#0F1724]/90 backdrop-blur-md text-[#E6F0FF] overflow-hidden border-t-2 border-[#B8FF00]/10">
      <div className="absolute inset-0 bg-linear-to-br from-[#B8FF00]/25 via-transparent to-[#B8FF00]/20 blur-3xl pointer-events-none"></div>

      <div className="relative container flex flex-col justify-between gap-6 py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 z-10">
        <div className="lg:w-1/3">
          <Link
            to="/"
            rel="noopener noreferrer"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12">
              <img src={logo} alt="logo" />
            </div>
            <span className="self-center text-2xl font-semibold secondary-font">
              GameNexus<span className="text-[#B8FF00] text-3xl">.</span>
            </span>
          </Link>
          <p className="text-center lg:text-start mt-3 mr-3 text-gray-300 leading-relaxed">
            A Game Library — your portal to discovering indie games and
            supporting developers. Browse, explore, and dive into worlds crafted
            by passionate creators.
          </p>
        </div>

        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          {/* Explore */}
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-semibold text-[#B8FF00]">
              Explore
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="hover:text-[#B8FF00] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-games"
                  className="hover:text-[#B8FF00] transition"
                >
                  All Games
                </Link>
              </li>
              <li>
                <Link
                  to="/gaming-news"
                  className="hover:text-[#B8FF00] transition"
                >
                  Gaming News
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-[#B8FF00] transition"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-semibold text-[#B8FF00]">
              Account
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/my-Profile"
                  className="hover:text-[#B8FF00] transition"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/auth/login"
                  className="hover:text-[#B8FF00] transition"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/auth/register"
                  className="hover:text-[#B8FF00] transition"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="uppercase font-semibold text-[#B8FF00]">
              Resources
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-[#B8FF00] transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B8FF00] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B8FF00] transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h3 className="uppercase font-semibold text-[#B8FF00]">
              Social Media
            </h3>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://www.facebook.com/"
                className="hover:text-[#B8FF00] transition hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/"
                className="hover:text-[#B8FF00] transition hover:scale-110"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                className="hover:text-[#B8FF00] transition hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 text-sm text-center text-gray-400 border-t border-[#B8FF00]/10 relative z-10">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-[#B8FF00] font-semibold">GameNexus</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
