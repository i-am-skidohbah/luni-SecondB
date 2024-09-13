import React, { useContext } from "react";
import "../App.css";
import { useState } from "react";
import { Avatar, Cart } from "../utilitis";

import { NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import logo1 from "../Assests/luni_logo_124503.png";

const Navbar = () => {
  const { cart } = useContext(ShopContext);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleMenuToggleClick = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  return (
    <div className="nav-wrapper relative z-50 md:px-12">
      <div className="grad-bar"></div>
      <nav
        className={`navbar ${isMobileNavActive ? "mobile-nav" : ""} sticky `}
      >
        <img
          src={logo1}
          className="object-top mt-2 w-32 h-32"
          alt="Company Logo"
        />
        <button
          className={`menu-toggle ${isMobileNavActive ? "is-active" : ""}`}
          onClick={handleMenuToggleClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav ${isSearchActive ? "search" : "no-search"}`}>
          <NavLink to="/" className="nav-item">
            {" "}
            Home
          </NavLink>

          <NavLink to="/products" className="nav-item">
            Products
          </NavLink>
          <NavLink to="/projects" className="nav-item">
            Projects
          </NavLink>
          <NavLink to="/traning" className="nav-item">
            Training
          </NavLink>
          <NavLink to="/contact" className="nav-item">
            Contact Us
          </NavLink>
          <li
            className="nav-item  
 search-icon"
            onClick={handleSearchClick}
          >
            <i className="fas fa-search"></i>
          </li>
          <input
            className={`search-input ${isSearchActive ? "search-active" : ""}`}
            type="text"
            placeholder="Search.."
          />
        </ul>
        <div className="md:flex flex-center items-center relative justify-center   hidden ">
          <h2 className="text-sm">Login</h2>
          <NavLink to="/carts">
            <img src={Cart} className=" w-10 h-10 object-top cursor-pointer" />
            <h4 className="absolute top-1 -right-1 ">{cart.length}</h4>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
