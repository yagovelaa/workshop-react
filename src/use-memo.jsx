import { useMemo, useState } from "react";

export function WorkshopUseMemo() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <>
      <p>{number}</p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <p>text: {text}</p>
    </>
  );
}

function slowFunction(number) {
  console.log("slow function is being called");

  for (let i = 0; i < 100000; i++) {}
  return number * 2;
}
