import React, { useMemo, useState } from "react";
import MemoCount from "./MemoCount";

const Counter = () => {
  const [count, setCount] = useState(0);

  // const myBioData = {
  //   name: "jhon",
  //   age: 30,
  // };

  const myBioData = useMemo(() => {
    return {
      name: "jhon",
      age: 30,
    };
  }, []);

  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <MemoCount bioData={myBioData} />
    </>
  );
};

export default Counter;
