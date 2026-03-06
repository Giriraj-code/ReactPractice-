import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  let params = useParams();
  console.log(params);
  console.log(params.id);

  return (
    <div>
      <h1>Course Details for : {params.id}</h1>
    </div>
  );
};

export default CourseDetail;
