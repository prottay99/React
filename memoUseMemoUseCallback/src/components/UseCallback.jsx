import React, { memo, useCallback, useState } from "react";

const Button = memo(({ onclick, children }) => {
  console.log(`Rendering button: ${children}`);

  return <button onClick={onclick}>{children}</button>;
});

const UseCallback = () => {
  const [count, setCount] = useState(0);

  // const increment = () => {
  //   console.log("Increment Inside");
  //   setCount((prev) => prev + 1);
  // };

  const increment = useCallback(() => {
    console.log("Increment Inside");
    setCount((prev) => prev + 1);
  }, []);

  // const decrement = () => {
  //   setCount((prev) => prev - 1);
  // };

  const decrement = useCallback(() => {
    console.log("Decrement Inside");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onclick={increment}>Increment</Button>
      <Button onclick={decrement}>Decrement</Button>
    </div>
  );
};

export default UseCallback;
