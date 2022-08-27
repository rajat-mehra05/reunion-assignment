import React from "react";

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
      <input
        value={searchQuery}
        className="searchInput"
        type="search"
        placeholder="Search with SearchBar"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
