import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  function incr() {
    setCount(count + 1);
  }
  function decr() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incr}>increment</button>
      <button onClick={decr}>decrement</button>
    </div>
  );
};

export default Counter;
