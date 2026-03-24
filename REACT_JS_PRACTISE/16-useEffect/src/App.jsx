import React from 'react';
import {useState , useEffect} from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  useEffect(function(){
    console.log('Side stack process')
  },[num]) // ider num bang gya he dependencies to jab num increment hoga tab hi useEffect chalega 

  return (
    <div>
      <h1>{num}</h1>
    <button onClick={()=>{
      setNum(num + 1)
    }}>Plus</button>
    </div>
  )
};

export default App;
