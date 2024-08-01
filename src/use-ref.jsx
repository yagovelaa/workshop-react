import { useState } from "react";

export function WorkshopUseRef() {
  const [name, setName] = useState("");
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello! my name is {name}</p>
    </div>
  );
}
