import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Ensure the path to your logo image is correct

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
        <li><Link to="/" className='nav-link'>Home</Link></li>
        <li><Link to="/about" className='nav-link'>About</Link></li>
        <li><Link to="/how-to-buy" className='nav-link'>How To Buy</Link></li>
        <li><Link to="/tokenmonic" className='nav-link'>Tokenmonic</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
