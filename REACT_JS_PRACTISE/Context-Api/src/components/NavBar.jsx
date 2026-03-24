import React from "react";

const NavBar = (props) => {
  function changeTheme(){
    props.setTheme('dark')  
    console.log(props.theme)
  }
  return (
    <div>
      <button onClick={changeTheme} className="p-2 mt-2  bg-blue-300 rounded-xl">Change Theme</button>
      <p>{props.setTheme}
      
      </p>
    </div>
  );
};

export default NavBar;
