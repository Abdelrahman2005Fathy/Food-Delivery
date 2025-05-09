import './Footer.css';

import React from 'react';

import { assets } from '../../../public/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src="/mainLogo.png" alt="logo"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sunt aut quasi! Nemo nesciunt, tempore iure vel consectetur illo officia provident impedit error vero eos quidem repellat corrupti esse? Reprehenderit?</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook_icon"/>
            <img src={assets.twitter_icon} alt="twitter_icon"/>
            <img src={assets.linkedin_icon} alt="linkedin_icon"/>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2025 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer;