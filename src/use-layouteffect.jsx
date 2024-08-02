import { useEffect, useRef, useState } from "react";

export function WorkshopUseLayoutEffect() {
  const [show, setShow] = useState(false)

  const popup = useRef()
  const button = useRef()

  useEffect(() => {
    if(!popup.current || !button.current) return;

    const { bottom } = button.current.getBoundingClientRect();

    popup.current.style.top = `${bottom + 100}px`
  }, [show])

  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>Toggle Modal</button>

      {show && (
        <div style={{ position: 'absolute' }} ref={popup}>hello from modal</div>
      )}
    </>
  )
}
