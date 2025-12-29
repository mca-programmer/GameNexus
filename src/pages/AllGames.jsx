import React, { useEffect, useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import GameCard from "../components/GamesCard";
import { FaSearch, FaSortAmountDown } from "react-icons/fa";
import { motion } from "framer-motion";

/* ✅ Motion Variants */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const AllGames = () => {
  const games = useLoaderData();

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    document.title = "All Games | GameNexus";
  }, []);

  const filteredGames = useMemo(() => {
    let filtered = [...games];

    if (search) {
      filtered = filtered.filter((game) =>
        game.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortBy === "downloads") {
      filtered.sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === "ratings") {
      filtered.sort((a, b) => b.ratings - a.ratings);
    }

    return filtered;
  }, [games, search, sortBy]);

  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-0 mt-35 mb-20 ">
      {/* Header */}
      <div className="mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-3xl md:text-4xl  text-center"
        >
          <span className="border-b-3 border-[#B8FF00] pb-1 secondary-font">
            All <span className="text-[#B8FF00] secondary-font">Games</span>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#B8FF00]/70 text-base text-center mx-auto max-w-[500px] mt-5"
        >
          Browse through all available games. Search, sort, and filter to find
          your favorite titles!
        </motion.p>
      </div>

      {/* Search & Sort */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 justify-between">
        {/* Search */}
        <div className="relative w-full md:w-1/3">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B8FF00] z-10" />
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full pl-10
              border-[#B8FF00] text-[#B8FF00]
              placeholder:text-[#B8FF00]/60
              focus:border-[#B8FF00] focus:outline-none"
          />
        </div>

        {/* Sort */}
        <div className="relative w-full md:w-1/4">
          <FaSortAmountDown className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B8FF00] pointer-events-none z-10" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-bordered w-full pl-10
              border-[#B8FF00] text-[#B8FF00]
              focus:border-[#B8FF00] focus:outline-none"
          >
            <option value="" className="text-gray-400">
              Sort By
            </option>
            <option value="downloads">Most Downloaded</option>
            <option value="ratings">Most Ratings</option>
          </select>
        </div>
      </div>

      {/* Games Grid with Motion */}
      {filteredGames.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredGames.map((game) => (
            <motion.div key={game.id} variants={cardVariants}>
              <GameCard data={game} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-4xl md:text-5xl font-black bg-linear-to-r from-[#B8FF00] via-green-400 to-green-600 text-transparent bg-clip-text animate-pulse mt-15 p-5">
          No games found
        </p>
      )}
    </section>
  );
};

export default AllGames;
