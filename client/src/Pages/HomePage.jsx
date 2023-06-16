import React from "react";
import { Header, Hero, HomePageCategories } from "../components";
import BestDeals from "../components/HomePage/BestDeals";
function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <HomePageCategories />
      <BestDeals />
    </div>
  );
}

export default HomePage;
