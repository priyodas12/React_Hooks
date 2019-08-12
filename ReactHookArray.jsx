import React, { useState } from "react";

function ReactHookCounterArray() {
  const [item, setItem] = useState([]);

  let additems = e => {
    setItem([
      ...item,
      {
        id: item.length * 101,
        value: Math.floor(Math.random() * 12) + 1
      }
    ]);
  };
  return (
    <div>
      <button onClick={additems}>Add a number</button>
      <ul>
        {item.map(items => (
          <li key={items.id}>{items.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReactHookCounterArray;
