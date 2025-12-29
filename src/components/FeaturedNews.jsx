import React, { useState } from "react";
import { motion } from "motion/react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaFireAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  BiCalendar,
  BiChevronLeft,
  BiChevronRight,
  BiTrendingUp,
} from "react-icons/bi";
import { FcClock } from "react-icons/fc";


const featuredNews = [
  {
    id: 1,
    title: "RPG Gaming Enters a New Era with Next-Generation Mobile Titles",
    excerpt:
      "From advanced combat mechanics to cinematic storytelling, modern RPGs are setting new standards for mobile gaming.",
    image:
      "https://fastcdn.hoyoverse.com/content-v2/plat/124031/5d2ba4371115d26de4c574b28311aed8_576844151847376526.jpeg",
    category: "RPG",
    date: "Jan 3, 2026",
    readTime: "8 min",
    trending: true,
  },
  {
    id: 2,
    title: "eSports Championship 2026: Breaking Records with $10M Prize Pool",
    excerpt:
      "The biggest eSports tournament of the year attracts millions of viewers and top teams from around the globe.",
    image:
      "https://esportsinsider.com/wp-content/uploads/2025/08/Esports-Nation-Cup-large.png",
    category: "eSports",
    date: "Jan 2, 2026",
    readTime: "6 min",
    trending: true,
  },
  {
    id: 3,
    title: "Next-Gen Consoles Receive Major Performance Update",
    excerpt:
      "Latest firmware brings ray tracing improvements, faster load times, and exclusive features for enhanced gameplay.",
    image:
      "https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltbc1876152fcd9f07/blt5ad7364c0c473d79/67af1ce9f39e94c4dff04e88/xbox.png",
    category: "Hardware",
    date: "Dec 30, 2025",
    readTime: "5 min",
    trending: false,
  },
  {
    id: 4,
    title: "Virtual Reality Gaming Reaches New Immersion Levels",
    excerpt:
      "Advanced haptic feedback and eye-tracking technology create unprecedented gaming experiences in VR.",
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&h=800&fit=crop",
    category: "VR",
    date: "Dec 28, 2025",
    readTime: "7 min",
    trending: false,
  },
];

const quickNews = [
  {
    id: 1,
    title: "Indie Game 'Pixel Dreams' Wins Game of the Year",
    date: "2 hours ago",
    category: "Awards",
  },
  {
    id: 2,
    title: "New Battle Royale Mode Announced for Popular Shooter",
    date: "5 hours ago",
    category: "Updates",
  },
  {
    id: 3,
    title: "Gaming Studio Partners with Major Film Production",
    date: "8 hours ago",
    category: "Industry",
  },
  {
    id: 4,
    title: "Retro Classic Gets Surprise Remaster Release",
    date: "12 hours ago",
    category: "Releases",
  },
];

const FeaturedNewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredQuickNews, setHoveredQuickNews] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredNews.length) % featuredNews.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container mx-auto">
      <section className=" py-16 px-4 bg-linear-to-br rounded-2xl  from-[#0f0f0f] via-[#121212] to-[#191919] border md:mx-auto border-[#B8FF00]/30 shadow-[0_0_25px_#B8FF00]/10 shadow-lg hover:shadow-[0_0_10px_#B8FF00] transition-all duration-300">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start justify-between mb-10"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="border-b-3 border-[#B8FF00] pb-1 secondary-font">
                  Featured{" "}
                  <span className="text-[#B8FF00] secondary-font">News</span>
                </span>
              </h2>
            </div>
            <motion.a
              href="/gaming-news"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 bg-[#B8FF00]/10 border border-[#B8FF00]/30 text-[#B8FF00] px-6 py-3 rounded-xl hover:bg-[#B8FF00]/20 transition-all duration-300 font-semibold"
            >
              View All News
              <BiChevronRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Featured Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden group">
                {/* Background Image */}
                <motion.img
                  key={currentSlide}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  src={featuredNews[currentSlide].image}
                  alt={featuredNews[currentSlide].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm border border-[#B8FF00]/30 p-3 rounded-full hover:bg-[#B8FF00]/20 hover:border-[#B8FF00] transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                >
                  <BiChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm border border-[#B8FF00]/30 p-3 rounded-full hover:bg-[#B8FF00]/20 hover:border-[#B8FF00] transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                >
                  <BiChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <motion.div
                    key={`content-${currentSlide}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {/* Category and Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="bg-[#B8FF00] text-black px-4 py-1.5 rounded-full text-sm font-bold">
                        {featuredNews[currentSlide].category}
                      </span>
                      {featuredNews[currentSlide].trending && (
                        <span className="bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                          <BiTrendingUp className="w-4 h-4" />
                          Trending
                        </span>
                      )}
                      <div className="flex items-center gap-4 text-gray-300 text-sm">
                        <span className="flex items-center gap-1">
                          <BiCalendar className="w-4 h-4" />
                          {featuredNews[currentSlide].date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FcClock className="w-4 h-4" />
                          {featuredNews[currentSlide].readTime} read
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                      {featuredNews[currentSlide].title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-200 text-lg mb-6 max-w-3xl">
                      {featuredNews[currentSlide].excerpt}
                    </p>

                    {/* Read More Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#B8FF00] text-black px-8 py-3 rounded-xl font-bold hover:bg-[#a6ff00] transition-all duration-300 shadow-[0_0_20px_rgba(184,255,0,0.3)] hover:shadow-[0_0_30px_rgba(184,255,0,0.5)]"
                    >
                      Read Full Story
                    </motion.button>
                  </motion.div>
                </div>

                {/* Dots Navigation */}
                <div className="absolute bottom-8 right-8 flex gap-2">
                  {featuredNews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "w-8 bg-[#B8FF00]"
                          : "w-2 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="grid grid-cols-4 gap-4 mt-6">
                {featuredNews.map((news, index) => (
                  <motion.button
                    key={news.id}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.05 }}
                    className={`relative h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      index === currentSlide
                        ? "border-[#B8FF00] shadow-[0_0_15px_rgba(184,255,0,0.5)]"
                        : "border-transparent hover:border-[#B8FF00]/50"
                    }`}
                  >
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    {index === currentSlide && (
                      <div className="absolute inset-0 border-2 border-[#B8FF00]"></div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Quick News Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="bg-linear-to-br from-[#1B2433] to-[#0f1621] rounded-2xl p-6 border border-[#B8FF00]/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#B8FF00] rounded"></div>
                  Quick Updates
                </h3>

                <div className="space-y-4">
                  {quickNews.map((news, index) => (
                    <motion.div
                      key={news.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredQuickNews(news.id)}
                      onMouseLeave={() => setHoveredQuickNews(null)}
                      className="group cursor-pointer"
                    >
                      <div className="bg-[#0a0e1a] border border-[#B8FF00]/20 rounded-xl p-4 hover:border-[#B8FF00]/60 hover:bg-[#0a0e1a]/50 transition-all duration-300">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-[#B8FF00] transition-colors">
                            {news.title}
                          </h4>
                          <BiChevronRight
                            className={`w-5 h-5 text-[#B8FF00] shrink-0 transition-transform duration-300 ${
                              hoveredQuickNews === news.id
                                ? "translate-x-1"
                                : ""
                            }`}
                          />
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-[#B8FF00] font-medium">
                            {news.category}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400">{news.date}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-[#B8FF00]/10 border border-[#B8FF00]/30 text-[#B8FF00] py-3 rounded-xl hover:bg-[#B8FF00]/20 transition-all duration-300 font-semibold"
                >
                  View More Updates
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Mobile View All Button */}
          <motion.a
            href="/gaming-news"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="md:hidden flex items-center justify-center gap-2 bg-[#B8FF00]/10 border border-[#B8FF00]/30 text-[#B8FF00] px-6 py-4 rounded-xl hover:bg-[#B8FF00]/20 transition-all duration-300 font-semibold mt-8 w-full"
          >
            View All News
            <BiChevronRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default FeaturedNewsSection;
