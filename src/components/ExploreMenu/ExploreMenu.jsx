import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Menu</h1>
      <p className="explore-menu-text"></p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => setCategory((prev) => prev === item.menu_image)}
              key={index}
              className={`explore-menu-list-item ${
                category === item.menu_image ? 'selected' : ''
              }`}
            >
              <img
                className={category === item.menu_image ? 'active' : ''} // Corrected conditional class
                src={item.menu_image}
                alt={item.menu_name}
                srcSet=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
/*const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'></p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev==item.menu_image))} key={index} className='explore-menu-list-item'>
                        <img className={}src={item.menu_name} alt="" srcset="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        </div>
  )
}

export default ExploreMenu
{menu_list.map((item, index) => {
    return (
      <div
        onClick={() => setCategory((prev) => prev === item.menu_image)}
        key={index}
        className="explore-menu-list-item"
      >
        <img className={} src={item.menu_name} alt="" srcSet="" />
        <p>{item.menu_name}</p>
      </div>
    );
  })}*/