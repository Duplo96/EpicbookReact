import React from "react";
import "./switchMode.css";
import { useDispatch, useSelector } from "react-redux";
import { darkState, handleDarkMode } from "../../reducer/darkModeSlice";
const SwitchMode = () => {
  const isDarkMode = useSelector(darkState);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(handleDarkMode());
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
