import React from "react";
import Navbar from "./Navbar";
import UpperNavbar from "./UpperNavbar";

const Header = () => {
  return (
    <div className="bg-accent">
      <UpperNavbar />
      <Navbar />
    </div>
  );
};

export default Header;
