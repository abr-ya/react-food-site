import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import logo from '../../assets/logo.png';
import './navbar.scss';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleNavbar = () => {
    setShowLinks((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={showLinks ? 'open' : 'close'}>
        <img src={logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button type="button" onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
