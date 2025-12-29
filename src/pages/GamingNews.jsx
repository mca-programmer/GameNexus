import React, { useState } from "react";
import { motion } from "motion/react";
import NewsLetter from "../components/NewsLetter";
import img1 from "../assets/Image/game.png";
import img2 from "../assets/Image/retro.png";

const featuredNews = {
  title: "RPG Gaming Enters a New Era with Next-Generation Mobile Titles",
  date: "January 3, 2026",
  description:
    "From advanced combat mechanics to cinematic storytelling, modern RPGs are setting new standards for mobile and cross-platform gaming. Industry experts predict continued innovation throughout 2026.",
  fullContent:
    "The mobile gaming landscape has undergone a dramatic transformation in recent years, with RPG titles leading the charge into uncharted territory. Developers are now leveraging cutting-edge technology to deliver experiences that rival traditional console and PC games. Advanced AI-driven NPC behaviors, real-time ray tracing on mobile devices, and cloud gaming integration are just a few of the innovations reshaping the genre. Major studios and indie developers alike are investing heavily in mobile RPG development, recognizing the platform's massive global reach and untapped potential.",
  image:
    "https://fastcdn.hoyoverse.com/content-v2/plat/124031/5d2ba4371115d26de4c574b28311aed8_576844151847376526.jpeg",
  author: "Sarah Chen",
  readTime: "8 min read",
};

const latestNews = [
  {
    id: 1,
    title: "Top 10 Games to Play This Holiday Season",
    date: "Nov 28, 2025",
    description:
      "Curated list of must-play games for the holidays, covering indie hits and blockbuster titles.",
    image: img1,
    category: "Lists",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "GameNexus Sponsors Indie Game Jam 2025",
    date: "Nov 25, 2025",
    description:
      "Supporting indie developers worldwide through sponsorship and promotion of their creativity.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    category: "Indie",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Next-Gen Console Updates Announced",
    date: "Nov 20, 2025",
    description:
      "Latest updates bring exciting new features, performance improvements, and exclusive game releases.",
    image:
      "https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltbc1876152fcd9f07/blt5ad7364c0c473d79/67af1ce9f39e94c4dff04e88/xbox.png",
    category: "Hardware",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Upcoming eSports Tournaments 2026",
    date: "Nov 18, 2025",
    description:
      "A complete schedule of international eSports competitions, including prize pools and participating teams.",
    image:
      "https://esportsinsider.com/wp-content/uploads/2025/08/Esports-Nation-Cup-large.png",
    category: "eSports",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Virtual Reality Gaming Reaches New Heights",
    date: "Nov 15, 2025",
    description:
      "VR technology advances bring unprecedented immersion and accessibility to gaming experiences.",
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&h=600&fit=crop",
    category: "VR",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Game Streaming Services Battle for Dominance",
    date: "Nov 12, 2025",
    description:
      "Major platforms unveil new features and exclusive titles in fierce competition for subscribers.",
    image:
      "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800&h=600&fit=crop",
    category: "Streaming",
    readTime: "5 min read",
  },
  {
    id: 7,
    title: "Retro Gaming Renaissance: Classic Titles Return",
    date: "Nov 10, 2025",
    description:
      "Beloved games from the 90s and 2000s receive modern remakes with enhanced graphics and gameplay.",
    image: img2,
    category: "Retro",
    readTime: "4 min read",
  },
  {
    id: 8,
    title: "AI Integration Transforms Gaming Experience",
    date: "Nov 8, 2025",
    description:
      "Artificial intelligence creates dynamic storylines and adaptive difficulty in next-gen titles.",
    image:
      "https://blog.emb.global/wp-content/uploads/2023/11/The-Impact-of-AI-in-Modern-Gaming.webp",
    category: "Technology",
    readTime: "8 min read",
  },
];

const trendingTopics = [
  { title: "Battle Royale Evolution", count: "1.2M discussions" },
  { title: "Cross-Platform Gaming", count: "890K discussions" },
  { title: "Game Preservation", count: "654K discussions" },
  { title: "Mobile Gaming Growth", count: "1.5M discussions" },
  { title: "Indie Success Stories", count: "432K discussions" },
];

// const upcomingReleases = [
//   {
//     title: "Shadow Legends: Origins",
//     releaseDate: "Jan 15, 2026",
//     platform: "PC, PS5, Xbox Series X",
//     genre: "Action RPG",
//   },
//   {
//     title: "Cyber Chronicles 2077",
//     releaseDate: "Feb 3, 2026",
//     platform: "Multi-platform",
//     genre: "Sci-Fi Adventure",
//   },
//   {
//     title: "Fantasy Quest Remastered",
//     releaseDate: "Feb 20, 2026",
//     platform: "Switch, PC",
//     genre: "Classic RPG",
//   },
//   {
//     title: "Speed Racers Ultimate",
//     releaseDate: "Mar 5, 2026",
//     platform: "All Platforms",
//     genre: "Racing",
//   },
// ];

const categories = [
  "RPG",
  "Action",
  "Indie",
  "Shooter",
  "Strategy",
  "eSports",
  "VR",
  "Mobile",
  "Retro",
  "Simulation",
];

const GamingNews = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="container mx-auto px-4 mt-35 mb-20 ">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="font-bold text-3xl md:text-4xl  text-center">
          <span className="border-b-3 border-[#B8FF00] pb-1 secondary-font">
            <span className="text-[#B8FF00] secondary-font">GameNexus</span>{" "}
            News
          </span>
        </h1>

        <p className="text-base  text-[#B8FF00]/70 max-w-3xl mx-auto leading-relaxed mt-5">
          Get the latest updates, releases, and gaming news from GameNexus and
          the gaming world. Stay informed about industry trends, game reviews,
          and exclusive interviews.
        </p>
      </motion.div>

      {/* Featured News - Larger */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-linear-to-br from-[#1B2433] to-[#0f1621] rounded-2xl overflow-hidden border-2 border-[#B8FF00]/40 shadow-[0_0_40px_rgba(184,255,0,0.2)] hover:shadow-[0_0_60px_rgba(184,255,0,0.3)] transition-all duration-500 mb-16"
      >
        <div className="relative">
          <img
            src={featuredNews.image}
            alt={featuredNews.title}
            className="w-full h-90 md:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#1B2433] via-transparent to-transparent"></div>
        </div>
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-4 text-sm">
            <span className="bg-[#B8FF00] text-black px-4 py-1 rounded-full font-semibold">
              Featured
            </span>
            <span className="text-[#B8FF00]/80">{featuredNews.author}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">{featuredNews.readTime}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {featuredNews.title}
          </h2>
          <p className="text-[#B8FF00]/70 text-lg mb-6">{featuredNews.date}</p>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            {featuredNews.description}
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            {featuredNews.fullContent}
          </p>
          <button className="bg-[#B8FF00] text-black px-8 py-4 rounded-xl font-semibold hover:bg-[#a6ff00] transition-all duration-300 hover:scale-105">
            Read Full Article
          </button>
        </div>
      </motion.div>

      {/* Trending Topics Bar */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#1B2433] rounded-2xl p-6 mb-12 border border-[#B8FF00]/30"
      >
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          Trending Topics
        </h3>
        <div className="flex flex-wrap gap-3">
          {trendingTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-[#0f0f0f] border border-[#B8FF00]/20 px-4 py-2 rounded-lg hover:border-[#B8FF00]/60 transition-all cursor-pointer"
            >
              <p className="text-[#B8FF00] font-medium">{topic.title}</p>
              <p className="text-gray-500 text-xs">{topic.count}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Categories Section - Enhanced */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-semibold text-white mb-6">
          Browse by Category
        </h3>
        <div className="flex flex-wrap gap-3">
          <span
            onClick={() => setSelectedCategory("All")}
            className={`${
              selectedCategory === "All"
                ? "bg-[#B8FF00] text-black"
                : "bg-[#0f0f0f] border border-[#B8FF00]/30 text-[#B8FF00]"
            } px-6 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 font-medium`}
          >
            All News
          </span>
          {categories.map((cat, index) => (
            <span
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`${
                selectedCategory === cat
                  ? "bg-[#B8FF00] text-black"
                  : "bg-[#0f0f0f] border border-[#B8FF00]/30 text-[#B8FF00]"
              } px-6 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 font-medium`}
            >
              {cat}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Latest News Grid - More Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-3xl font-semibold text-white mb-8">
          Latest News & Updates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-[#1B2433] rounded-2xl overflow-hidden border border-[#B8FF00]/30 shadow-[0_0_25px_rgba(184,255,0,0.1)] hover:shadow-[0_0_35px_rgba(184,255,0,0.25)] hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-black/70 backdrop-blur-sm text-[#B8FF00] px-3 py-1 rounded-full text-xs font-semibold">
                    {news.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-[#B8FF00] transition-colors">
                  {news.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span>{news.date}</span>
                  <span>•</span>
                  <span>{news.readTime}</span>
                </div>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {news.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <NewsLetter></NewsLetter>
    </div>
  );
};

export default GamingNews;
