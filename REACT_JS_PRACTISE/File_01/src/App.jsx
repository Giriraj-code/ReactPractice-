import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let h1 = "Hello Vite + React!";
  const h2 = 56;
    return <>
    <div>
      <h1>{h1}</h1>
      <h2>{h2}</h2>
      {/* <button  onClick={h2}>{h2 = 34}</button> */}
    </div>
    </>
}

export default App
