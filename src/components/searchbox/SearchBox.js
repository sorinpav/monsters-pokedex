import React from 'react';
import './SearchBox.css';

function SearchBox({ placeholder, handleChange }) {
  return (
    <div className='search-box'>
      <input
        className='input center'
        type='text'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
