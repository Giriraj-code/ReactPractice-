import React, { useState } from 'react'

const App = () => {
  const [Num, setNum] = useState({user:'Akash',age:24})
  // const [Num, setNum] = useState([10,20,30,40])
  
  const btnClicked = () =>{
  // const NewNum = {...Num}
  // console.log(NewNum)
  // NewNum.user = 'Ankit', NewNum.age = 25
  // console.log(NewNum)
  // setNum(NewNum )

  setNum(prev=>({...prev, user:'Raman', age:23}))

  // const NewNum = [...Num];
  // console.log(NewNum)
  // NewNum.push()
  // console.log(NewNum)
  // setNum(NewNum)
  // console.log(NewNum)
  // }

  // const PopClicked = () =>{
  //   const NewNum = [...Num];
  //   console.log(NewNum)
  //   NewNum.pop();
  //   console.log(NewNum)
  //   setNum(NewNum)
  //   console.log(NewNum)
  }
  return (
    <div>
      <h1>{Num.user} is {Num.age}</h1>
      <button  onClick={btnClicked}>Push</button>
      {/* <button  onClick={PopClicked}>Pop</button> */}

    </div>
  )
}

export default App