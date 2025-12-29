import React from "react";
import { toast } from "react-toastify";

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
  };
  return (
    <section className="container mx-auto py-16 px-6 my-30 relative overflow-hidden  border border-[#B8FF00]/30 shadow-[0_0_25px_#B8FF00]/10 rounded-2xl p-8 shadow-lg hover:shadow-[0_0_10px_#B8FF00] transition-all duration-300">
      <div className="absolute inset-0 bg-linear-to-br from-[#B8FF00]/20 via-transparent to-[#B8FF00]/25 blur-3xl  pointer-events-none"></div>
      <div className="text-center ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10 secondary-font">
          Stay Updated with{" "}
          <span className="text-[#B8FF00] secondary-font">GameHub</span>.
        </h2>
        <p className="text-gray-300 mb-8 font-medium max-w-2xl text-[17px] mx-auto my-5">
          Subscribe to our newsletter and get the latest updates about new indie
          games, developer highlights, and exclusive offers.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center"
        >
          <input
            type="email"
            name=""
            placeholder="Enter your email"
            className="input input-bordered text-center sm:w-1/3 bg-[#0F1724]/80 border-[#B8FF00]/40 text-[#E6F0FF] placeholder-gray-400 focus:border-[#B8FF00] focus:outline-none rounded-e-none"
            required
          />
          <button
            type="submit"
            className="btn btn-soft btn-success hover:bg-green-800  border-[#B8FF00]/40 border-s-0 hover:border hover:border-[#B8FF00] text-[#B8FF00] rounded-s-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
