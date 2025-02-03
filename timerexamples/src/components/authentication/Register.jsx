import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Register = ( { data , setData }) => {
  const [updatedata , setUpdatedata ] = useState([]);
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [pass , setPass] = useState("")
  const [role , setRole] = useState("")
  const [age , setAge] = useState(null)
  const [newData , setNewData] = useState({})
  
  // console.log(data);

  function handelSubmit(e){
       e.preventDefault();
       const newData = {name , email , pass , role , age}
       setNewData(newData);
       console.log(newData , "Updated newData");
       if(Object.keys(newData).length != 0) setData((prev)=>[...prev , newData]);
       console.log(data , "Prop Data");
      //  console.log(updatedata , "Updated Data");
      route('/')
       
  }
  
  const route = useNavigate()
  return (
    <div>
      <div className='container-sm mx-auto d-flex flex-column align-self-center  w-25   '>
      <h1>Register Page</h1>
      <form action="" onSubmit={handelSubmit} className='form d-flex flex-column text-align-start'>
      <span>Name  <input
      onChange={(e)=> setName(e.target.value)}
      class="form-control m-2 " type="text" /></span>
      <span>Age  <input 
      onChange={(e)=> setAge(e.target.value)}
      type="Number" class="form-control m-2"/></span>
      <span>Role <input
      onChange={(e)=> setRole(e.target.value)}
      
      class="form-control m-2" type="text" /></span>
        <span>Email  <input 
      onChange={(e)=> setEmail(e.target.value)}
        
        class="form-control m-2" type="email" /></span>
        <span>Password  <input
      onChange={(e)=> setPass(e.target.value)}
        type="password" class="form-control m-2"/></span>

        <button  type='submit' className='btn btn-primary  align-self-center'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Register