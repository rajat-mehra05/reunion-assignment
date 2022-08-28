import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { GiBathtub } from "react-icons/gi";
import { HiOutlineSparkles } from "react-icons/hi";
import { TbDimensions } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  addMyFavsHandler,
  removeMyFavsHandler,
} from "../../features/favoriteSlice";
import "./cardStyle.css";

const Card = ({ content }) => {
  const dispatch = useDispatch();
  const { myFavs } = useSelector((state) => state.favorites);

  function isFavorite(id) {
    myFavs.find((item) => item.id === id);
  }

  return (
    <div>
      <div className="card-container">
        <div className="card-pic">
          <img src={content.image} alt={content.name} loading="lazy" />
          {content.popular ? (
            <>
              <div className="popular-badge">
                <HiOutlineSparkles />
                <span> POPULAR </span>
              </div>
              <div className="popular-badge-foot"></div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="card-body">
          <div className="card-header">
            <div className="card-price">
              <h1> $ {content.price} </h1>
              <span className="month">/month </span>
            </div>

            {isFavorite(content.id) ? (
              <div
                // className="fav-icon filled"
                onClick={() => dispatch(removeMyFavsHandler(content.id))}
              >
                <AiFillHeart />
              </div>
            ) : (
              <div
                // className="fav-icon"
                onClick={() => dispatch(addMyFavsHandler(content))}
              >
                <AiOutlineHeart />
              </div>
            )}
          </div>
          <div className="card-address">
            <h2> {content.name} </h2>
            <h4> {content.streetAddress} </h4>
          </div>
          <div className="card-footer">
            <div className="room-details">
              <BiBed className="icon" />
              <span> {content.roomDetails.bed} Beds </span>
            </div>
            <div className="room-details">
              <GiBathtub className="icon" />
              <span> {content.roomDetails.bathroom} Bathrooms </span>
            </div>
            <div className="room-details">
              <TbDimensions className="icon" />
              <span>
                {" "}
                {content.roomDetails.dimension} m<sup>2</sup>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
