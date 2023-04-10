import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [arr, setArr] = useState(new Array(anecdotes.length).fill(0));

  const handleRandClick = () => {
    const rand = Math.floor(Math.random() * anecdotes.length);

    return setSelected(rand);
  };
  const handleVotes = () => {
    const copy = [...arr];
    // console.log("previous", copy);
    copy[selected] += 1;
    setArr(copy);
    // console.log("updated", copy);
  };
  const max = Math.max(...arr);
  // console.log("val max:", max);
  const index = arr.indexOf(max);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleRandClick}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[index]}
    </div>
  );
};

export default App;
