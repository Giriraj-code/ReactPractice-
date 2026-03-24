import React from "react";

const App = () => {
  // localStorage.clear();
  // sessionStorage.clear();
  // localStorage.setItem("user", "Aman");
  // // localStorage.getItem('user')
  // const user = localStorage.getItem("user");
  // console.log(user);
  // localStorage.removeItem("user");

  const userArr = {
    name:'Rahul',
    age:22,
    collage:'Dy Patil',
    height:6,
    subject:'DSE'
  }

  localStorage.setItem('userArr',JSON.stringify(userArr))

  const user = JSON.parse(localStorage.getItem('userArr'))
  console.log(user)

  return <div>App</div>;
};

export default App;
