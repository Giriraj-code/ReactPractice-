import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  function increase(){
    setCount(count + 1)
  }
   function Decrese(){
    if(count>0){
      setCount(count - 1)
    }else{
      alert("Count cannot be negative")
    }
  }
  return (
    <div>
      <h1>Count: {count}</h1>
   <button onClick={increase}>Increase</button>
   <button onClick={Decrese}>Decrese</button>
    </div>
  )
}

export default App