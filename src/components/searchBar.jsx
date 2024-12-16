import React from "react";

const SearchBar = ({onSearch}) => (
    <input type="text" placeholder="Rechercher un film..." onChange={(e) => onSearch(e.target.value)} /> );
  
  export default SearchBar;
  