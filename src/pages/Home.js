import React from 'react'
import classes from "./Home.module.css";
import {Link} from "react-router-dom";
export default function Home() {
  return (
    <div className={classes.homeContainer}>
         <Link to="/person/1" >
         <div className={`${classes.person1} ${classes.person}` }></div>
         </Link>
         <Link to="/person/2" >
         <div className={`${classes.person2} ${classes.person}` }></div>
         </Link>
         <Link to="/person/3" >
         <div className={`${classes.person3} ${classes.person}` }></div>
         </Link>
         <Link to="/person/4" >
         <div className={`${classes.person4} ${classes.person}` }></div>
         </Link>
         
    </div>
  )
}
