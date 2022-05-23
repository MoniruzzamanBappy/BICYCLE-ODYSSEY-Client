import React from "react";
import Banner from "./Banner";
import Parts from "./Parts";
import BusinessSummary from "./BusinessSummary";
import Footer from "./../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <BusinessSummary />

      <Footer />
    </div>
  );
};

export default Home;
