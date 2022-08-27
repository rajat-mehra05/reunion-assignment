import React from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../../fakeData/data.json";
import {
  getDateInput,
  getLocation,
  getPriceRange,
  getPropertyType,
} from "../../features/filterSlice";
import {
  filterDate,
  filterLocation,
  filterPriceRange,
  filterPropertyType,
  filterSearchedData,
} from "../../utils/filterData";

import "./filterBoxStyles.css";

const FilterBox = ({ searchQuery, setPropertyInfo }) => {
  const dispatch = useDispatch();

  const { location, propertyType, priceRange, dateInput } = useSelector(
    (state) => state.filters
  );

  function setFilterData() {
    const filteredSearchedData = filterSearchedData(
      data.propertyData,
      searchQuery
    );

    const locationFilteredData = filterLocation(filteredSearchedData, location);

    const filterDateData = filterDate(locationFilteredData, dateInput);

    const propertyFilteredData = filterPropertyType(
      filterDateData,
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
            defaultValue={"DEFAULT"}
            name="location"
            id="location"
            onChange={(e) => dispatch(getLocation(e.target.value))}
          >
            <option value="DEFAULT" selected disabled hidden>
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
            onChange={(e) => dispatch(getDateInput(e.target.value))}
          />
        </div>
        <div className="right-border"></div>
        <div className="filters-section">
          <label htmlFor="priceRange"> Price Range </label>
          <select
            defaultValue={"DEFAULT"}
            name="priceRange"
            id="priceRange"
            onChange={(e) => dispatch(getPriceRange(e.target.value))}
          >
            <option value="DEFAULT" disabled hidden>
              Select Price
            </option>
            <option value="1000-3000">1k-3k</option>
            <option value="3001-5000">3k-5k</option>
            <option value="5001-7000">5k-7k</option>
          </select>
        </div>
        <div className="right-border"></div>
        <div className="filters-section">
          <label htmlFor=""> Property Type </label>
          <select
            defaultValue={"DEFAULT"}
            name="priceRange"
            id="priceRange"
            onChange={(e) => dispatch(getPropertyType(e.target.value))}
          >
            <option value="DEFAULT" disabled hidden>
              Select property
            </option>
            <option value="Flat">Flat</option>
            <option value="Industrial">Industrial</option>
            <option value="Villa">Villa</option>
          </select>
        </div>
        <div className="right-border"></div>
        <button
          className="search-btn"
          onClick={() => setFilterData(data.propertyData)}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default FilterBox;
