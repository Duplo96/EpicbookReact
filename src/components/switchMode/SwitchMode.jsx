import React, { useState } from "react";
import "./switchMode.css";
const SwitchMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div
      id="toggle-btn"
      className={isDarkMode ? "toggle-btn--dark" : ""}
      onClick={handleToggle}
    ></div>
  );
};

export default SwitchMode;
