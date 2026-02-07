import { ArrowRight, } from 'lucide-react'
import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80  rounded-4xl '>
        <img className='rounded-4xl h-full w-full object-cover' src={props.img} alt="" />
        <div className='absolute top-0 left-0 h-full w-full  pl-4 pt-9 flex flex-col justify-between '>
            <h2 className='bg-white text-xl font-semi rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
        <div>
          <p className=' text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus natus repudiandae iusto, laboriosam reiciendis illo.</p>
        
        <div>
            <button style={{backgroundColor:props.color}} className=' text-white font-medium px-4 py-1 rounded-full text-lg   bg-transparent hover:bg-transparent text-blue-700 font-semibold hover:text-blue-800 py-2 px-4 border border-blue-500 hover:border-blue-700 rounded '>{props.tag}</button>
           <div className='mt-6 pl-2 pb-3 bg flex items-center gap-2 text-white font-medium cursor-pointer'>
            <ArrowRight/></div> 
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default RightCard




