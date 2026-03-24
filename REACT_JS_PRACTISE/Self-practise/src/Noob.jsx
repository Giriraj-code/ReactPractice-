import React from "react";
import { useState } from "react";
const Noob = () => {
  const [name, setName] = useState("Ramos");
  const [age, setage] = useState(18);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() =>{
        setage(age+1)
      }}>Add Age</button>
      <p> Hello , {name}. You age {age}.</p>
    </div>
  );
};

export default Noob;
