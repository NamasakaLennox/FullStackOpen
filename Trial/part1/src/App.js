// import { useState } from "react";

// const Display = ({ counter }) => <div>{counter}</div>;

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>{text}</button>
// );

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   console.log("rendering with counter value", counter);

//   const increaseByOne = () => {
//     console.log("increasing value before", counter);
//     setCounter(counter + 1);
//   };

//   const decreaseByOne = () => {
//     console.log("decreasing value before", counter);
//     setCounter(counter - 1);
//   };

//   const setToZero = () => {
//     console.log("reseting to zero, value before", counter);
//     setCounter(0);
//   };

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button handleClick={decreaseByOne} text="Minus" />
//       <Button handleClick={setToZero} text="Reset" />
//       <Button handleClick={increaseByOne} text="Plus" />
//     </div>
//   );
// };

// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0,
//   });

//   const handleLeftClick = () => {
//     setClicks({ ...clicks, left: clicks.left + 1 });
//   };

//   const handleRightClick = () => {
//     setClicks({ ...clicks, right: clicks.right + 1 });
//   };

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   );
// };
// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return <div>the app is used by pressing the buttons</div>;
//   }

//   return <div>button press history: {props.allClicks.join(" ")}</div>;
// };

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>{text}</button>
// );

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);

//   const handleLeftClick = () => {
//     setAll(allClicks.concat("L"));
//     setLeft(left + 1);
//   };

//   const handleRightClick = () => {
//     setAll(allClicks.concat("R"));
//     setRight(right + 1);
//   };

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text="left" />
//       <Button handleClick={handleRightClick} text="right" />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   );
// };
import Note from "./components/Note";

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};
export default App;
