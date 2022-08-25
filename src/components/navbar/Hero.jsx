import React from "react";
import { FaEnvelopeOpen } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-icon">
        <FaEnvelopeOpen />
      </div>
      <div className="hero-label">Estatery</div>
    </div>
  );
};

export default Hero;
