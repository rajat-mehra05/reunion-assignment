import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../components/card/Card";

const Favourites = () => {
  const { myFavs } = useSelector((state) => state.favorites);
  const navigate = useNavigate();

  return (
    <div className="fav-container">
      <>
        {myFavs.length === 0 ? (
          <section className="empty-fav-section">
            <h1> You haven't marked your items as favorites yet! </h1>
            <button className="signup-btn" onClick={() => navigate("/")}>
              {" "}
              Go back{" "}
            </button>
          </section>
        ) : (
          myFavs.map((item, index) => (
            <section className="fav-section">
              <Card content={item} key={index} />
            </section>
          ))
        )}
      </>
    </div>
  );
};

export default Favourites;
