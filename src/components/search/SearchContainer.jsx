import React from "react";
import SearchInput from "./SearchInput";
import SearchLabel from "./SearchLabel";

const SearchContainer = () => {
  return (
    <div className="search-container">
      <SearchLabel />
      <SearchInput />
    </div>
  );
};

export default SearchContainer;
