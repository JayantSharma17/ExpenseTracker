import React from 'react'
import Cards from './Cards'
import './CSS/AllCards.css'
import edu from '../assets/notebook.png'
import user from '../assets/user (5).png'
import cubes from '../assets/cubes.png'
import add from '../assets/add-to-cart.png'
import mngProducts from '../assets/product-management.png'
import { Link } from 'react-router-dom'


const AllCards = () => {
  return (
    <div className='AllCards' id='AllCards'>

        <Cards className="cardBox" title="Add Producs" url={add}/>
  
     
        <Cards className="cardBox" title="All Products" url={cubes}/>

        <Cards className="cardBox" title="Manage Products" url={mngProducts}/>
        <Cards className="cardBox" title="Profile" url={user}/>
       
    </div>
  )
}

export default AllCards