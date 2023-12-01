import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
        </ul>
    </div>
  )
}

export default Navbar