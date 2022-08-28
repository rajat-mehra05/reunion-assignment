import React from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container" onClick={() => navigate("/")}>
      <div className="hero-icon">
        <FaEnvelopeOpen />
      </div>
      <div className="hero-label">Estatery</div>
    </div>
  );
};

export default Hero;
