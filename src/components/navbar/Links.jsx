import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./styles.css";

const Links = () => {
  return (
    <div className="links-container">
      <ul className="lists">
        <li className="item active">Rent</li>
        <li>Buy</li>
        <li>Sell</li>
        <li>
          Manage Property
          <span>
            <RiArrowDropDownLine />
          </span>
        </li>
        <li>
          Resources
          <span>
            <RiArrowDropDownLine />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Links;
