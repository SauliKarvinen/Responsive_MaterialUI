import React from "react";

const Counter = React.memo(({ handleClick }) => {
  console.log("COUNTER RENDERED!");
  return (
    <div>
      <button onClick={() => handleClick({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => handleClick({ type: "decrement" })}>
        Decrement
      </button>
    </div>
  );
});

export default Counter;
