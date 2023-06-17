import React from "react";
import {
  Header,
  Hero,
  HomePageCategories,
  FeaturedProduct,
  Events,
  Footer,
  Sponsored,
} from "../components";
import BestDeals from "../components/HomePage/BestDeals";
function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <HomePageCategories />
      <BestDeals />
      <FeaturedProduct />
      <Events />
      <Sponsored />
      <Footer />
    </div>
  );
}

export default HomePage;
