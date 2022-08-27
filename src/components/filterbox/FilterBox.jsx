import React from "react";
import Button from "../button/Button";
import "./filterBoxStyles.css";

const FilterBox = () => {
  return (
    <>
      <div className="filter-container">
        <div className="filters-section">
          <label htmlFor="location"> Location </label>
          <select name="location" id="location">
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option value="New York">New York</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Washington">Washington</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>
        <div className="right-border"></div>
        <div className="filters-section">
          <label htmlFor="date">When</label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Select Move-in Date"
          />
        </div>
        <div className="right-border"></div>
        <div className="filters-section">
          <label htmlFor="priceRange"> Price Range </label>
          <select name="priceRange" id="priceRange">
            <option value="none" selected disabled hidden>
              Select Price
            </option>
            <option value="10000-20000">1k-3k</option>
            <option value="20000-30000">3k-5k</option>
            <option value="30000-40000">5k-7k</option>
            <option value="40000-50000">7k-30k</option>
          </select>
        </div>
        <div className="right-border"></div>
        <div className="filters-section">
          <label htmlFor=""> Property Type </label>
          <select name="priceRange" id="priceRange">
            <option value="none" selected disabled hidden>
              Select property
            </option>
            <option value="Flat">Flat</option>
            <option value="Industrial">Industrial</option>
            <option value="Villa">Villa</option>
          </select>
        </div>
        <div className="right-border"></div>
        <Button className="search-btn"> Search </Button>
      </div>
    </>
  );
};

export default FilterBox;
