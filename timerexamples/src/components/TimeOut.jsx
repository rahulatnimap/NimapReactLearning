import React, { useState } from 'react'

const TimeOut = () => {

const [input , setInput] = useState("")
const [debounchinput , setDebounchinput] = useState("")

// let timer;
//   function handleChange(e){
//         setInput(e.target.value)
//         if (timer) clearTimeout(timer)
//           timer = setTimeout(()=>{
//              setDebounchinput(e.target.value)
//           },900) 
//   }

let timer ;
function handleDebounch(e){
    if(timer) clearTimeout(timer)
      timer = setTimeout(()=>{
    setDebounchinput(e.target.value)
    },1000)
}

  return (
    <div>
      <div className='box'>
        <h1>Debouncing & SetTimeout</h1>
        <input type="text" placeholder='typing..' onChange={handleDebounch} />
        <p>No Delay : {input} </p>
        <p>With Delay : {debounchinput}</p>
      </div>
    </div>
  )
}

export default TimeOut