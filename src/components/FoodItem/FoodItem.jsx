import './FoodItem.css';

import React, { useContext } from 'react';

import { assets } from '../../../public/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {
    const { cartItems, addToCart, removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="image"/>
        {!cartItems[id]
            ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="add_icon" />
            : <div className="food-item-counter">
                <img className='remove' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="remove_icon"/>
                <p>{cartItems[id]}</p>
                <img className='' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="green_icon"/>
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="rating_starts"/>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem;
