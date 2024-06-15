import React, { useEffect } from 'react'
import './CSS/Dashboard.css'
import { FaCirclePlus } from "react-icons/fa6";

const Dashboard = () => {
  useEffect(() => {
    verify();
  }, [])

  const verify = async () => {
    if (localStorage.getItem("token") === null) {
      setTimeout(() => {
        navigate('/login');


      }, 2000)
      message('Login to your account first')

    }
  }
  return (
    <div id='dashboard'>
      <button id='addbut'>
        <div><FaCirclePlus /></div>
        <p>Add Income</p>
      </button>
    </div>
  )

}

export default Dashboard
