import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <img src={logo} alt='Logo' className='logo' />
      <ul className='nav-links'>
        <li>
          <Link to="home" smooth={true} duration={500} className='nav-link'>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className='nav-link'>
            About
          </Link>
        </li>
        <li>
          <Link to="how-to-buy" smooth={true} duration={500} className='nav-link'>
            How To Buy
          </Link>
        </li>
        <li>
          <Link to="tokenmonic" smooth={true} duration={500} className='nav-link'>
            Tokenmonic
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
