import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Sign Up');

  const handleClose = () => {
    setShowLogin(false);
  };

  return (
    <div className="login-popup">
      <form className="lpc">
        <div className="lpt">
          <h2>{currState}</h2>
          <img onClick={handleClose} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="lpi">
          {currState === 'Login' ? null : (
            <input type="text" className="text" placeholder="Your name" required />
          )}
          <input type="email" className="email" placeholder="Your email" required />
          <input type="password" className="password" placeholder="Password" required />
        </div>
        <button>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
        <div className="lpcc">
          <input type="checkbox" required />
          <p>By Continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === 'Login' ? (
          <p>
            Create a new account
            <span onClick={() => setCurrState('Sign Up')}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account
            <span onClick={() => setCurrState('Login')}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;