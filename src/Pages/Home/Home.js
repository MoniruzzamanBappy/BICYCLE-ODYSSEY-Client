import React from "react";
import Banner from "./Banner";
import Parts from "./Parts";
import BusinessSummary from "./BusinessSummary";
import Footer from "./../Shared/Footer/Footer";
import ReviewsHome from "./ReviewsHome";

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <BusinessSummary />
      <ReviewsHome/>
      <Footer />
    </div>
  );
};

export default Home;
