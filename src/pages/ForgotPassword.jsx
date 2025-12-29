import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import logo from "/Gaming.png";
import { Link } from "react-router";
import { motion } from "motion/react";

const ForgotPassword = () => {
  const { ForgetPassword, liveEmail, setLiveEmail } = useContext(AuthContext);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email) {
      toast.error("Please enter your email address!");
      return;
    }

    ForgetPassword(email)
      .then(() => {
        toast.success(" Reset link sent! Check your Gmail inbox.");
        setTimeout(() => {
          window.open("https://mail.google.com/", "_blank");
        }, 1500);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-linear-to-br from-[#0f0f0f] via-[#121212] to-[#191919] relative">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="flex gap-2 items-center">
            <img
              className="w-[50px] md:w-[55px] lg:w-[60px]"
              src={logo}
              alt="logo"
            />
            <span className="font-bold secondary-font text-lg md:text-2xl">
              GameNexus<span className="text-[#B8FF00] text-3xl">.</span>
            </span>
          </Link>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-linear-to-br from-[#B8FF00]/20 via-transparent to-[#B8FF00]/10 blur-3xl pointer-events-none"></div>

      <div className="w-[90%] max-w-md bg-linear-to-br   from-[#0f0f0f] via-[#121212] to-[#191919] backdrop-blur-xl border border-[#B8FF00]/30 shadow-[0_0_25px_#B8FF00]/10 rounded-2xl p-8 relative z-10  shadow-lg hover:shadow-[0_0_10px_#B8FF00] transition-all duration-300">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#B8FF00]">
          Forgot Password
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Enter your email and we’ll send you a reset link.
        </p>

        <form onSubmit={handleForgotPassword} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              onChange={(e) => setLiveEmail(e.target.value)}
              type="email"
              name="email"
              value={liveEmail}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-[#B8FF00]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#B8FF00] hover:bg-[#B8FF00]/70 text-black font-semibold py-3 rounded-lg transition cursor-pointer"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Remember your password?{" "}
          <a
            href="/auth/login"
            className="text-[#B8FF00] hover:text-white underline"
          >
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
