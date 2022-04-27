import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/" data-testid="home-link">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/AboutUs" data-testid="about-link">
                About Us
              </NavLink>
              <NavLink className="nav-link" to="/Form" data-testid="form-link">
                Form
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
