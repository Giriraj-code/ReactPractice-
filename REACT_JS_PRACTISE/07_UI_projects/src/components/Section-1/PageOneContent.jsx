import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

 export const PageOneContent = (props) => {
  return (
    <div className='py-16 pt-6 flex items-center gap-10 h-[90vh] px-18'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default PageOneContent