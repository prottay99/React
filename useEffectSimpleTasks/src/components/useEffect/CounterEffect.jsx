import React, { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Count:", count);
  }, [count]);

  useEffect(() => {
    document.title = `${name}`;
  }, [name]);

  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br /> <br />
      <h4>Name : {name}</h4>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default CounterEffect;
