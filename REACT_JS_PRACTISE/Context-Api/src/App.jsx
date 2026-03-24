import React from 'react'
import { useState } from 'react';
import NavBar from './components/NavBar';
import Snowfall from "react-snowfall";

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div className='font-bold m-4'>Theme is {theme}
    <NavBar theme={theme} setTheme={setTheme}/>
            <Snowfall color="white  "/> 
    </div>
  )
}

export default App
