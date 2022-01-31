import React from 'react';

import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className='app__navbar'>
    
    <div className='app__navbar-logo'>
<img src={images.gericht} alt='app logo'/>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensasns'><a href="#home">Home</a> </li>
      <li className='p__opensasns'><a href="#about">About</a> </li>
      <li className='p__opensasns'><a href="#menu">Menu</a> </li>
      <li className='p__opensasns'><a href="#awards">Awards</a> </li>
      <li className='p__opensasns'><a href="#contacts">Contacts</a> </li>
    </ul>
  </nav>
);

export default Navbar;
