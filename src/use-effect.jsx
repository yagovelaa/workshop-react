import { useEffect, useState } from "react";

export function WorkshopUseEffect() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    
      const json = await response.json();

      setItems(json)
    }

    getItems()
  }, [resourceType]);

  useEffect(() => {
    console.log("componentDidMount");

    return () => {
      console.log("componentWillUnmount");
    };
  }, [])

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

      {items.map((item) => (  
        <p key={item.id}>{item.title || item.name}</p>
      ))}
    </div>
  );
}
