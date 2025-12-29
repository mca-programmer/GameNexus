import React from "react";
import logo from "/Gaming.png";
import { Link } from "react-router";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaGamepad, FaHeart } from "react-icons/fa";
import { motion } from "motion/react";
import {
  IoGameControllerOutline,
  IoRocketOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const iconHoverVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  const logoFloatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const socialLinks = [
    { icon: FaFacebook, url: "https://www.facebook.com/", label: "Facebook" },
    { icon: FaXTwitter, url: "https://x.com/", label: "Twitter" },
    { icon: FaInstagram, url: "https://www.instagram.com/", label: "Instagram" },
  ];

  const exploreLinks = [
    { to: "/", label: "Home" },
    { to: "/all-games", label: "All Games" },
    { to: "/gaming-news", label: "Gaming News" },
    { to: "/about-us", label: "About Us" },
  ];

  const accountLinks = [
    { to: "/my-Profile", label: "My Profile" },
    { to: "/auth/login", label: "Login" },
    { to: "/auth/register", label: "Register" },
  ];

  const resourceLinks = [
    { href: "#", label: "Help Center" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
  ];

  const features = [
    {
      icon: IoGameControllerOutline,
      title: "10,000+",
      subtitle: "Games Available",
    },
    {
      icon: IoRocketOutline,
      title: "Fast",
      subtitle: "Download Speed",
    },
    {
      icon: IoShieldCheckmarkOutline,
      title: "100%",
      subtitle: "Secure Platform",
    },
  ];

  return (
    <footer className="relative px-4 bg-gradient-to-br from-[#0F1724] via-[#1a2332] to-[#0F1724] text-[#E6F0FF] overflow-hidden border-t-2 border-[#B8FF00]/30">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.08, 0.03],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#B8FF00] rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.08, 0.03],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#B8FF00] rounded-full blur-3xl pointer-events-none"
      />

      {/* Animated Grid Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#B8FF00 1px, transparent 1px), linear-gradient(90deg, #B8FF00 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Stats/Features Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto py-8 border-b border-[#B8FF00]/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-4 p-4 bg-[#B8FF00]/5 rounded-xl border border-[#B8FF00]/20 hover:border-[#B8FF00]/50 hover:shadow-lg hover:shadow-[#B8FF00]/20 transition-all duration-300 group"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="p-3 bg-[#B8FF00]/10 rounded-full group-hover:bg-[#B8FF00]/20 transition-all"
                >
                  <Icon className="text-[#B8FF00] text-2xl" />
                </motion.div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-400">{feature.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative container flex flex-col justify-between gap-8 py-12 mx-auto lg:flex-row z-10"
      >
        {/* Brand Section */}
        <motion.div variants={itemVariants} className="lg:w-1/3 space-y-6">
          <Link
            to="/"
            rel="noopener noreferrer"
            className="flex justify-center lg:justify-start items-center space-x-3 group"
          >
            <motion.div
              variants={logoFloatVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={logo}
                alt="logo"
                className="w-14 h-14 drop-shadow-[0_0_15px_rgba(184,255,0,0.5)]"
              />
              {/* Rotating ring */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 border-2 border-[#B8FF00]/30 rounded-full"
              />
            </motion.div>
            <span className="self-center text-2xl font-bold secondary-font group-hover:text-[#B8FF00] transition-colors">
              GameNexus
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
            </span>
          </Link>

          <motion.p
            variants={itemVariants}
            className="text-center lg:text-start text-gray-300 leading-relaxed max-w-md"
          >
            A Game Library — your portal to discovering indie games and
            supporting developers. Browse, explore, and dive into worlds crafted
            by passionate creators.
          </motion.p>

          {/* Newsletter/CTA Section */}
          <motion.div
            variants={itemVariants}
            className="p-4 bg-[#B8FF00]/5 rounded-xl border border-[#B8FF00]/20"
          >
            <h4 className="font-semibold text-[#B8FF00] mb-2 text-center lg:text-start">
              Stay Connected
            </h4>
            <p className="text-sm text-gray-400 text-center lg:text-start">
              Join our community and get the latest updates on new games and
              features.
            </p>
          </motion.div>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 text-sm gap-x-8 gap-y-10 lg:w-2/3 sm:grid-cols-4"
        >
          {/* Explore */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="tracking-wide uppercase font-bold text-[#B8FF00] flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FaGamepad className="text-lg" />
              </motion.div>
              Explore
            </h3>
            <ul className="space-y-2">
              {exploreLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-[#B8FF00] transition-colors flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-[#B8FF00] group-hover:w-2 transition-all duration-300"
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Account */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="tracking-wide uppercase font-bold text-[#B8FF00]">
              Account
            </h3>
            <ul className="space-y-2">
              {accountLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-[#B8FF00] transition-colors flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-[#B8FF00] group-hover:w-2 transition-all duration-300"
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="uppercase font-bold text-[#B8FF00]">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#B8FF00] transition-colors flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-[#B8FF00] group-hover:w-2 transition-all duration-300"
                    />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="uppercase font-bold text-[#B8FF00]">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={iconHoverVariants}
                    initial="rest"
                    whileHover="hover"
                    className="p-3 bg-[#B8FF00]/10 rounded-lg border border-[#B8FF00]/30 hover:border-[#B8FF00] hover:bg-[#B8FF00]/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="text-[#B8FF00] text-xl" />
                  </motion.a>
                );
              })}
            </div>

            {/* Additional social info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-4 p-3 bg-[#B8FF00]/5 rounded-lg border border-[#B8FF00]/20"
            >
              <p className="text-xs text-gray-400">
                Follow us for daily gaming updates and exclusive content!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-6 text-sm text-center border-t border-[#B8FF00]/20 z-10"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-[#B8FF00] font-bold">GameNexus</span>. All
            rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-gray-400"
          >
            Made with
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
                color: ["#ef4444", "#dc2626", "#ef4444"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            by GameNexus Team
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 text-xs"
          >
            <a
              href="#"
              className="text-gray-400 hover:text-[#B8FF00] transition-colors"
            >
              Privacy
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#"
              className="text-gray-400 hover:text-[#B8FF00] transition-colors"
            >
              Terms
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#"
              className="text-gray-400 hover:text-[#B8FF00] transition-colors"
            >
              Cookies
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-[#B8FF00] to-[#9DE600] text-[#0F1724] rounded-full shadow-2xl shadow-[#B8FF00]/50 hover:shadow-[#B8FF00]/70 transition-all duration-300 z-50 border-2 border-[#B8FF00]"
        aria-label="Scroll to top"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </motion.svg>
      </motion.button>
    </footer>
  );
};

export default Footer;