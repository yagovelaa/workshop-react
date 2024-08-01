import { useEffect, useState } from "react";

export function WorkshopUseLayoutEffect() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.group(count);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
}
