import React from "react";
import { LogoThemeSwitcher } from "../models/UI";
import "../styles/Buttons.css";

import { ThemeContext } from "./Layout";

interface IProps {
  logoThemeSwitcherType: LogoThemeSwitcher
};

function ThemeToggleButton({ logoThemeSwitcherType }: IProps) {
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
