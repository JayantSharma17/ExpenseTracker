import React from 'react'
import Cards from './Cards'
import './CSS/AllCards.css'

const AllCards = () => {
  return (
    <div className='AllCards' id='AllCards'>
        <Cards />
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
       
    </div>
  )
}

export default AllCards