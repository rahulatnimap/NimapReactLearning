import React from 'react'
import { Router, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const route = useNavigate()
   function handleLogout(){
    route('/');
    window.localStorage.clear('token')
   }
  return (

    <div>Dashboard 
      <button className='btn-danger' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard