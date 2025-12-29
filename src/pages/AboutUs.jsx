import React from "react";

import { MdOutlineLocationOn } from "react-icons/md";
import { TiPhoneOutline } from "react-icons/ti";
import { MdOutlineMailOutline } from "react-icons/md";
import gamingConsole from "../assets/Image/Gaming-console.png";
import { motion } from "motion/react";
import { FaGamepad, FaUsers, FaStar, FaShieldAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 mt-35 mb-20   ">
      <title>About Us | GameNexus</title>

      <div className="mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-3xl md:text-4xl   text-center  "
        >
          <span className="border-b-3 border-[#B8FF00] pb-1 secondary-font">
            About{" "}
            <span className="text-[#B8FF00] secondary-font">GameNexus</span>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#B8FF00]/70 text-base text-center mx-auto max-w-[500px] mt-5"
        >
          Discover our mission, vision, and values. Learn why GameNexus is the
          ultimate destination for gamers and creators alike.
        </motion.p>
      </div>
      <div className="divider bg-[#B8FF00]/30 h-px my-5"></div>

      <div className="bg-linear-to-br rounded-2xl  from-[#0f0f0f] via-[#121212] to-[#191919] px-4 py-5  md:mx-auto border border-[#B8FF00]/30 shadow-[0_0_25px_#B8FF00]/10 shadow-lg hover:shadow-[0_0_10px_#B8FF00] transition-all duration-300">
        <p className="text-base text-gray-400 leading-relaxed ">
          Founded in 2025, GameNexus is a next-generation interactive
          entertainment platform built to celebrate creativity, innovation, and
          community in the world of gaming. Headquartered in Bangladesh and
          powered by passionate developers from around the globe, GameNexus aims
          to connect players and creators through a unified digital ecosystem
          that empowers everyone to discover, play, and share games in exciting
          new ways.
          <br />
          <br />
          GameNexus offers a vast and ever-growing library of indie and
          mainstream games, where players can explore unique experiences,
          support developers, and stay connected through a vibrant social hub.
          Our platform is designed with modern gamers in mind — combining high
          performance, smooth user experiences, and deep community engagement.
          <br />
          <br />
          Beyond games, GameNexus also supports developers by offering advanced
          tools, cloud hosting, and analytics to help bring their visions to
          life. Whether you’re an indie creator or an established studio,
          GameNexus provides the technology and resources you need to publish,
          distribute, and grow your audience — all in one place.
          <br />
          <br />
          At the heart of GameNexus is a belief that gaming is more than just
          entertainment — it’s a culture, a community, and a creative force.
        </p>
      </div>

      <div className="divider bg-[#B8FF00]/20 h-px my-8"></div>

      <section className="bg-linear-to-br rounded-2xl from-[#0f0f0f] via-[#121212] to-[#191919] px-4 py-10 md:mx-auto border border-[#B8FF00]/30 shadow-[0_0_25px_#B8FF00]/10 shadow-lg hover:shadow-[0_0_10px_#B8FF00] transition-all duration-300">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-10 md:text-start"
          >
            <span className="border-b-2 border-[#B8FF00] pb-1 secondary-font ">
              Why Choose{" "}
              <span className="text-[#B8FF00]/80 secondary-font">GameHub?</span>
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#1B2433] p-6 rounded-2xl border border-[#B8FF00]/30 hover:border-[#B8FF00] hover:shadow-[0_0_20px_#B8FF00]/30 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="text-[#B8FF00] text-3xl" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {titles[index]}
                  </h3>
                  <p className="text-gray-400">{texts[index]}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider bg-[#B8FF00]/20 h-px my-8"></div>

      <div className="bg-linear-to-br rounded-2xl  from-[#0f0f0f] via-[#121212] to-[#191919] px-4 py-5 border md:mx-auto border-[#B8FF00]/30 shadow-[0_0_25px_#B8FF00]/10 shadow-lg hover:shadow-[0_0_10px_#B8FF00] transition-all duration-300">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-semibold text-2xl  mb-3 "
        >
          <span className="border-b-2 border-[#B8FF00] pb-1 secondary-font">
            Frequently Asked Questions (FAQ)
          </span>
        </motion.h3>

        <div className="space-y-3 mt-10">
          <div className="collapse collapse-arrow bg-[#1b2433]  border border-[#B8FF00]/30 hover:border-[#B8FF00] hover:shadow-[0_0_20px_#B8FF00]/30 transition-all duration-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-sm text-gray-300">
              Can I visit the GameNexus office or studio?
            </div>
            <div className="collapse-content text-sm text-gray-400 ">
              We appreciate your enthusiasm! However, GameNexus does not
              currently offer public studio or office tours. Our team is focused
              on creating great gaming experiences.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#1b2433]  border border-[#B8FF00]/30 hover:border-[#B8FF00] hover:shadow-[0_0_20px_#B8FF00]/30 transition-all duration-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-sm text-gray-300">
              Do you offer internships or part-time jobs?
            </div>
            <div className="collapse-content text-sm text-gray-400">
              Yes! Any available internships or part-time positions will be
              announced on our official Career Page. Follow our social media for
              updates.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#1b2433]  border border-[#B8FF00]/30 hover:border-[#B8FF00] hover:shadow-[0_0_20px_#B8FF00]/30 transition-all duration-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-sm text-gray-300">
              I’m a professional in design, music, or testing. Can I collaborate
              with GameNexus?
            </div>
            <div className="collapse-content text-sm  text-gray-300">
              We handle our internal development and partnerships in-house. We
              appreciate your interest and support!
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#1b2433]  border border-[#B8FF00]/30 hover:border-[#B8FF00] hover:shadow-[0_0_20px_#B8FF00]/30 transition-all duration-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-sm">
              Can I create a fan website or community for GameNexus?
            </div>
            <div className="collapse-content text-sm text-gray-400 ">
              Absolutely! We love seeing fans express their creativity. Just
              follow our Fan Content Policy and keep it non-commercial.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#1b2433]  border border-[#B8FF00]/30 hover:border-[#B8FF00] hover:shadow-[0_0_20px_#B8FF00]/30 transition-all duration-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-sm">
              Where can I play GameNexus games?
            </div>
            <div className="collapse-content text-sm  text-gray-300">
              You can browse, download, and play our games directly from the
              GameNexus website or app (coming soon).
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#1b2433]  border border-[#B8FF00]/30 hover:border-[#B8FF00] hover:shadow-[0_0_20px_#B8FF00]/30 transition-all duration-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-sm">
              Can I monetize videos featuring GameNexus games?
            </div>
            <div className="collapse-content text-sm  text-gray-300">
              Yes, you can create and monetize gameplay videos, reviews, and
              streams that include GameNexus content — as long as they follow
              our Fan Content Guidelines.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#1b2433]  border border-[#B8FF00]/30 hover:border-[#B8FF00] hover:shadow-[0_0_20px_#B8FF00]/30 transition-all duration-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-sm text-gray-300">
              Does GameNexus sponsor gaming tournaments or events?
            </div>
            <div className="collapse-content text-sm text-gray-400">
              At this time, we are not offering sponsorships for tournaments or
              eSports events. We may explore partnerships in the future.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#1b2433]  border border-[#B8FF00]/30 hover:border-[#B8FF00] hover:shadow-[0_0_20px_#B8FF00]/30 transition-all duration-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-sm text-gray-300">
              Do you provide scholarships or student programs?
            </div>
            <div className="collapse-content text-sm text-gray-400">
              Not currently. However, we are exploring educational
              collaborations with local institutions in Bangladesh to support
              upcoming developers.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#1b2433]  border border-[#B8FF00]/30 hover:border-[#B8FF00] hover:shadow-[0_0_20px_#B8FF00]/30 transition-all duration-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-sm text-gray-300">
              I’m a student researching the gaming industry. Can I interview
              your developers?
            </div>
            <div className="collapse-content text-sm text-gray-400">
              We appreciate your interest! Due to high demand, we’re unable to
              accommodate direct interviews. However, you can find insights from
              our developers on our blog and YouTube.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#1b2433]  border border-[#B8FF00]/30 hover:border-[#B8FF00] hover:shadow-[0_0_20px_#B8FF00]/30 transition-all duration-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-sm text-gray-300">
              My company wants to make a movie, comic, or merchandise based on
              your games. How can we contact you?
            </div>
            <div className="collapse-content text-sm text-gray-400">
              Thank you for your interest! At this time, GameNexus is not
              seeking additional licensing or media partners. You may, however,
              review our Fan Content Policy for general guidelines on
              collaborations.
            </div>
          </div>
        </div>
      </div>
      <div className="divider bg-[#B8FF00]/20 h-px my-8"></div>

      <div className="bg-linear-to-br rounded-2xl from-[#0f0f0f] via-[#121212] to-[#191919] px-4 py-5 mx-auto border border-[#B8FF00]/30 shadow-[0_0_25px_#B8FF00]/10 shadow-lg hover:shadow-[0_0_10px_#B8FF00] transition-all duration-300 flex flex-row justify-between items-center text-center md:text-start">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-semibold text-2xl text-white mb-3 "
          >
            <span className="border-b-2 border-[#B8FF00] pb-1 secondary-font">
              Contact
            </span>
          </motion.h3>

          <div className="space-y-1 text-gray-400 text-base mt-5">
            <p className="font-semibold text-gray-300 text-lg ">
              GameNexus Interactive Ltd.
            </p>
            <p className="flex gap-2">
              <span className="font-medium text-gray-300 flex gap-1 items-center">
                <MdOutlineMailOutline color="#B8FF00" size={17} />
                Email:{" "}
              </span>
              support@GameNexus.com
            </p>
            <p className="flex gap-2 ">
              <span className="font-medium text-gray-300 flex gap-1 items-center">
                <TiPhoneOutline color="#B8FF00" size={17} />
                Phone:{" "}
              </span>
              +880 1712-345678
            </p>
            <p className="flex gap-2">
              <span className="font-medium text-gray-300 flex gap-1 items-center">
                {" "}
                <MdOutlineLocationOn color="#B8FF00" size={18} /> Address:{" "}
              </span>
              Road #12, Dhanmondi, Dhaka – 1209, Bangladesh
            </p>
          </div>
        </div>
        <img className="w-60 hidden md:block" src={gamingConsole} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
