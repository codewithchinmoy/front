
import './FoodItem.css';
import React, { useState } from 'react';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {itemCount === 0 ? ( // Check if itemCount is 0
          <img
            className="add"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt="Add Item"
          />
        ) : (
          <div className="food-item-counter">
            {itemCount}
            <button onClick={() => setItemCount((prev) => prev + 1)}>+</button>
            <button onClick={() => { if (itemCount > 0) setItemCount((prev) => prev - 1) }}>-</button>
            <img
            className="remove"
            onClick={() => { if (itemCount > 0) setItemCount((prev) => prev - 1) }}
            src={assets.remove_icon_red}
            alt="Remove Item"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating Stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;