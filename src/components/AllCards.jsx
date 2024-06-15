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
        <Cards title="Health" url={health}/>
        <Cards title="Travel" url={travel}/>
        <Cards title="Education" url={edu}/>
        <Cards title="Personal" url={user}/>
        <Cards title="Food" url={food}/>
       
    </div>
  )
}

export default AllCards