import React from "react";
import NavBar2 from "./NavBar2";
import { useContext } from "react";
import { ThemeContextData } from "../context/ThemeContext";
const NavBar = (props) => {
  const data = useContext(ThemeContextData);
  console.log(props.children);
  return (
    <div className="nav">
      {/* <h2>Ronaldo</h2>
      <NavBar2 theme={props.theme} />
      {props.children[0]} */}
      {/* {data.children} */}
      <h2>{data}</h2>
      <NavBar2 theme={props.theme} />
      {props.children}
    </div>
  );
};

export default NavBar;
