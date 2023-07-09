import React from 'react';
import './ProductCard.css';
import { BsCartPlusFill } from 'react-icons/bs';
import { PropTypes } from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';



function ProductCard( {data} ){
  const { title, thumbnail, price } = data;


  return(
    <section className='product-card'>
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt='product' 
        className='card__img'>
      </img>
      <div className='card__infos'>
        <h2 className='card__price'>{formatCurrency(price, 'BRL')}</h2>
        <h2 className='card__title'>{title}</h2>
      </div>
      <button type='button' className='button__add'>
        <BsCartPlusFill />
      </button>
    </section>
  );
  
}

export default ProductCard;

ProductCard.propTypes = {
  data: PropTypes.shape({}),
}.isRequired;
