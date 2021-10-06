import React from "react";
import {Sun, Moon} from "@styled-icons/evaicons-solid"
import { LogoThemeSwitcher } from "../models/UI";
import "../styles/Buttons.css";

import { ThemeContext } from "./Layout";



interface IProps {
  logoThemeSwitcherType: LogoThemeSwitcher,
  darkColor            : string,
  lightColor           : string 
};

function ThemeToggleButton({ logoThemeSwitcherType, darkColor, lightColor}: IProps) {
 return (
   <ThemeContext.Consumer>
    { ({toggleDark, currentTheme}) => (
      <>
      {
       logoThemeSwitcherType === "Moon / Sun" && 
    (
      <>
        <button id="button-theme-container" onClick={toggleDark}>
          { currentTheme === 'dark' && <Sun color={lightColor} width="2em"/> }
          { currentTheme === 'light' &&  <Moon color={darkColor} width="2em"/> }
        </button>
      </>
    )
      }
      {
       logoThemeSwitcherType === "Texte" && 
        <button onClick={toggleDark}>Switch Theme (Text)</button>
      }
      
      </>
     )}
   </ThemeContext.Consumer>
 );
};

export { ThemeToggleButton };
