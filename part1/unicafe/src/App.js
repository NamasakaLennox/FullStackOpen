import { useState } from "react";

const Header = () => <h1>give feedback</h1>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Stats = (props) => (
  <>
    <h1>statistics</h1>
    <p>
      good {props.good} <br></br>
      neutral {props.neutral} <br></br>
      bad {props.bad}
    </p>
  </>
);

const App = () => {
  // save clicks of each button to its own line
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    const goodTotal = good + 1;
    setGood(goodTotal);
  };
  const handleBadClick = () => {
    const badTotal = bad + 1;
    setBad(badTotal);
  };
  const handleNeutralClick = () => {
    const neutralTotal = neutral + 1;
    setNeutral(neutralTotal);
  };
  return (
    <div>
      <Header />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
