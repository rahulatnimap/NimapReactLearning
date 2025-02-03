import React, { useRef, useState } from 'react'

const RefExamples = () => {
    const [start , setStart] = useState(null);
    const [now , setNow] = useState(null);
    const interval = useRef(null);

    function handleStart(){
        setStart(Date.now())
        setNow(Date.now())
        clearInterval(interval);
        interval.current =  setInterval(()=> {
              setNow(Date.now());
        }, 10)
    }

    let secondsPassed = 0;
    if(start !== null && now !== null){
        secondsPassed = (now-start) / 1000;
    }


    function handleStop(){
        clearInterval(interval.current);
        // setNow(secondsPassed * 1000);
    }

  return (
    <div>
        <h1>{secondsPassed}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default RefExamples