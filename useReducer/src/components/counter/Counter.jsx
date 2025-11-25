import React, { useReducer } from "react";

const Counter = () => {
  const reducer = (count, action) => {
    if (action.type === "INCREMENT") {
      return count + 1;
    }
    if (action.type === "DECREMENT") {
      return count - 1;
    }
  };
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Counter;
