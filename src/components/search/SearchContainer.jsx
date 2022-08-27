import React from "react";
import SearchInput from "./SearchInput";
import SearchLabel from "./SearchLabel";
import "./searchStyles.css";

const SearchContainer = () => {
  return (
    <div className="search-container">
      <SearchLabel />
      <SearchInput />
    </div>
  );
};

export default SearchContainer;
