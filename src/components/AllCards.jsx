import React from 'react'
import Cards from './Cards'
import './CSS/AllCards.css'
import health from '../assets/cardiogram.png'
import travel from '../assets/travel.png'
import edu from '../assets/notebook.png'
import user from '../assets/user (5).png'
import food from '../assets/fast-food.png'

const AllCards = () => {
  return (
    <div className='AllCards' id='AllCards'>
        <Cards title="Add Producs" url={health}/>
        <Cards title="All Products" url={travel}/>
        <Cards title="Manage Products" url={edu}/>
        <Cards title="About us" url={user}/>
       
    </div>
  )
}

export default AllCards