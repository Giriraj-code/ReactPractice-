
import { useState } from 'react'

// const App = () => {

//   const [data, setData] = useState(null)

//   function getData(){
//     fetch('https://official-joke-api.appspot.com/random_joke')
//     .then(Response => Response.json())
//     .then(json => setData(json))
//     // .then(json => console.log(json))

//   // moder async await version

//   // async function getData(){
//   //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   //   const json = await response.json()
//   //   setData(json)
//   // }


//   }
//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
    
//     {data && (<div>
//       <p>Data ID: {data.id}</p>
//       <p>Data title: {data.punchline}</p>
//       <p>joke : {data.setup}</p>
//       <p>Type : {data.type}</p>
//     </div>)}

//     </div>
//   )
// }

// export default App


// Ab axios se kese kerte he sikh te he 

import axios from 'axios'

// const App = () => {

//     const [data, setData] = useState(null)

//     const getData = async() =>{
//         // const {data} = await axios.get('https://uselessfacts.jsph.pl/random.json')
//         // console.log(data) destructured form

//         const response = await axios.get('https://uselessfacts.jsph.pl/random.json')
//         setData(response.data) 
//         // normal from
//     }

//   return (
//     <div>
//         <button onClick={getData}>Get Data</button>
//         <div>
           
//         </div>
        
//     </div>
//   )
// }

// export default App



const App = () => {
  const [data, setData] = useState(null)

  const getData = async () => {
    const response = await axios.get('https://uselessfacts.jsph.pl/random.json')
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      {data && (
        <div>
          <h2>{data.text}</h2>
          <p>Source: {data.source}</p>
          <p>Language: {data.language}</p>
        </div>
      )}
    </div>
  )
}

export default App


