import React from 'react'
import {Link} from "react-router-dom";
import classes from "../components/Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={classes.navbar}>
       <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/news">News</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
       </ul>
    
    </nav>
  )
}
