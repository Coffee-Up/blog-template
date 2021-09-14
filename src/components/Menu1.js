import React from "react";
import "../styles/Menu1.css";

import { ThemeToggleButton } from "./Buttons";

class Menu1 extends React.Component {

 render() {
  return (
   <header>
    <ThemeToggleButton />
    <h1> Menu </h1> 
   </header>
  );
 }
};

export default Menu1;
