
import React from "react";
import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  function handleInput() {
    setNumber((currNumber) => currNumber + 1);
  }
  return (
    <div>
      <p>Button clicked {number} times</p>
      <button onClick={handleInput}>Click me</button>
    </div>
  )
}

export default App
