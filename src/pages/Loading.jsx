import React, { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { motion, AnimatePresence } from "motion/react";
import { FaGamepad, FaTrophy, FaStar, FaRocket } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

const Loading = () => {
  const [loadingText, setLoadingText] = useState("Initializing");
  const [progress, setProgress] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, []);

  // Cycling loading messages
  useEffect(() => {
    const messages = [
      "Initializing",
      "Loading Games",
      "Preparing Assets",
      "Almost Ready",
      "Loading Complete",
    ];
    let index = 0;

    const textInterval = setInterval(() => {
      index = (index + 1) % messages.length;
      setLoadingText(messages[index]);
    }, 1500);

    return () => clearInterval(textInterval);
  }, []);

  // Floating icons data
  const floatingIcons = [
    { Icon: FaGamepad, delay: 0, duration: 3 },
    { Icon: FaTrophy, delay: 0.5, duration: 3.5 },
    { Icon: FaStar, delay: 1, duration: 4 },
    { Icon: FaRocket, delay: 1.5, duration: 3.2 },
    { Icon: IoGameController, delay: 2, duration: 3.8 },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const particleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (custom) => ({
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      x: [0, custom.x],
      y: [0, custom.y],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: custom.delay,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0F1724] via-[#1a2332] to-[#0F1724] overflow-hidden px-4">
      <title>Loading...</title>

      {/* Animated Background Grid */}
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
            "linear-gradient(#B8FF00 1px, transparent 1px), linear-gradient(90deg, #B8FF00 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Rotating Background Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#B8FF00] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#B8FF00] rounded-full blur-3xl"
      />

      {/* Floating Gaming Icons */}
      {floatingIcons.map((item, index) => {
        const Icon = item.Icon;
        const angle = (index / floatingIcons.length) * 2 * Math.PI;
        const radius = 150;

        return (
          <motion.div
            key={index}
            animate={{
              x: [
                Math.cos(angle) * radius,
                Math.cos(angle + Math.PI) * radius,
                Math.cos(angle) * radius,
              ],
              y: [
                Math.sin(angle) * radius,
                Math.sin(angle + Math.PI) * radius,
                Math.sin(angle) * radius,
              ],
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
            className="absolute hidden md:block"
          >
            <Icon className="text-[#B8FF00] text-3xl" />
          </motion.div>
        );
      })}

      {/* Particle Effects */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * 2 * Math.PI;
        const distance = 100 + Math.random() * 100;
        return (
          <motion.div
            key={i}
            custom={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              delay: i * 0.15,
            }}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            className="absolute w-2 h-2 bg-[#B8FF00] rounded-full"
          />
        );
      })}

      {/* Main Loading Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center"
      >
        {/* Logo/Icon Container with Spinner */}
        <motion.div
          variants={logoVariants}
          className="relative mb-8"
        >
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 border-4 border-transparent border-t-[#B8FF00] border-r-[#B8FF00] rounded-full"
          />

          {/* Middle pulsing ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 border-2 border-[#B8FF00]/30 rounded-full"
          />

          {/* Inner content */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-gradient-to-br from-[#0F1724] to-[#1a2332] rounded-full border-2 border-[#B8FF00]/50 shadow-2xl shadow-[#B8FF00]/30">
            {/* MoonLoader */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <MoonLoader size={50} color="#B8FF00" speedMultiplier={1.2} />
            </motion.div>

            {/* Center icon */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute"
            >
              <FaGamepad className="text-[#B8FF00] text-2xl md:text-3xl" />
            </motion.div>
          </div>

          {/* Orbital dots */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
              className="absolute inset-0 w-32 h-32 md:w-40 md:h-40"
            >
              <div
                className="absolute top-0 left-1/2 w-3 h-3 bg-[#B8FF00] rounded-full -translate-x-1/2"
                style={{
                  boxShadow: "0 0 10px #B8FF00",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Loading Text with Animation */}
        <motion.div variants={textVariants} className="text-center mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={loadingText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-[#B8FF00] text-xl md:text-2xl font-bold tracking-widest"
            >
              {loadingText}
            </motion.p>
          </AnimatePresence>

          {/* Animated dots */}
          <motion.div className="flex justify-center gap-2 mt-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 bg-[#B8FF00] rounded-full"
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          variants={textVariants}
          className="w-64 md:w-80 h-3 bg-[#0F1724] rounded-full border-2 border-[#B8FF00]/30 overflow-hidden mb-4"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-gradient-to-r from-[#9DE600] via-[#B8FF00] to-[#9DE600] relative"
          >
            {/* Shimmer effect */}
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* Progress Percentage */}
        <motion.p
          variants={textVariants}
          className="text-[#B8FF00] text-sm md:text-base font-semibold"
        >
          {Math.min(Math.round(progress), 100)}%
        </motion.p>

        {/* Fun Loading Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 max-w-md text-center"
        >
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-gray-400 text-xs md:text-sm"
          >
            💡 Pro tip: Check out our daily featured games!
          </motion.p>
        </motion.div>

        {/* Gaming Stats Animation */}
        <motion.div
          variants={containerVariants}
          className="mt-8 grid grid-cols-3 gap-4 md:gap-6"
        >
          {[
            { label: "Games", value: "10K+" },
            { label: "Players", value: "50K+" },
            { label: "Reviews", value: "100K+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={textVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center p-3 md:p-4 bg-[#B8FF00]/5 rounded-xl border border-[#B8FF00]/20 backdrop-blur-sm"
            >
              <motion.p
                animate={{
                  color: ["#B8FF00", "#9DE600", "#B8FF00"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="text-lg md:text-xl font-bold"
              >
                {stat.value}
              </motion.p>
              <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-center"
        >
          <motion.h1
            animate={{
              textShadow: [
                "0 0 10px rgba(184, 255, 0, 0.3)",
                "0 0 20px rgba(184, 255, 0, 0.6)",
                "0 0 10px rgba(184, 255, 0, 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-2xl md:text-3xl font-bold secondary-font"
          >
            GameNexus
            <span className="text-[#B8FF00] text-3xl md:text-4xl">.</span>
          </motion.h1>
          <p className="text-gray-500 text-xs md:text-sm mt-2">
            Your Gaming Universe
          </p>
        </motion.div>
      </motion.div>

      {/* Corner Decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-[#B8FF00]/30 rounded-tl-2xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-[#B8FF00]/30 rounded-br-2xl"
      />
    </div>
  );
};

export default Loading;