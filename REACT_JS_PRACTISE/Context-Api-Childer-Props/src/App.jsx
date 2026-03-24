import React from "react";
import NavBar from "./components/NavBar";

const App = () => {
  const [theme, setTheme] = React.useState("light");

  return (
    <div>
      <NavBar theme={theme}>
        <h2>This is NavBar</h2>
        <h3>child 2 </h3>
      </NavBar>
    </div>
  );
};


export default App;
