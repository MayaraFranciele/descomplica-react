import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Cart.css';


function Cart(){
  return(
    <button type='button' className='cart__button'>
      <AiOutlineShoppingCart />
      <span className='cart-status'>1</span>
    </button>
  );

}

export default Cart;