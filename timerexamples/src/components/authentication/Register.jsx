import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const route = useNavigate()
  return (
    <div>
      <div className='container-sm mx-auto d-flex flex-column align-self-center  w-25   '>
      <h1>Register Page</h1>
      <form action="" className='form d-flex flex-column text-align-start'>
      <span>Name  <input class="form-control m-2 " type="text" /></span>
      <span>Role <input class="form-control m-2" type="text" /></span>
        <span>Email  <input class="form-control m-2" type="email" /></span>
        <span>Password  <input type="password" class="form-control m-2"/></span>
        <button className='btn btn-primary  align-self-center'>Submit</button>
        <button onClick={()=> route("/")} className='btn btn-primary  align-self-center'>Sign In</button>

      </form>
      </div>
    </div>
  )
}

export default Register