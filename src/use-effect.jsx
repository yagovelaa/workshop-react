import { useState } from "react";

/*
 * [] Explicando array de dependências
 * [] Fazer fetch
 * [] Async e await no useEffect
 * [] componentDidMount
 * [] componentWillUnmount
 */

export function WorkshopUseEffect() {
  const [resourceType, setResourceType] = useState("posts");

  function changeResourceType(resourceType) {
    setResourceType(resourceType);
  }

  return (
    <div>
      <h1>{resourceType}</h1>

      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>Comments</button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
      </div>
    </div>
  );
}
