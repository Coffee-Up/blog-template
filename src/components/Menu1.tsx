import React from "react";
import { Link  } from "gatsby";
import "../styles/Menu1.css";

import { ThemeToggleButton } from "./Buttons";
import { MainMenuStyles } from "../models/MenuPrismicStyles";

interface Props {
  mainMenuPrismicStyles: MainMenuStyles
}

export default class Menu1 extends React.Component<Props> {
 render() {  
const { mainMenuPrismicStyles } = this.props;
  return (
   <header style={mainMenuPrismicStyles}>
    <ThemeToggleButton />
    <Link to='/'>Lien 1</Link>
    <Link to='/'>Lien 2</Link>
    <Link to='/'>Lien 3</Link>
    <Link to='/'>Lien 4</Link>
   </header>
  );
 }
};