import React from 'react'

const App = () => {
  function handlClick(){
    alert("Button Clicked")
  }
  return (
    <div>
      <button onClick={handlClick}>Click Me</button>
    </div>
  )
}

export default App

// import React from 'react'

// const App = () => {
//   function handlClick(name){
//     alert(`Hello ${name}`)
//   }
//   return (
//     <div>
//       <button onClick={()=>{
//         handlClick('John')
//       }}>click</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   const [user, setUser] = useState("");
// function handleClick(){
//   setUser("John")
// }
//   return (
//     <div>
//       <h2>{user}</h2>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   function handleClick(){
//     alert("Button Clicked")
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       </div>
//   )
// }

// export default App

// import React from "react";

// const App = () => {
//   function mouseEnter() {
//     alert("Mouse Entered");
//   }
//   return (
//     <div
//       onMouseEnter={mouseEnter}
//       style={{color:"black", width: "200px", height: "100px", backgroundColor:"lightblue"}}
//     >Hover Me</div>
//   );
// };

// export default App;

// import React from "react";

// const App = () => {
//   function mouseEnter() {
//     alert("Mouse Entered");
//   }
//   return (
//     <div
//       onMouseLeave={mouseEnter}
//       style={{color:"black", width: "200px", height: "100px", backgroundColor:"lightblue"}}
//     >Hover Me</div>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";
// const App = () => {
//   const [color, setColor] = useState("lightblue");
//   return (
//     <div
//       style={{ color: "black", width: "200px", height: "100px", backgroundColor: color }}

//       onMouseEnter={() => {
//         setColor("orange");
//       }}
//       onMouseLeave={() => {
//         setColor("lightgray");
//       }}
//     >Hover Me</div>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";
// const App = () => {
//   const [color, setColor] = useState("white");
//   return (
//     <div
//       onMouseOver={() => {
//         setColor("yellow");
//       }}
//       style={{ backgroundColor: "color", padding: "40px", textAlign: "center" }}
//     >
//       Hover Me
//       <p>Child</p>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// function App() {
//   const [color, setColor] = useState("white");

//   return (
//     <div
//       onMouseOver={() => setColor("yellow")}
//       style={{
//         backgroundColor: color,
//         padding: "40px",
//         textAlign: "center",
//       }}
//     >
//       Hover Me
//       <p>Child Text</p>
//     </div>
//   );
// }

// export default App