import { useEffect, useState } from "react"

export function List({getItems}) {
    const [items, setItems] = useState([])

    useEffect(() => {
        getItems().then((result) => setItems(result))
    }, [getItems])

    return (
        <>
            {items.map((item) => <p key={item.id}>{item?.title || item?.name}</p>)}
        </>
    )
}