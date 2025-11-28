import React, { useState } from "react";
import ExpensiveComponent from "./ExpensiveComponents";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ExpensiveComponent />
      <button onClick={() => setCount(count + 1)}>Re-render Parent</button>
      <p>Parent re-renders: {count}</p>
    </div>
  );
};

export default UseMemo;
