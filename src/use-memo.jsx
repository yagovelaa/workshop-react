import { useState } from "react";

export function WorkshopUseMemo() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  const doubleNumber = slowFunction(number);

  return (
    <>
      <p>{number}</p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>text: {text}</p>
    </>
  );
}

function slowFunction(number) {
  console.log("slow function is being called");

  for (let i = 0; i < 100000; i++) {}
  return number * 2;
}
