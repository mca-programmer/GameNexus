import React from "react";
import Banner from "../components/Banner";
import PopularGames from "../components/PopularGames";
import NewsLetter from "../components/NewsLetter";
import CategoriesSection from "../components/Categories";
import FeaturedNews from "../components/FeaturedNews";

const Home = () => {
  return (
    <div className="px-4 md:px-8 lg:px-10 pt-19">
      <title>Home | GameNexus</title>
      <Banner></Banner>
      <PopularGames></PopularGames>
      <CategoriesSection></CategoriesSection>
      <FeaturedNews></FeaturedNews>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
