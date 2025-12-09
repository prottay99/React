import React, { useEffect, useState } from "react";

const CleanUp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h4>The time ends in 100s</h4>
      <h1>{count}</h1>
    </div>
  );
};

export default CleanUp;
