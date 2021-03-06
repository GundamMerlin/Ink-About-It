import React from 'react'
import {Link} from "react-router-dom"

export default function Tattoo(props) {
  let data = props.tattoo.fields;
  
  return (
    <Link to={`/Details/${props.tattoo.id}`}>
      <div className="tattoo-card">
        <img src={data.image} alt={data.title}></img>
      </div>
    </Link>
  )
}
