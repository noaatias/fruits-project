import {Link} from "react-router-dom";

import "./Navbar.css";

import React from "react";

const Navbar = () => {
  return (
    <div className="all">
      <nav className="navbar ">
        <h1>
          <Link to="/" className="title">
            <i  /> All the fruits
          </Link>
          <Link to="/favorites" className="favorites">
            <i  /> Favorites
          </Link>
        </h1>
      </nav>
    </div>
  );
};
export default Navbar;
