import React, { useEffect, useState } from 'react'
import './CSS/Dashboard.css'
import { FaCirclePlus } from "react-icons/fa6";
import AllCards from './AllCards';
import { Navigate } from 'react-router-dom';
import AddIncome from './AddIncome';
import Intro from './Intro';

const Dashboard = () => {
  useEffect(() => {
    verify();
  }, [])
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    console.log(isFormOpen);
    setIsFormOpen(!isFormOpen);
  };

  const verify = async () => {
    if (localStorage.getItem("token") === null) {
      setTimeout(() => {
        Navigate('/login');


      }, 2000)
      message('Login to your account first')

    }
  }
  return (
    <div id='dashboard'>
        <Intro/>
        {isFormOpen && <AddIncome setIsFormOpen={setIsFormOpen} />  }
        <AllCards/>
    </div>
  )

}

export default Dashboard
