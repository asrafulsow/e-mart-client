import React from "react";
import Navbar from "./Navbar";
import UpperNavbar from "./UpperNavbar";

const Header = () => {
  return (
    <div className="bg-accent">
      {/* <div className="container mx-auto px-4"> */}
      <UpperNavbar />
      <span className="header-hr"></span>

      <Navbar />
      {/* </div> */}
    </div>
  );
};

export default Header;
