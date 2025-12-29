import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, NavLink, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";

import { RxAvatar } from "react-icons/rx";
import {
  IoGameControllerOutline,
  IoHomeOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

// Placeholder imports - replace with your actual imports
const logo = "/Gaming.png";
const avatar = "../assets/Image/avatar.jpg";

const Navbar = () => {
  const { Logout, user } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();

  const name = user?.displayName;
  const email = user?.email;
  const photo = user?.photoURL;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
  }, [location]);

  const handleLogout = () => {
    Logout()
      .then(() => {
        toast.success("Logout Successful");
        setIsProfileOpen(false);
      })
      .catch((e) => toast.error(e.message));
  };

  const navItems = [
    { to: "/", label: "Home", icon: IoHomeOutline },
    { to: "/all-games", label: "All Games", icon: IoGameControllerOutline },
    { to: "/gaming-news", label: "Gaming News", icon: FaRegNewspaper },
    { to: "/about-us", label: "About Us", icon: IoInformationCircleOutline },
    { to: "/my-Profile", label: "My Profile", icon: RxAvatar },
  ];

  // Animation variants
  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const mobileMenuItemVariants = {
    closed: { x: -50, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const profileDropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const logoVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="initial"
        animate="animate"
        className={`fixed top-0 left-0 right-0 text-[#E6F0FF] z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0F1724]/95 backdrop-blur-xl shadow-2xl shadow-[#B8FF00]/20 border-b-2 border-[#B8FF00]/30"
            : "bg-[#0F1724]/70 backdrop-blur-md border-b border-[#B8FF00]/10"
        }`}
      >
        {/* Animated background gradient */}
        <motion.div
          animate={{
            background: [
              "linear-gradient(90deg, rgba(184, 255, 0, 0.05) 0%, transparent 50%, rgba(184, 255, 0, 0.05) 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(184, 255, 0, 0.05) 50%, transparent 100%)",
              "linear-gradient(90deg, rgba(184, 255, 0, 0.05) 0%, transparent 50%, rgba(184, 255, 0, 0.05) 100%)",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 pointer-events-none"
        />

        {/* Animated glow effect on scroll */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B8FF00]/10 to-transparent blur-xl pointer-events-none"
            />
          )}
        </AnimatePresence>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left: Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex items-center gap-3"
            >
              <Link to="/" className="flex gap-2 items-center group">
                <motion.div
                  variants={logoVariants}
                  initial="initial"
                  animate="animate"
                  className="relative"
                >
                  <motion.img
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-[45px] md:w-[50px] lg:w-[60px] drop-shadow-[0_0_15px_rgba(184,255,0,0.5)]"
                    src={logo}
                    alt="logo"
                  />
                  {/* Animated ring around logo */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 border-2 border-[#B8FF00] rounded-full"
                  />
                </motion.div>

                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-bold secondary-font text-xl md:text-2xl hidden xl:block"
                >
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    GameNexus
                  </span>
                  <motion.span
                    animate={{
                      color: ["#B8FF00", "#9DE600", "#B8FF00"],
                      textShadow: [
                        "0 0 10px rgba(184, 255, 0, 0.5)",
                        "0 0 20px rgba(184, 255, 0, 0.8)",
                        "0 0 10px rgba(184, 255, 0, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="text-3xl"
                  >
                    .
                  </motion.span>
                </motion.span>
              </Link>
            </motion.div>

            {/* Center: Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.to;

                  return (
                    <motion.li
                      key={item.to}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `relative px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-all duration-300 group ${
                            isActive
                              ? "text-[#B8FF00]"
                              : "text-gray-300 hover:text-[#B8FF00]"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Icon
                                size={18}
                                className={
                                  isActive ? "text-[#B8FF00]" : "text-gray-400"
                                }
                              />
                            </motion.div>
                            <span>{item.label}</span>

                            {/* Active indicator */}
                            {isActive && (
                              <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-[#B8FF00]/10 rounded-lg border border-[#B8FF00]/30"
                                initial={false}
                                transition={{
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 30,
                                }}
                              />
                            )}

                            {/* Hover glow effect */}
                            <motion.div
                              className="absolute inset-0 bg-[#B8FF00]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              whileHover={{
                                boxShadow: "0 0 20px rgba(184, 255, 0, 0.2)",
                              }}
                            />
                          </>
                        )}
                      </NavLink>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* Right: Auth Buttons / User Profile */}
            <div className="flex items-center gap-3">
              {user ? (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="relative"
                  >
                    <motion.div
                      animate={
                        isProfileOpen
                          ? {
                              boxShadow: [
                                "0 0 0 0 rgba(184, 255, 0, 0.7)",
                                "0 0 0 10px rgba(184, 255, 0, 0)",
                              ],
                            }
                          : {}
                      }
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="p-0.5 rounded-full border-2 border-[#B8FF00]/70 hover:border-[#B8FF00] transition-all duration-300 cursor-pointer"
                    >
                      <img
                        className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover"
                        src={photo || avatar}
                        alt="User Avatar"
                      />
                    </motion.div>

                    {/* Online indicator */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="absolute bottom-0 right-0 w-3 h-3 bg-[#B8FF00] rounded-full border-2 border-[#0F1724]"
                    />
                  </motion.button>

                  {/* Profile Dropdown */}
                  <AnimatePresence>
                    {isProfileOpen && (
                      <>
                        {/* Backdrop */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onClick={() => setIsProfileOpen(false)}
                          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                        />

                        {/* Dropdown */}
                        <motion.div
                          variants={profileDropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute right-0 mt-4 w-72 bg-gradient-to-br from-[#0F1724] via-[#1a2332] to-[#0F1724] backdrop-blur-xl rounded-2xl p-6 shadow-2xl border-2 border-[#B8FF00]/30 z-50"
                        >
                          {/* Animated background pattern */}
                          <motion.div
                            animate={{
                              backgroundPosition: ["0% 0%", "100% 100%"],
                            }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute inset-0 opacity-5 rounded-2xl"
                            style={{
                              backgroundImage:
                                "linear-gradient(45deg, #B8FF00 25%, transparent 25%), linear-gradient(-45deg, #B8FF00 25%, transparent 25%)",
                              backgroundSize: "20px 20px",
                            }}
                          />

                          <div className="relative z-10">
                            {/* User Info */}
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-center mb-5 pb-5 border-b border-[#B8FF00]/20"
                            >
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-[#B8FF00]/50 p-0.5"
                              >
                                <img
                                  src={photo || avatar}
                                  alt="avatar"
                                  className="w-full h-full rounded-full object-cover"
                                />
                              </motion.div>
                              <h2 className="font-bold text-lg text-white">
                                {name || "User"}
                              </h2>
                              <p className="text-xs text-gray-400 mt-1">
                                {email}
                              </p>
                            </motion.div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                              >
                                <Link
                                  to="/my-Profile"
                                  className="w-full btn bg-[#B8FF00]/10 hover:bg-[#B8FF00]/20 text-[#B8FF00] border-[#B8FF00]/30 hover:border-[#B8FF00] transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                                >
                                  <RxAvatar size={18} />
                                  View Profile
                                </Link>
                              </motion.div>

                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                              >
                                <button
                                  onClick={handleLogout}
                                  className="w-full btn bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border-red-500/30 hover:border-red-500 transition-all duration-300 font-semibold"
                                >
                                  Logout
                                </button>
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/auth/login"
                      className="btn btn-sm md:btn-md bg-[#B8FF00]/10 hover:bg-[#B8FF00]/20 text-[#B8FF00] border-[#B8FF00]/30 hover:border-[#B8FF00] font-semibold transition-all duration-300"
                    >
                      Login
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/auth/register"
                      className="btn btn-sm md:btn-md bg-gradient-to-r from-[#B8FF00] to-[#9DE600] text-[#0F1724] hover:from-[#9DE600] hover:to-[#B8FF00] border-none font-bold transition-all duration-300 shadow-lg shadow-[#B8FF00]/30"
                    >
                      Register
                    </Link>
                  </motion.div>
                </motion.div>
              )}

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg border-2 border-[#B8FF00]/30 hover:border-[#B8FF00] hover:bg-[#B8FF00]/10 transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiX size={24} className="text-[#B8FF00]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiMenuAlt3 size={24} className="text-[#B8FF00]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-[#0F1724] via-[#1a2332] to-[#0F1724] shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Animated background */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #B8FF00 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />

              <div className="relative z-10 p-6">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between mb-8 pb-6 border-b-2 border-[#B8FF00]/20"
                >
                  <div className="flex items-center gap-3">
                    <motion.img
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      src={logo}
                      alt="logo"
                      className="w-12 drop-shadow-[0_0_10px_rgba(184,255,0,0.5)]"
                    />
                    <span className="font-bold text-xl secondary-font">
                      GameNexus
                      <span className="text-[#B8FF00] text-2xl">.</span>
                    </span>
                  </div>
                </motion.div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.to;

                    return (
                      <motion.div
                        key={item.to}
                        variants={mobileMenuItemVariants}
                        custom={index}
                      >
                        <NavLink
                          to={item.to}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                            isActive
                              ? "bg-[#B8FF00]/20 text-[#B8FF00] border-2 border-[#B8FF00]/50 shadow-lg shadow-[#B8FF00]/20"
                              : "text-gray-300 hover:bg-[#B8FF00]/10 hover:text-[#B8FF00] border-2 border-transparent"
                          }`}
                        >
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Icon size={20} />
                          </motion.div>
                          <span>{item.label}</span>
                          {isActive && (
                            <motion.div
                              layoutId="mobileBubble"
                              className="ml-auto w-2 h-2 bg-[#B8FF00] rounded-full"
                              initial={false}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                              }}
                            />
                          )}
                        </NavLink>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* User Info / Auth Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-6 border-t-2 border-[#B8FF00]/20"
                >
                  {user ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-[#B8FF00]/5 rounded-xl border border-[#B8FF00]/20">
                        <img
                          src={photo || avatar}
                          alt="avatar"
                          className="w-12 h-12 rounded-full border-2 border-[#B8FF00]/50"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-white truncate">
                            {name || "User"}
                          </p>
                          <p className="text-xs text-gray-400 truncate">{email}</p>
                        </div>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full btn bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border-red-500/30 hover:border-red-500 transition-all duration-300"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Link
                        to="/auth/login"
                        className="w-full btn bg-[#B8FF00]/10 hover:bg-[#B8FF00]/20 text-[#B8FF00] border-[#B8FF00]/30 hover:border-[#B8FF00]"
                      >
                        Login
                      </Link>
                      <Link
                        to="/auth/register"
                        className="w-full btn bg-gradient-to-r from-[#B8FF00] to-[#9DE600] text-[#0F1724] border-none font-bold"
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;