import React, { useReducer } from "react";

const initialState = {
  count: 0,
  inc: 2,
  dec: 2,
};

const Counter = () => {
  const reducer = (state, action) => {
    // if (action.type === "INCREMENT") {
    //   return count + 1;
    // }
    // if (action.type === "DECREMENT") {
    //   return count - 1;
    // }
    // if (action.type === "RESET") {
    //   return (count = 0);
    // }

    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };
      case "DECREMENT":
        return { ...state, count: state.count - 1 };
      case "RESET":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
