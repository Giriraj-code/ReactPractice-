import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log(props)
  return (
    <div id="right" className="h-full gap-10 overflow-x-auto flex flex-nowrap p-6 w-2/3  rounded-2xl">
      {props.users.map(function (element,index ) {
        return <RightCard key={index} color={element.color} id={index} img={element.img} tag={element.tag} />;
      })}
    </div>
  );
};

export default RightContent;
