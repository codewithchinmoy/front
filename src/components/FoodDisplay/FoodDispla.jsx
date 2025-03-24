import './FoodDisplay.css';
import React, { useContext } from 'react';

import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => { // Corrected component name
 
  const { food_list } = useContext(StoreContext); // Corrected useContext usage

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if ((category === "All" || category === item.category))
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name} // Assuming item has a 'name' property
              price={item.price} // Assuming item has a 'price' property
              description={item.description} // Assuming item has a 'description' property
              image={item.image} // Assuming item has an 'image' property
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;