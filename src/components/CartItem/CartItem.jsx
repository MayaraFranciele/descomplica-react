import React, { useContext } from 'react';
import { BsCartXFill } from 'react-icons/bs';
import './CartItem.css';
import { PropTypes } from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';


function CartItem( {data} ){
  const { cartItems, setCartItems } = useContext(AppContext);
  const {id, thumbnail, title, price } = data;
  const handleRemove = () =>{
    const updateItems = cartItems.filter((item)=> item.id != id);
    setCartItems(updateItems);
    
  };
  return(
    <section className='cart-item'>
      <img src={thumbnail} 
        alt='imagem do produto' 
        className='cart-item-img'>
        
      </img>
      <div className='cart-item-conteudo'>
        <h3 className='cart-item-title'>{title}</h3>
        <h3 className='cart-item-price'>{formatCurrency(price, 'BRL')}</h3>
        <button type='button' className='button__remove' onClick={ handleRemove }>
          <BsCartXFill />
        </button>
      </div>
    </section>

  );
}

export default CartItem;

CartItem.propTypes = {
  data: PropTypes.object
}.isRequired;