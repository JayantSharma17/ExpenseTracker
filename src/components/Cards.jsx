import React from 'react'
import dummyImd from "../assets/expenses.png"
import "./CSS/Cards.css"

const Cards = (props) => {
  return (
    <div className='cards'>
        <img src={props.url} alt="" />
        <p>{props.title}</p>
    </div>
  )
}

export default Cards