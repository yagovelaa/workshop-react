import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

export function Greeting() {
  const {theme} = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: theme === "light" ? "#eee" : "#333",
          color: theme === "dark" ? "#eee" : "#333",
        }}
      >
        <h1>Hello world</h1>
      </div>
    </>
  );
}
