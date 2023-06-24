import "./styles.css";
import { useState } from "react";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <Counter />
    </div>
  );
}

function Heading() {
  return <header>Date Counter Mini APP📅📆</header>;
}

function Counter() {
  // const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [stepSliderValue, setStepSliderValue] = useState(1);
  // const [reset,SetReset] = useState(false)

  const date = new Date();
  date.setDate(date.getDate() + count);

  // const handleMinusStep = function () {
  //   setStep((s) => s - 1);
  // };
  // const handlePlusStep = function () {
  //   setStep((s) => s + 1);
  // };

  const handleSliderChange = (e) => {
    setStepSliderValue(Number(e.target.value));
  };

  const handleMinusCount = function () {
    setCount((c) => c - stepSliderValue);
  };
  const handlePlusCount = function () {
    setCount((c) => c + stepSliderValue);
  };

  const handleReset = function () {
    setCount(0);
    setStepSliderValue(1);
  };

  return (
    <div className="backgroundDiv">
      <div>
        <div>
          <input
            type="range"
            min={0}
            max={10}
            value={stepSliderValue}
            onChange={handleSliderChange}
          />
          <span>{stepSliderValue}</span>
        </div>
        <div>
          <button onClick={handleMinusCount}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />

          <button onClick={handlePlusCount}>+</button>
        </div>
        <div>
          <span>
            {count === 0
              ? "Today is "
              : count === 1
              ? `Tommorow is `
              : count > 1
              ? `${count} days from today is `
              : count === -1
              ? `Yesterday was `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}
