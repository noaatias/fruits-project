import {Link} from "react-router-dom";

import "./Navbar.css";

import React from "react";

const Navbar = () => {
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
