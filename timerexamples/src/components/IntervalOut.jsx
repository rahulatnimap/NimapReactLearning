import React, { useEffect, useState } from 'react'

const IntervalOut = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hou, setHou] = useState(0);

  const date = new Date();
  let timer;
  function handlingTimer(){
     timer = setInterval(() => {
      setHou(() => date.getHours());
      setMin(() => date.getMinutes());
      setSec(() => date.getSeconds());
    }, 1000);
    
  }

  useEffect(()=>{
    handlingTimer();
    return ()=> clearInterval(timer)
  },[sec]);
  

  return (
    <div>
      <h1>{hou}/{min}/{sec}</h1>
    </div>
  )
}

export default IntervalOut