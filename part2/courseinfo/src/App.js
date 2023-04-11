import React from "react";

const Course = ({ course }) => {
  // console.log("courses", course);
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((x) => {
        return (
          <p key={x.id}>
            {x.name} {x.exercises}
          </p>
        );
      })}
      <p>
        <b>
          total of {course.parts.reduce((sum, obj) => sum + obj.exercises, 0)}{" "}
          exercises
        </b>
      </p>
    </div>
  );
};
const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
