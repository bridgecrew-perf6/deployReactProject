import React from 'react'
import {Link, useParams} from "react-router-dom";
import Person1 from './Person1';
import Person2 from './Person2';
import Person3 from './Person3';
import Person4 from './Person4';
export default function Person() {
   const {personId} =useParams();   
  return (
    <div>
        {personId==1&&<Person1/>}
        {personId==2&&<Person2/>}
        {personId==3&&<Person3/>}
        {personId==4&&<Person4/>}


        <Link to="/"><button className='btn'>back to home</button></Link>
    </div>
  )
}
