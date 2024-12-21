import React from 'react';
import './SearchBar.css'
const SearchBar = ({ onSearchChange }) => {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="search-bar-container">
    <input
       type="text"
       placeholder="Search by name, status or student ID"
       onChange={handleChange}
       className="search-bar"
       style={{ padding: '8px', width: '300px' }}
    />
  </div>
  );
};

export default SearchBar;
