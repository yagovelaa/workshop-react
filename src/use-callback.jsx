import { useState } from "react";
import { List } from "./components/list";

export function WorkshopUseCallback() {
  const [text, setText] = useState("")
  const [resourceType, setResourceType] = useState("posts")

  async function getItems() {
    console.log('getItems is being called!')

    const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    const responseJSON = await response.json()

    return responseJSON
  }

  return (
    <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />

        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
        <button onClick={() => setResourceType("todos")}>Todos</button>

        <List getItems={getItems} />
    </div>
  )
}

