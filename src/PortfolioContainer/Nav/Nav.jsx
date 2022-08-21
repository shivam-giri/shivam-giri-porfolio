import React, { useState } from "react";
import './Nav.css';

const Nav = () =>{
  const [activeNav, setActiveNav]  = useState('#')
  return(
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
       <i className="fa fa-home"></i>
      </a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
      <i className="fa fa-user"></i>
      </a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
      <i className="fa fa-address-book"></i>
      </a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
      <i className="fa fa-commenting"></i>
      </a>
    </nav>
  )
}

export default Nav;