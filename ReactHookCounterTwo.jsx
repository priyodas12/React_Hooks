import React, { useState } from "react";

function ReactHookCounter2() {
  const initialCount = 0;
  const maxCount = 100;
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <button
        className="btn btn-primary border border-dark"
        onClick={() => setCount(count + 1)}
      >
        Increment by 1
      </button>
      <button
        className="btn btn-primary border border-dark"
        onClick={
          count < maxCount
            ? () => {
                for (let i = 0; i < 5; i++) {
                  setCount(previousCount => previousCount + 1);
                }
              }
            : initialCount
        }
      >
        Increment by 5
      </button>
      <button className="btn btn-success border border-dark">
        Count:{count}
      </button>
      <button
        className="btn btn-primary border border-dark"
        onClick={
          count >= 5
            ? () => {
                for (let i = 0; i < 5; i++) {
                  setCount(previousCount => previousCount - 1);
                }
              }
            : initialCount
        }
      >
        Decrement by 5
      </button>
      <button
        className="btn btn-primary border border-dark"
        onClick={
          count > initialCount ? () => setCount(count - 1) : initialCount
        }
      >
        Decrement by 1
      </button>
      <button
        className="btn btn-warning border border-dark"
        onClick={() => setCount(initialCount)}
      >
        Reset
      </button>
    </div>
  );
}

export default ReactHookCounter2;
