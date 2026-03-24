import React from 'react'
import { useState } from 'react'
const Practise1 = () => {
    const [age, setAge] = useState(18);
    function increment(){
        setAge(a=>a+1)
    }
  return (
    <>
    <h2>Your age is : {age}</h2>
    <button onClick={()=>{
        increment();
        increment();
        increment();
    }}>+3</button>

    <button onClick={()=>{
        increment();
    }}>+1</button>
    </>
    
  )
}

export default Practise1