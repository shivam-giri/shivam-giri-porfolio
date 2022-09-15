import React, { useState } from "react";
import { HiHome } from 'react-icons/hi';
import { HiUser } from 'react-icons/hi';
import {FaBookReader} from 'react-icons/fa';
import {MdSummarize} from 'react-icons/md';
import {AiFillProject} from 'react-icons/ai';
import {RiMessage2Fill} from 'react-icons/ri';



import './Nav.css';

const Nav = () =>{
  const [activeNav, setActiveNav]  = useState('#')
  return(
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
       {/* <i className="fa fa-home"></i> */}
       <HiHome />
      </a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
      {/* <i className="fa fa-user"></i> */}
      <HiUser />
      </a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
      {/* <i className="fa fa-address-book"></i> */}
      <FaBookReader />
      </a>
      <a href="#summary" onClick={()=> setActiveNav('#summary')} className={activeNav === '#summary' ? 'active' : ''}>
      {/* <i className="fa fa-user"></i> */}
      <MdSummarize />
      </a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
      {/* <i className="fa fa-user"></i> */}
      <AiFillProject />
      </a>
      
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
      {/* <i className="fa fa-commenting"></i> */}
      <RiMessage2Fill />
      </a>
    </nav>
  )
}

export default Nav;