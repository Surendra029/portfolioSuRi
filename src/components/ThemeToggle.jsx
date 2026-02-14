import React, { useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("light-mode");
  };

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {dark ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
