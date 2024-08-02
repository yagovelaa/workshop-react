import { useState } from "react";

export function WorkshopUseState() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount((prevState) => prevState + 2);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
}
