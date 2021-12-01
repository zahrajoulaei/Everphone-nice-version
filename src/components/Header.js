import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const  Header = () => {
  return (
    <div className="header">
        <div className="header-links">
          <Link
            className="header-link"
            to="/"
          >
            Home Page
          </Link>
        </div>
        <img className="image" src={logo} alt="logo" />
    </div>
  );
}

export default Header;