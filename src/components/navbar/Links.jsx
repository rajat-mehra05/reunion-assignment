import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Links = () => {
  const links = [
    { id: 1, name: "Rent", link: "/" },
    { id: 2, name: "Buy", link: "/buy" },
    { id: 3, name: "Sell", link: "/sell" },
    { id: 4, name: "Manage Property", link: "/manage-property" },
    { id: 5, name: "Resources", link: "/resources" },
    { id: 6, name: "Favorites", link: "/favorites" },
  ];

  return (
    <div className="links-container">
      <ul className="lists">
        {links.map((item) => (
          <li key={item.id}>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "list-item active" : "list-item"
              }
              to={item.link}
            >
              {" "}
              {item.name}{" "}
            </NavLink>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
