import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

export function Message() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: theme === "light" ? "#eee" : "#333",
          color: theme === "dark" ? "#eee" : "#333",
          marginBottom: 16,
        }}
      >
        <h1>Current theme: {theme}</h1>

        <button onClick={() => toggleTheme()}>Toggle Theme</button>
      </div>
    </>
  );
}
