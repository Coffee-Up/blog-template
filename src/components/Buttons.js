import React from "react";
import "../styles/Buttons.css";

import { ThemeContext } from "./";

const ActionButton = ({ onClick, children, className }) => {
 return (
  <button className={`button-action ${className}`} onClick={onClick}> { children }</button>
  );
};

function ThemeToggleButton() {
 return (
   <ThemeContext.Consumer>
    { ({toggleDark}) => (
      <button 
       onClick={toggleDark}
      >Toggle Theme</button>
     )}
   </ThemeContext.Consumer>
 );
};

export { ActionButton, ThemeToggleButton };
