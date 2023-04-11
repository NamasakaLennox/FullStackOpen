import React from "react";

const Course = ({ course }) => {
  // console.log("courses", course);
  return course.map((head) => (
    <div key={head.id}>
      <h1>{head.name}</h1>
      {head.parts.map((x) => (
        <p key={x.id}>
          {x.name} {x.exercises}
        </p>
      ))}
      <p>
        <b>
          total of {head.parts.reduce((sum, obj) => sum + obj.exercises, 0)}{" "}
          exercises
        </b>
      </p>
    </div>
  ));
};

export default Course;
