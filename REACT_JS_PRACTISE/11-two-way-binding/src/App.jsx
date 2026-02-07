import React from "react";
import { useState } from "react";
const App = () => {
  const [Title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submited", Title);
  };

  

  return (
    <div>
      <div className="div2">
        <form
          action="#"
          onClick={(e) => {
            submitHandler(e);
          }}
        >
          <input
            className="input1"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={Title}
            placeholder="Write something ?"
            type="text"
          />
          <input
            className="input2"
            placeholder="Write something ?"
            type="text"
          />
          <div className="btnDiv">
            <button className="btn">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
