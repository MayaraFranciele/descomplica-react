import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Provider from './context/Provider';
import CartButton from './components/CartButton/CartButton';

function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <CartButton />
    </Provider>
    
   
  );
}

export default App;


