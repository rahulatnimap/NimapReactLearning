import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Login = (prop) => {
  const route = useNavigate()

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  function handleSubmit(e){
        e.preventDefault()
        console.log(prop.data);
        let user = prop.data.find((ele => { return ele.mail === email && ele.pass === password}));
        if(!user){
          alert("Not a User! , No problem Become one")
          route("/Register")
          
        }else {
          window.localStorage.setItem("Token",1234);
          route("/dash")

        }
        
  }

  return (
    <div>
      <div className='container-sm mx-auto d-flex flex-column align-self-center  w-25   '>
      <h1>Login Page</h1>
      <form action="" className='form' onSubmit={handleSubmit}>
        <span>Email :- <input onChange={(e)=> setEmail(e.target.value)} class="form-control m-2" type="email" /></span>
        <span>Password :- <input type="password" onChange={(e)=> setPassword(e.target.value)} class="form-control m-2"/></span>
        <button className='btn btn-primary' type='submit'>Submit</button>
        <button onClick={(e)=> {e.preventDefault() ; route("/register")}} className='btn btn-primary' type='submit'>Register</button>

      </form>
      </div>
    </div>
  )
}

export default Login