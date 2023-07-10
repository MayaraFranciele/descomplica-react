import React, { useContext } from 'react';
import './CartButton.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function CartButton(){
  const {cartItems, cartVisible} = useContext(AppContext);
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);
  return(
   
    <section className={`cart ${cartVisible ? 'cart--active' : ''}`}>
      <div className='cart-items'>
        { cartItems.map((cartAdd) => <CartItem key={cartAdd.id} data={cartAdd}/>)}

       
      </div> 
      <div className='cart-resumo'>{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default CartButton;