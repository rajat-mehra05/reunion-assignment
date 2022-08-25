import React from "react";
import ButtonContainer from "./buttons/ButtonContainer";
import Hero from "./Hero";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="left-nav">
        <Hero />
        <Links />
      </div>
      <div className="right-nav">
        <ButtonContainer />
      </div>
    </div>
  );
};

export default Navbar;
