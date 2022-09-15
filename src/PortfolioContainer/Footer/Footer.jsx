import React from "react";
import './Footer.css';

import Logo from '../../assests/Home/logo.png'

const Footer = () =>{
  return(
    <section id="footer">
      <footer>
        <a href="#" className="footer__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <div>
          <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experince</a></li>
            <li><a href="#summary">Summary</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="footer__socials">
            <a href="">Facebook</a>
            <a href="">Instagram</a>    
          </div>
          <div className="footer__copyright">
            <small>&copy; All right reserved</small>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer;