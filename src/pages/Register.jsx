import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";
import logo from "/Gaming.png";
import { motion } from "motion/react";

const Register = () => {
  const { Register, UpdateUser, GoogleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const length = /.{6,}/;

    if (!uppercase.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    } else if (!lowercase.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    } else if (!length.test(password)) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    setPasswordError("");

    Register(email, password)
      .then(() => {
        UpdateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success("Registration Successful!");
            navigate(location.state ? location.state : "/");
          })
          .catch((e) => toast.error(e.message));
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast.error("This email is already registered.");
        } else if (e.code === "auth/invalid-email") {
          toast.error("Please enter a valid email address.");
        } else if (e.code === "auth/weak-password") {
          toast.error("Password must be at least 6 characters long.");
        } else if (e.code === "auth/operation-not-allowed") {
          toast.error("Email/password signup is not enabled.");
        } else if (e.code === "auth/network-request-failed") {
          toast.error("Network error. Please try again.");
        } else if (e.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try later.");
        } else if (e.code === "auth/internal-error") {
          toast.error("Something went wrong. Please try again.");
        } else {
          toast.error(e.message);
        }
      });
  };

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then(() => {
        toast.success("Register Successful!");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-linear-to-br from-[#0f0f0f] via-[#121212] to-[#191919] relative ">
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
      <div className="absolute inset-0 bg-linear-to-br from-[#B8FF00]/20 via-transparent to-[#B8FF00]/10 blur-3xl pointer-events-none   "></div>

      <div className="w-[90%] max-w-md bg-linear-to-br   from-[#0f0f0f] via-[#121212] to-[#191919] backdrop-blur-xl border border-[#B8FF00]/30 shadow-[0_0_25px_#B8FF00]/10 rounded-2xl p-8 shadow-lg hover:shadow-[0_0_10px_#B8FF00] transition-all duration-300 ">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#B8FF00]">
          Create Account
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Join GameNexus and start your adventure!
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-[#B8FF00]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Profile image URL"
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-[#B8FF00]"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-[#B8FF00]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-[#B8FF00]"
              required
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-2">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full btn btn-soft md:text-base btn-warning bg-[#894b00]/30 hover:bg-yellow-800 hover:border-yellow-800 text-[#E6F0FF] cursor-pointer"
          >
            Register
          </button>

          <div className="divider text-gray-400">OR</div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 bg-white text-black border border-gray-300 rounded-lg py-3 font-medium hover:bg-gray-100 transition cursor-pointer"
          >
            <svg
              aria-label="Google logo"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path fill="#fff" d="m0 0H512V512H0"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </svg>
            Continue with Google
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-5">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-[#B8FF00] hover:text-white underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
