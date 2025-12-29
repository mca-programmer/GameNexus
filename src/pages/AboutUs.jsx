import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { TiPhoneOutline } from "react-icons/ti";
import { MdOutlineMailOutline } from "react-icons/md";
import gamingConsole from "../assets/Image/Gaming-console.png";
import { motion } from "motion/react";
import { FaGamepad, FaUsers, FaStar, FaShieldAlt } from "react-icons/fa";

const AboutUs = () => {
  // Advanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const glowVariants = {
    initial: { boxShadow: "0 0 20px rgba(184, 255, 0, 0.1)" },
    animate: {
      boxShadow: [
        "0 0 20px rgba(184, 255, 0, 0.1)",
        "0 0 40px rgba(184, 255, 0, 0.3)",
        "0 0 20px rgba(184, 255, 0, 0.1)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="container mx-auto px-4 mt-35 mb-20 relative overflow-hidden">
      <title>About Us | GameNexus</title>

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.03, 0.08, 0.03],
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
          rotate: [360, 180, 0],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#B8FF00] rounded-full blur-3xl pointer-events-none"
      />

      {/* Hero Section with 3D Transform */}
      <motion.div
        initial={{ opacity: 0, rotateX: -15 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-10 perspective-1000"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="font-bold text-3xl md:text-5xl text-center"
        >
          <motion.span
            className="inline-block border-b-4 border-[#B8FF00] pb-2 secondary-font"
            whileHover={{ scale: 1.05, color: "#B8FF00" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About{" "}
            <motion.span
              className="text-[#B8FF00] secondary-font"
              animate={{
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
            >
              GameNexus
            </motion.span>
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#B8FF00]/70 text-base text-center mx-auto max-w-[600px] mt-6 leading-relaxed"
        >
          Discover our mission, vision, and values. Learn why GameNexus is the
          ultimate destination for gamers and creators alike.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="divider bg-gradient-to-r from-transparent via-[#B8FF00] to-transparent h-[2px] my-8"
      />

      {/* Main Content with Stagger Animation */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.01 }}
        className="bg-gradient-to-br rounded-3xl from-[#0f0f0f] via-[#121212] to-[#191919] px-6 py-8 md:mx-auto border-2 border-[#B8FF00]/30 relative overflow-hidden group"
      >
        {/* Animated corner accents */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#B8FF00]/50 rounded-tl-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#B8FF00]/50 rounded-br-3xl"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.1 }}
          className="text-base text-gray-300 leading-relaxed relative z-10"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block"
          >
            Founded in 2025, GameNexus is a next-generation interactive
            entertainment platform built to celebrate creativity, innovation, and
            community in the world of gaming. Headquartered in Bangladesh and
            powered by passionate developers from around the globe, GameNexus aims
            to connect players and creators through a unified digital ecosystem
            that empowers everyone to discover, play, and share games in exciting
            new ways.
          </motion.span>
          <br />
          <br />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block"
          >
            GameNexus offers a vast and ever-growing library of indie and
            mainstream games, where players can explore unique experiences,
            support developers, and stay connected through a vibrant social hub.
            Our platform is designed with modern gamers in mind — combining high
            performance, smooth user experiences, and deep community engagement.
          </motion.span>
          <br />
          <br />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block"
          >
            Beyond games, GameNexus also supports developers by offering advanced
            tools, cloud hosting, and analytics to help bring their visions to
            life. Whether you're an indie creator or an established studio,
            GameNexus provides the technology and resources you need to publish,
            distribute, and grow your audience — all in one place.
          </motion.span>
          <br />
          <br />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="inline-block font-semibold text-[#B8FF00]"
          >
            At the heart of GameNexus is a belief that gaming is more than just
            entertainment — it's a culture, a community, and a creative force.
          </motion.span>
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="divider bg-gradient-to-r from-transparent via-[#B8FF00]/50 to-transparent h-[2px] my-10"
      />

      {/* Why Choose Section with Card Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gradient-to-br rounded-3xl from-[#0f0f0f] via-[#121212] to-[#191919] px-6 py-12 md:mx-auto border-2 border-[#B8FF00]/30 relative overflow-hidden"
      >
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(184, 255, 0, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(184, 255, 0, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(184, 255, 0, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 pointer-events-none"
        />

        <div className="text-center relative z-10">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-12 md:text-start"
          >
            <span className="inline-block border-b-4 border-[#B8FF00] pb-2 secondary-font">
              Why Choose{" "}
              <span className="text-[#B8FF00]/90 secondary-font">GameNexus?</span>
            </span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[0, 1, 2, 3].map((index) => {
              const icons = [FaGamepad, FaUsers, FaStar, FaShieldAlt];
              const titles = [
                "Huge Game Collection",
                "Community Support",
                "Top Rated Games",
                "Secure & Safe",
              ];
              const texts = [
                "Explore a vast library of indie and popular games all in one place.",
                "Connect with developers and gamers who share your passion.",
                "Discover only the best games curated based on player ratings.",
                "Your data and game downloads are always protected and verified.",
              ];
              const Icon = icons[index];

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="rest"
                  whileHover="hover"
                  className="relative group"
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="bg-gradient-to-br from-[#1B2433] to-[#151d2a] p-8 rounded-2xl border-2 border-[#B8FF00]/30 hover:border-[#B8FF00] transition-all duration-300 relative overflow-hidden h-full"
                  >
                    {/* Animated background effect */}
                    <motion.div
                      className="absolute inset-0 bg-[#B8FF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        background: [
                          "linear-gradient(45deg, transparent 0%, rgba(184, 255, 0, 0.1) 50%, transparent 100%)",
                          "linear-gradient(225deg, transparent 0%, rgba(184, 255, 0, 0.1) 50%, transparent 100%)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    <motion.div
                      className="relative z-10 flex flex-col items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div
                        className="flex justify-center mb-6 p-4 bg-[#B8FF00]/10 rounded-full"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="text-[#B8FF00] text-4xl" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-3 text-white">
                        {titles[index]}
                      </h3>
                      <p className="text-gray-400 text-center leading-relaxed">
                        {texts[index]}
                      </p>
                    </motion.div>

                    {/* Corner decorations */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-2 right-2 w-3 h-3 bg-[#B8FF00] rounded-full opacity-50"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="absolute bottom-2 left-2 w-3 h-3 bg-[#B8FF00] rounded-full opacity-50"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="divider bg-gradient-to-r from-transparent via-[#B8FF00]/50 to-transparent h-[2px] my-10"
      />

      {/* FAQ Section with Accordion Animations */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br rounded-3xl from-[#0f0f0f] via-[#121212] to-[#191919] px-6 py-8 border-2 md:mx-auto border-[#B8FF00]/30 relative overflow-hidden"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#B8FF00]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />

        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-3xl mb-8 relative z-10"
        >
          <span className="inline-block border-b-4 border-[#B8FF00] pb-2 secondary-font">
            Frequently Asked Questions
          </span>
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 mt-10 relative z-10"
        >
          {[
            {
              q: "Can I visit the GameNexus office or studio?",
              a: "We appreciate your enthusiasm! However, GameNexus does not currently offer public studio or office tours. Our team is focused on creating great gaming experiences.",
            },
            {
              q: "Do you offer internships or part-time jobs?",
              a: "Yes! Any available internships or part-time positions will be announced on our official Career Page. Follow our social media for updates.",
            },
            {
              q: "I'm a professional in design, music, or testing. Can I collaborate with GameNexus?",
              a: "We handle our internal development and partnerships in-house. We appreciate your interest and support!",
            },
            {
              q: "Can I create a fan website or community for GameNexus?",
              a: "Absolutely! We love seeing fans express their creativity. Just follow our Fan Content Policy and keep it non-commercial.",
            },
            {
              q: "Where can I play GameNexus games?",
              a: "You can browse, download, and play our games directly from the GameNexus website or app (coming soon).",
            },
            {
              q: "Can I monetize videos featuring GameNexus games?",
              a: "Yes, you can create and monetize gameplay videos, reviews, and streams that include GameNexus content — as long as they follow our Fan Content Guidelines.",
            },
            {
              q: "Does GameNexus sponsor gaming tournaments or events?",
              a: "At this time, we are not offering sponsorships for tournaments or eSports events. We may explore partnerships in the future.",
            },
            {
              q: "Do you provide scholarships or student programs?",
              a: "Not currently. However, we are exploring educational collaborations with local institutions in Bangladesh to support upcoming developers.",
            },
            {
              q: "I'm a student researching the gaming industry. Can I interview your developers?",
              a: "We appreciate your interest! Due to high demand, we're unable to accommodate direct interviews. However, you can find insights from our developers on our blog and YouTube.",
            },
            {
              q: "My company wants to make a movie, comic, or merchandise based on your games. How can we contact you?",
              a: "Thank you for your interest! At this time, GameNexus is not seeking additional licensing or media partners. You may, however, review our Fan Content Policy for general guidelines on collaborations.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="collapse collapse-arrow bg-gradient-to-r from-[#1b2433] to-[#1a2130] border-2 border-[#B8FF00]/30 hover:border-[#B8FF00] hover:shadow-[0_0_30px_rgba(184,255,0,0.2)] transition-all duration-300 rounded-xl overflow-hidden group"
            >
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-bold text-base text-gray-200 group-hover:text-[#B8FF00] transition-colors">
                <motion.span
                  whileHover={{ x: 5 }}
                  className="inline-block"
                >
                  {faq.q}
                </motion.span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="collapse-content text-sm text-gray-400 bg-[#0f1419] rounded-b-xl"
              >
                <p className="pt-2">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="divider bg-gradient-to-r from-transparent via-[#B8FF00]/50 to-transparent h-[2px] my-10"
      />

      {/* Contact Section with Floating Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="bg-gradient-to-br rounded-3xl from-[#0f0f0f] via-[#121212] to-[#191919] px-8 py-10 mx-auto border-2 border-[#B8FF00]/30 relative overflow-hidden"
      >
        {/* Animated grid background */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#B8FF00 1px, transparent 1px), linear-gradient(90deg, #B8FF00 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-start"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="font-bold text-3xl text-white mb-6"
            >
              <span className="inline-block border-b-4 border-[#B8FF00] pb-2 secondary-font">
                Contact Us
              </span>
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="space-y-4 text-gray-300 text-base mt-8"
            >
              <motion.p
                variants={itemVariants}
                className="font-bold text-[#B8FF00] text-xl"
              >
                GameNexus Interactive Ltd.
              </motion.p>
              <motion.p
                variants={itemVariants}
                whileHover={{ x: 5, color: "#B8FF00" }}
                className="flex gap-2 items-center transition-colors"
              >
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="font-semibold text-white flex gap-2 items-center"
                >
                  <MdOutlineMailOutline color="#B8FF00" size={20} />
                  Email:
                </motion.span>
                support@GameNexus.com
              </motion.p>
              <motion.p
                variants={itemVariants}
                whileHover={{ x: 5, color: "#B8FF00" }}
                className="flex gap-2 items-center transition-colors"
              >
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="font-semibold text-white flex gap-2 items-center"
                >
                  <TiPhoneOutline color="#B8FF00" size={20} />
                  Phone:
                </motion.span>
                +880 1701 378 952
              </motion.p>
              <motion.p
                variants={itemVariants}
                whileHover={{ x: 5, color: "#B8FF00" }}
                className="flex gap-2 items-center transition-colors"
              >
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="font-semibold text-white flex gap-2 items-center"
                >
                  <MdOutlineLocationOn color="#B8FF00" size={22} />
                  Address:
                </motion.span>
                Road #04, Habigonj, Sylhet – 1025, Bangladesh
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="hidden md:block relative"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                animate={{
                  filter: [
                    "drop-shadow(0 0 20px rgba(184, 255, 0, 0.3))",
                    "drop-shadow(0 0 40px rgba(184, 255, 0, 0.5))",
                    "drop-shadow(0 0 20px rgba(184, 255, 0, 0.3))",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-72"
                src={gamingConsole}
                alt="Gaming Console"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;