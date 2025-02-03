import React from 'react'
import { Router, useNavigate } from 'react-router-dom'

const AuthNavbar = () => {
    const route = useNavigate()
    let token = window.localStorage.getItem("Token");
    function handleDashclick(){
        if(!token){
            alert("You Dont Have Access Login first");
            route("/")
        }else {
            route("/dash")
        }
    }

  return (
    <div className='nav'>
        <h3 onClick={()=> token ? alert("already logged in") : route("/") }>Login</h3>
        <h3 onClick={()=> token ? alert("already logged in") : route("/register") }>Register</h3>
        <h3 onClick={handleDashclick}>Dashboard</h3>
        <button onClick={()=> route('/useRef')}>Ref</button>
        <button onClick={()=> route('/useRefDom')}>RefDom</button>


    </div>
  )
}

export default AuthNavbar