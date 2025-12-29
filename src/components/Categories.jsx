import React from "react";
import {
  FaGamepad,
  FaPuzzlePiece,
  FaRunning,
  FaDragon,
  FaBolt,
} from "react-icons/fa";
import { Link } from "react-router";

const categories = [
  { name: "Action", icon: <FaBolt /> },
  { name: "Adventure", icon: <FaRunning /> },
  { name: "RPG", icon: <FaDragon /> },
  { name: "Puzzle", icon: <FaPuzzlePiece /> },
  { name: "Arcade", icon: <FaGamepad /> },
];

const CategoriesSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-0 mt-20 mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="border-b-3 border-[#B8FF00] pb-1 secondary-font">
          <span className="text-[#B8FF00] secondary-font">Game</span> Categories
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group flex flex-col items-center justify-center p-6 h-full bg-[#0F1724]/70 backdrop-blur-sm border border-[#B8FF00]/30 rounded-2xl text-white shadow-lg transition-all duration-300 ease-in-out transform hover:border-[#B8FF00 hover:bg-[#1A202C] hover:shadow-[0_0_25px_rgba(184,255,0,0.7)] hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#B8FF00]/50
            "
          >
            <div
              className="text-4xl mb-4 p-4 rounded-full bg-[#B8FF00]/10 text-[#B8FF00] transition-all duration-300 ease-in-out group-hover:bg-[#B8FF00]/20 group-hover:scale-110"
            >
              {category.icon}
            </div>

            <span className="font-bold text-lg text-center tracking-wider transition-colors duration-300">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
