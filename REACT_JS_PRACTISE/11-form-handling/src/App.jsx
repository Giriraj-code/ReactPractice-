import React from 'react'

const App = () => {
  const submitHandler = (e) =>{
    e.preventDefault()
    console.log('form submited')
  }
  return (
    <div>
      <div className='div2'>
        <form action="#" onClick={(e)=>{
          submitHandler(e)
        }}>
          <input className='input1' placeholder='Write something ?' type="text" />
          <input className='input2' placeholder='Write something ?' type="text" />
        <div className='btnDiv'>
          <button  className='btn'>SUBMIT</button>

        </div>
        </form>
      </div>
    </div>
  )
}

export default App