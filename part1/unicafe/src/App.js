import { useState } from "react";

const Header = () => <h1>give feedback</h1>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = ({ text, value, sign }) => (
  <tbody>
    <tr>
      <td>{text}</td>
      <td>
        {value} {sign ? "%" : ""}
      </td>
    </tr>
  </tbody>
);
const Statistics = (props) => {
  const good = props.stats[0];
  const neutral = props.stats[1];
  const bad = props.stats[2];
  const clicks = props.stats[3];
  if (clicks === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={clicks} />
        <StatisticLine text="average" value={(good * 1 + bad * -1) / clicks} />
        <StatisticLine
          text="positive"
          value={(good / clicks) * 100}
          sign={true}
        />
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own line
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [clicks, setClicks] = useState(0);

  const handleGoodClick = () => {
    const goodTotal = good + 1;
    setClicks(clicks + 1);
    setGood(goodTotal);
  };
  const handleBadClick = () => {
    const badTotal = bad + 1;
    setClicks(clicks + 1);
    setBad(badTotal);
  };
  const handleNeutralClick = () => {
    const neutralTotal = neutral + 1;
    setClicks(clicks + 1);
    setNeutral(neutralTotal);
  };
  const stats = [good, neutral, bad, clicks];

  return (
    <div>
      <Header />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics stats={stats} />
    </div>
  );
};

export default App;
