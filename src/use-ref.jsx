import { useEffect, useRef, useState } from "react";

export function WorkshopUseRef() {
  const [name, setName] = useState("");
  const previousName = useRef();

  useEffect(() => {
    previousName.current = name
  }, [name])

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello! my name is {name}</p>

      <pre>my name was: {previousName.current}</pre>
    </div>
  );
}
