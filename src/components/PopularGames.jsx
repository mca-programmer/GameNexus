import React from "react";
import { Link, useLoaderData } from "react-router";
import GamesCard from "./GamesCard";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const PopularGames = () => {
  const data = useLoaderData();

  const sortedData = data.sort((a, b) => b.downloads - a.downloads).slice(0, 8);

  return (
    <section className="container mx-auto mt-30">
      <h1 className="font-bold text-3xl md:text-4xl mb-10 text-center  ">
        <span className="border-b-3 border-[#B8FF00] pb-1 secondary-font">
          Most Popular{" "}
          <span className="text-[#B8FF00] secondary-font">Games</span>
        </span>
      </h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {sortedData.map((data) => (
          <motion.div key={data.id} variants={cardVariants}>
            <GamesCard data={data}></GamesCard>
          </motion.div>
        ))}
      </motion.div>

      <div className=" mt-8  ">
        <Link
          to="/all-games"
          className="flex items-center gap-2 w-35 bg-[#B8FF00]/10 border border-[#B8FF00]/30 text-[#B8FF00] px-6 py-3 rounded-xl hover:bg-[#B8FF00]/20 transition-all duration-300 font-semibold"
        >
          See All
          <MdKeyboardDoubleArrowRight size={23} />
        </Link>
      </div>
    </section>
  );
};

export default PopularGames;
