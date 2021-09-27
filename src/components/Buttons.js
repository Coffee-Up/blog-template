import React from "react";
import "../styles/Buttons.css";

import { ThemeContext } from "./Layout.js";

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

export { ThemeToggleButton };
