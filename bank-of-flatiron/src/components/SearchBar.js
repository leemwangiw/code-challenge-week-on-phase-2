import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search by description"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

export default SearchBar;
