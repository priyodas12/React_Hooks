import React, { useState } from "react";

function ReactHookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase={count}</button>
    </div>
  );
}

export default ReactHookCounter;
