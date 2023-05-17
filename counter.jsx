//5/17/23
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  function handleDecrease() {
    if (counter <= 0) {
      return 0;
    } else {
      setCounter(counter - 1);
    }
  }
  const handleIncrease = () => setCounter(counter + 1);
  const handleReset = () => setCounter(0);
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
