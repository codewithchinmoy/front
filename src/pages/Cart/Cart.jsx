import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/eContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-item" key={item._id}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            );
          }
          return null; // Return null if the item is not in the cart
        })}
      </div>
    </div>
  );
};

export default Cart;
// import React , {useContext} from 'react'
// import './Cart.css'
// import {StoreContext} from '../../context/StoreContext'
// const Cart = () => {
//     const {cartItems,food_list,removeFromCart}= useContext(StoreContext);
//   return (
//     <div className='cart'>
//         <div className="cart-items">
//             <div className="cart-items-title">
//                 <p>Items</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Cart