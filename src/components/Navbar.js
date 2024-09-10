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
    <div className="nav-wrapper relative z-50">
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
          <NavLink to="/about" className="nav-item">
            About Us
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
        <div className="flex flex-center items-center relative justify-center ">
          <h2>Login</h2>
          <NavLink to="/carts">
            <img src={Cart} className=" w-14 h-28 object-top cursor-pointer" />
            <h4 className="absolute top-0 -right-4">{cart.length}</h4>
          </NavLink>
          <h2 className="absolute text-red-700 font-bold -right-5 text-center text-2xl px-2"></h2>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
