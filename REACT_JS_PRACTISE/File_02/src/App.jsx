import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const user = 'John Doe'
  return (
    <>
   <div className="card">
    <Card />
   </div>
    </>
  )
}

export default App
