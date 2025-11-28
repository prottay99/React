import React, { memo, useRef } from "react";

const MemoCount = memo(({ bioData }) => {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <div>
      <p>
        Nothing changed here but Ive now rendered:
        <span>{renderCount.current++} time(s)</span>
      </p>
      <p>My name is {bioData.name}</p>
    </div>
  );
});

export default MemoCount;
