// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import './Navbar.css'
// import {assets} from '../../assets/assets'
// import Home from '../../pages/Home/Home';
// const Navbar = ({setShowLogin}) => {
//   const [menu,setMenu]= useState("home");
//   const handleSignInCLick =()=>{
//     setShowLogin(true);
//   };

//   return (
//     <div className='navbar'>

//         <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
//         <ul className='navbar-menu'>
//           <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":"">Home</Link>
//           <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":"">Menu</a>
//           <a href="#app-download" onClick={()=>setMenu("mobileapp")} className={menu==="mobileapp"?"active":"">Mobileapp</a>
//           <a href="#contactus" onClick={()=>setMenu("contactus")} className={menu==="contactus"?"active":"">Contactus</a>
//         </ul>
//         <div className='navbar-right'>
//           <img src={assets.search_icon} alt="" srcset="" />
//         <div className='navbar-search-icon'>
//           <Link to='/cart'>
//           <img src={assets.basket_icon} alt="" srcset="" />
//           </Link>
//           <div className='dot'></div>
//         </div>
//         <button onClick={handleSignInCLick}>SignIn</button>
//         </div>
//     </div>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');

  const handleSignInClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => setMenu('home')}
            className={menu === 'home' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => setMenu('menu')}
            className={menu === 'menu' ? 'active' : ''}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            onClick={() => setMenu('mobileapp')}
            className={menu === 'mobileapp' ? 'active' : ''}
          >
            Mobileapp
          </a>
        </li>
        <li>
          <a
            href="#contactus"
            onClick={() => setMenu('contactus')}
            className={menu === 'contactus' ? 'active' : ''}
          >
            Contactus
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={handleSignInClick}>SignIn</button>
      </div>
    </div>
  );
};

export default Navbar;