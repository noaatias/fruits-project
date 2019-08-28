import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import "./Navbar.css";

import React, {Fragment} from "react";

const Navbar = () => {
  const Links = (
    <ul>
      <li>
        <Link to="/">all the fruits</Link>
      </li>
      <li>
        <Link to="/Favorites">favorites</Link>
      </li>
    </ul>
  );

  
  return (
    <div>
      <nav className="navbar ">
        <h1>
          <Link to="/" className="title">
            <i className="title" /> all the fruits
          </Link>
          
          <Link to="/favorites" className="favorites">
            <i className="favorites" /> favorites
          </Link>
        </h1>
        
        
      </nav>
    </div>
  );
};
export default Navbar;

