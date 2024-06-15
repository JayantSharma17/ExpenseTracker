import React, { useEffect } from 'react'

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
    <div>Dashboard</div>
  )

}

export default Dashboard
