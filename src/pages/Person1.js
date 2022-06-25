import React from 'react'
import classes from "./AllPerson.module.css";
export default function Person1() {
  return (
    <div className={classes.person}>
        <div className="title-img">
        <h1>The Smart Dog</h1>
        <img src="https://picsum.photos/id/237/300/200" alt="" />
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus sequi dolor excepturi, consequuntur adipisci corrupti vel inventore minima omnis voluptates, fugiat tempore aspernatur cupiditate blanditiis dicta et, accusamus labore reiciendis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, similique voluptatibus quasi autem nisi, dolorum magnam officia, illum recusandae eaque ut reiciendis voluptate! Sunt laboriosam iste est omnis eos et.
        </p>
    </div>
  )
}
