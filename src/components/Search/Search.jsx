import React, { useState, useContext } from 'react';
import {BsSearch} from 'react-icons/bs';
import './Search.css';
import fetchProducts from '../../api/fetch-products';
import AppContext from '../../context/AppContext';

function Search(){
  const { setProducts, setLoading } = useContext(AppContext);

  const  [searchValue, setSearchValue] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
 
  };

  return(
    <form className='search-menu' onSubmit={handleSearch}>
      {name}
      <input 
        type='search' 
        value={ searchValue }
        placeholder='Buscar produtos' 
        className='search__input' 
        onChange={({target}) => setSearchValue(target.value)} 
        required>

      </input>
      <button type='submit' className='search__button'>
        <BsSearch />
      </button>
    </form>

  );
}

export default Search;