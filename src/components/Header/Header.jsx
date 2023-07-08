import React from 'react';
import Search from '../Search/Search';
import './Header.css';
import Cart from '../Cart/Cart';


function Header(){
  return(
    <header className='header'>
      <div className='container'>
        <Search />
        <Cart />
      </div>
    </header>
      
  );

}

export default Header;