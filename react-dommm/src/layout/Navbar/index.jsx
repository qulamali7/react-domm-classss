import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to={"/"} className={(navData)=>navData.isActive ? "active" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={(navData)=>navData.isActive ? "active" : ""}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className={(navData)=>navData.isActive ? "active" : ""}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/products"} className={(navData)=>navData.isActive ? "active" : ""}>Products</NavLink>
        </li>
        <li>
          <NavLink to={"/login"} className={(navData)=>navData.isActive ? "active" : ""}>Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
