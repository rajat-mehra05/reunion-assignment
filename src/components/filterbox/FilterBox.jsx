import React from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../../fakeData/data.json";
import {
  getLocation,
  getPriceRange,
  getPropertyType,
} from "../../features/filterSlice";
import {
  filterLocation,
  filterPriceRange,
  filterPropertyType,
  filterSearchedData,
} from "../../utils/filterData";
import Button from "../button/Button";

import "./filterBoxStyles.css";

const FilterBox = ({ searchQuery, setPropertyInfo }) => {
  const dispatch = useDispatch();

  const { location, propertyType, priceRange } = useSelector(
    (state) => state.filters
  );

  function setFilterData() {
    const filteredSearchedData = filterSearchedData(
      data.propertyData,
      searchQuery
    );

    const locationFilteredData = filterLocation(filteredSearchedData, location);
    const propertyFilteredData = filterPropertyType(
      locationFilteredData,
      propertyType
    );
    const priceFilteredData = filterPriceRange(
      propertyFilteredData,
      priceRange
    );

    setPropertyInfo(priceFilteredData);
  }

  return (
    <>
      <div className="filter-container">
        <div className="filters-section">
          <label htmlFor="location"> Location </label>
          <select
            name="location"
            id="location"
            onChange={(e) => dispatch(getLocation(e.target.value))}
          >
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
          <select
            name="priceRange"
            id="priceRange"
            onChange={(e) => dispatch(getPriceRange(e.target.value))}
          >
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
          <select
            name="priceRange"
            id="priceRange"
            onChange={(e) => dispatch(getPropertyType(e.target.value))}
          >
            <option value="none" selected disabled hidden>
              Select property
            </option>
            <option value="Flat">Flat</option>
            <option value="Industrial">Industrial</option>
            <option value="Villa">Villa</option>
          </select>
        </div>
        <div className="right-border"></div>
        <Button
          className="search-btn"
          onClick={() => setFilterData(data.propertyData)}
        >
          Search
        </Button>
      </div>
    </>
  );
};

export default FilterBox;
