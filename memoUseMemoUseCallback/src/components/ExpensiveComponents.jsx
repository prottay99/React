import { memo, useMemo } from "react";

const ExpensiveComponent = () => {
  //   Expensive calculation function
  const sum = () => {
    console.log("Calculating sum...");
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

  const total = useMemo(() => sum(), []);

  // const total = sum();

  return <p> sum: {total} </p>;
};

export default ExpensiveComponent;
