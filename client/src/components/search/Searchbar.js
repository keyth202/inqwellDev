import React, { useState } from 'react';
import './searchbar.css';

const SearchBar = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = event => {
    
    setSearchTerm(event.target.value);

    setFilteredItems(items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ));
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm || ''}
        onChange={handleSearch}
      />
      {filteredItems.length > 0 && (
        <ul className="search-dropdown">
          {filteredItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
