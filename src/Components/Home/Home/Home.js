import React from "react";
import Header from "../../Shared/Navbar/Header";
import AppliancesBanner from "../appliancesBanner/AppliancesBanner";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AppliancesBanner></AppliancesBanner>
    </div>
  );
};

export default Home;
