import React from 'react';
import {MdSearch} from 'react-icons/md';
import './SearchBar.css';

const SearchBar = ({searchHandler}) => {
  return (
    <div className="searchBar">
      <MdSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search your note..."
        onChange={(e) => searchHandler(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
