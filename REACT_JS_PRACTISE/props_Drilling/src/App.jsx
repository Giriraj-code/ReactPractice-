import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
 return(
  <div className="Parent">
  <Card user="raman" age={43} img="https://images.unsplash.com/photo-1743105351262-3f9e6944920a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
  <Card user="aman" age="233" img="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>
  <Card user="chaman" age="234" img="https://images.unsplash.com/photo-1763198302381-ebffcec5410f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>

  </div>
 )
}

export default App
