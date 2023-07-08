import React, { useState } from 'react';
import {BsSearch} from 'react-icons/bs';
import './Search.css';

function Search(){
  const  [searchValue, setSearchValue] = useState('');
  return(
    <form className='search-menu'>
      <input 
        type='search' 
        placeholder='Buscar produtos' 
        className='search__input' 
        onChange={({target}) => setSearchValue(target.value)} 
        required>

      </input>
      {searchValue}
      <button type='submit' className='search__button'>
        <BsSearch />
      </button>
    </form>

  );
}

export default Search;