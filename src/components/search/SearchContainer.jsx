import React from "react";
import SearchInput from "./SearchInput";
import SearchLabel from "./SearchLabel";
import "./searchStyles.css";

const SearchContainer = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-container">
      <SearchLabel />
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default SearchContainer;
