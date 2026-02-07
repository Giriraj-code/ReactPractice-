import React from 'react'
import Navbar from './Navbar.jsx'
import { PageOneContent } from './PageOneContent.jsx'
const Section1 = (props) => {

  return (
    <div className="h-screen w-full mb-50 ">
    <Navbar/>
    <PageOneContent users={props.users}/>
    </div>
    
  )
}

export default Section1