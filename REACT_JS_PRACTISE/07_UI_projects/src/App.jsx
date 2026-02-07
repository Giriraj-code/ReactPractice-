import React from "react";
import Section1 from "./components/Section-1/Section1.jsx";
import Section2 from "./components/Section-2/Section2.jsx";

const App = () => {
  const users = [
    {img: "https://plus.unsplash.com/premium_photo-1661458384420-11a55b429b23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjBpbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D", color:'red', intro: "", tag: "Unbothered" },
    { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D", intro: "", color:'violet', tag: "Managment" }, {img: "https://plus.unsplash.com/premium_photo-1664910499146-ce16499d4836?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww", intro: "", color:'green', tag: "Happy" }, {img: "https://media.istockphoto.com/id/2148327938/photo/woman-uses-laptop-successful-curly-haired-hispanic-or-brazilian-woman-in-stylish-elegant.webp?a=1&b=1&s=612x612&w=0&k=20&c=1qD2SMcR8vclz3ghewFFj_afVbi9u3Gra3-j2JNhJpg=", intro: "", color:'blue', tag: "Underbanged" },
  {img:'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',intro:'', color:'orange',tag:'Happy'},{img:'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',intro:'', color:'skyblue',tag:'Collabe'},{img:'https://images.unsplash.com/photo-1769069919886-42b327098e41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',intro:'',color:'purple',tag:'Self-control'},{img:'https://media.istockphoto.com/id/2121827514/photo/portrait-of-young-businesswoman-with-curly-hairstyle-wear-trendy-smart-casual-outfit-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=R9TOnGlHwC2be_TtbV6WeVf_YPn5dZ24BDVVtRWUrvs=',intro:'',color:'pink',tag:'Charming'},];
  return (
    <>
      <Section1 users = {users} />
      <Section2 />
    </>
  );
};

export default App;
