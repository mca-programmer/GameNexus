import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import game from "../assets/Image/game.png";
import consol from "../assets/Image/consol.jpg";

import halloween from '../assets/Image/Halloween2.jpg'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";

const Banner = () => {
  return (
    <section className="my-15">
      <div className="container mx-auto ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        //   navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative w-full h-[450px] md:h-[550px]">
              <img src={halloween} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white space-y-5">
                <h2 className="text-3xl  md:text-5xl font-black gradient-text">
                  Halloween sale
                </h2>
                <p className="max-w-xl text-xl">
                  Unlock haunting deals and save up to 80% this Halloween! Plus,
                  earn 20% back in spooky Epic Rewards!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[450px] md:h-[550px]">
              <img src={game} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white space-y-5">
                <h2 className="text-3xl  md:text-5xl font-black text-[#9cc92a]">
                  Play If You Dare!
                </h2>
                <p className="max-w-xl text-xl">
                  This Halloween, unlock frighteningly fun free games — no
                  tricks, just treats! Dive into spooky adventures and earn
                  rewards while you play!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[450px] md:h-[550px]">
              <img src={consol} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white space-y-5">
                <h2 className="text-3xl  md:text-5xl font-black text-blue-800">
                  Frightfully Good Offers!
                </h2>
                <p className="max-w-xl text-xl">
                  Monstrous discounts up to 80% off on your favorite picks — and
                  20% back in chilling Epic Rewards!
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
